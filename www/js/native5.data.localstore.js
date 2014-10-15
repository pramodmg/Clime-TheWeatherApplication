/**
 * @preserve Copyright 2012 Native5
 * Provides abstract client side store, leveraging WebStorage, WebSQL, IndexedDB, FileStore, Cookies
 * @depends jQuery.core v1.7+
 * version 0.5
 * author: Native5 Solutions Inc.
 */
(function(jQuery, native5) {
    native5.data = native5.data || {};
    native5.data.LocalStore = function() {
        this.db = {};
        this.db.name = "native5";
        this.db.desc = "Default Database";
        this.db.size = 5 * 1024 * 1024;

        this.setup = function(config) {
            var deferred = $.Deferred();
            if (config) {
                if (config.name !== undefined) this.db.name = config.name;
                if (config.desc !== undefined) this.db.desc = config.desc;
                if (config.size) this.db.size = config.size;
                if (config.tables) this.db.tables = config.tables;
            }
            this.database = openDatabase(this.db.name, '', this.db.desc, this.db.size);
            for (i = 0; i < this.db.tables.length; i++) {
                table = this.db.tables[i];

                sql = "create table if not exists " + table.name + "(";
                for (j = 0; j < table.columns.length; j++) {
                    column = table.columns[j];
                    sql += column.name + " " + column.type;
                    if (column.primary == 'true') sql += " PRIMARY KEY";
                    if (column.autoincrement) sql += ' AUTOINCREMENT';
                    sql = sql + ",";
                }
                sql = sql.substring(0, sql.length - 1) + ")";
                console.log(sql);
                this.database.transaction(function(tx) {
                    tx.executeSql(sql, [], function(tx, rs) {
                        console.log(rs);
                        deferred.resolve();
                    },
                    function(tx, e) {
                        console.log(e.message);
                        deferred.reject();
                    });
                });
            }
            return deferred.promise();
        };

        this.save = function(data, callback) {
            var deferred = $.Deferred();
            var d = new Date();
            var tablesToSave = this.db.tables;
            if(data.tables !== undefined) {
                tablesToSave = data.tables;
            }
            for (i = 0; i < tablesToSave.length; i++) {
                table = tablesToSave[i];
                console.log(table.name);
                insertSQL = "insert into " + table.name + "(";
                valStr = "values(";
                vals = [];
                for (var idx=0;idx<table.columns.length;idx++) {
                    var key =  table.columns[idx].name;
                    if(key != 'id') {
                        insertSQL += key + ",";
                        valStr += "?,";
                        vals.push(data[key]);
                    }
                }
                insertSQL = insertSQL.substring(0, insertSQL.length - 1);
                valStr = valStr.substring(0, valStr.length - 1);
                insertSQL += ") " + valStr + ")";
                console.log(insertSQL);
                this.database.transaction(function(tx) {
                    tx.executeSql(insertSQL, vals, callback, function(tx, e) {
                        console.log(e.message);
                        deferred.reject(e.message);
                    });
                });
            }
            return deferred.promise();
        };

        this.update = function(data, filters, callback) {
            var deferred = $.Deferred();
            var d = new Date;
            for (i = 0; i < data.tables.length; i++) {
                table = data.tables[i];
                uSQL = "update " + table.name + " set ";
                for (var key in table.values) {
                    uSQL += key + "=" + table.values[key] + ",";
                }
                uSQL = uSQL.substring(0, uSQL.length - 1);
                options = new Array();
                if (filters) {
                    for (i = 0; i < filters.length; i++) {
                        filter = filters[i];
                        if (filter) {
                            clause = " where ";
                            for (var i in filter) {
                                key = i;
                                if (filter.exact) {
                                    options.push(filter[i]);
                                    clause += key + " = ? and";
                                } else {
                                    fil = filter[i].trim();
                                    fil = "%" + fil.replace("*", "%") + "%";
                                    options.push(fil);
                                    clause += key + " like ? and";
                                }
                            }
                        }
                    }
                }
                clause = clause.substring(0, clause.lastIndexOf(" and"));
                uSQL = uSQL + clause;
                console.log(uSQL);
                this.database.transaction(function(tx) {
                    tx.executeSql(uSQL, options, callback, function(tx, e) {
                        console.log(e.message);
                        deferred.reject(e.message);
                    });
                });
            }
            return deferred.promise();
        };

        this.find = function(table, filters, callback) {
            var deferred = $.Deferred();
            selectC = "select * from " + table.name;
            options = new Array();
            if (filters) {
                for (i = 0; i < filters.length; i++) {
                    filter = filters[i];
                    if (filter) {
                        clause = " where ";
                        for (var i in filter) {
                            key = i;
                            if (key != "exact") {
                                if (filter.exact) {
                                    options.push(filter[i]);
                                    clause += key + " = ? and";
                                } else {
                                    fil = filter[i].trim();
                                    fil = "%" + fil.replace("*", "%") + "%";
                                    options.push(fil);
                                    clause += key + " like ? and";
                                }
                            }
                        }
                        clause = clause.substring(0, clause.lastIndexOf(" and"));
                        selectC = selectC + clause;
                    }
                }
            }
            this.database.transaction(function(tx) {
                tx.executeSql(selectC, options, callback);
            });
        };

        this.findUpdated = function(callback) {
            filters = new Array();
            filter = {};
            filter.updated = 1;
            filter.exact = 1;
            filters.push(filter);
            this.find(filter, callback);
        };

        this.deleteDB = function(table, filters, callback) {
            deleteC = "delete from " + table.name;
            options = new Array();
            if (filters) {
                for (i = 0; i < filters.length; i++) {
                    filter = filters[i];
                    if (filter) {
                        clause = " where ";
                        for (var i in filter) {
                            key = i;
                            if (filter[i] instanceof Array) {
                                clause += table.name + "." + key + " in (";
                                for (var j in filter[i]) {
                                    options.push(filter[i][j]);
                                    clause += "?,"
                                }
                                clause = clause.substring(0, clause.length - 1);
                                clause += ") and";
                            } else {
                                options.push(filter[i]);
                                clause += table.name + "." + key + " = ? and";
                            }
                        }
                        clause = clause.substring(0, clause.lastIndexOf(" and"));
                        deleteC = deleteC + clause;
                    }
                }
            }
            console.log(deleteC);
            this.database.transaction(function(tx) {
                tx.executeSql(deleteC, options, callback, function(tx, e) {
                    console.log("Error happened " + e);
                });
            });
        };
    };

})($, native5);
