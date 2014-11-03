/**
 * @preserve Copyright 2012 Native5
 * This is a proprietary library defining core handlers and functions for 
 * native5 client side framework. This library uses elements of JQuery for selectors
 * and hence is used in tandem with it.
 * native5.core.js
 * version 0.5
 * author: Native5 Solutions Inc.
 */

/**
 * Usage :
 *
 *  app.config = {
 *      path:'app-base-path',
 *      method:'POST',
 *  }
 *  
 *  var notifyService = new native5.core.Service("/notify", app.config);
 *  notifyService.invoke(data);
 *
 */
var native5 = {};

(function(jQuery, native5) {
    native5.core = native5.core || {};

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    
    native5.core.Service = function(service_name, config) {
        var that = this;
        this.name = service_name;
        this.method = config.method;
        this.config = config;

        var successHandler = function(response) {
            if (response.redirect) {
                if (app.loader) app.loader.hideLoadingMessage();
                window.location.href = response.redirect;
                return;
            }
            if (that.successCallback) that.successCallback(response);
        };

        var defaultSuccessCallback = function(data) {
            if (that.config.toPage) {
                native5.notifier.hideProgress();
                if (app.currentPage == 'Home') return;
                var pageToShow = "#" + that.config.toPage;
                $.mobile.changePage(pageToShow);
                app.currentPage = that.config.toPage;
                $(pageToShow + ' div[data-role="content"]').empty();
                $(pageToShow + ' div[data-role="content"]').append(data.message);
                updateServiceRegistry();
            }
        };
        this.errorCallback = native5.core.defaultHandler;

        this.invoke = function(dataObj) {
            var url_to_invoke = this.name;
             if(!(/^http:\/\//.test(url_to_invoke)) && !(/^https:\/\//.test(url_to_invoke)))
         		url_to_invoke = this.config.path + "/" +this.name;
             if(!(/^http:\/\//.test(url_to_invoke)) && !(/^https:\/\//.test(url_to_invoke)))
                url_to_invoke = location.protocol + "//" + location.hostname + "/" + this.config.path + "/" + this.name;
            data = {};
            if (dataObj) {
                if (typeof dataObj == 'object') {
                    data = dataObj;
                } else if(typeof dataObj == 'string') {
                    try {
                        myData = $.parseJSON(dataObj);
                    } catch(err) {
                        myData = {
                            feed: dataObj
                        };
                    }
                    data = myData;
                }
            }
            data.mode = this.config.mode;
            data.count = this.config.count;
            if (app.loader) app.loader.showLoadingMessage();
            data.rand_token = getParameterByName('rand_token');
            // Handling history
            if (app && app.currentService) data['N5_NAME'] = app.currentService;
            //window.history.replaceState(data, null, window.location.href);
            if (app) app.currentService = this.name;
            console.log("URL to invoke: " + url_to_invoke);
            var request = $.ajax({
                url:url_to_invoke,
                beforeSend: function (request)
                {
                   request.setRequestHeader("X-Requested-Native5-App", 'phonegap');
                },
                type:this.method,
                data:data,
                dataType:"json",
                success:this.successHandler,
                error:this.errorCallback
            });
            if (successHandler) request.done(successHandler);
            if (this.errorCallback) request.fail(this.errorCallback);
            return request;
        };

        this.configureHandlers = function(successHandler, errorHandler) {
            this.successCallback = successHandler;
            this.errorCallback = errorHandler;
        };

        this.defaultHandler = function(data) {
            alert("No or incorrect handler defined for service response");
            if (DEBUG) console.log(data.message);
        };
    };

    native5.core.ServiceRegistry = function() {
        this.services = [];
        if (arguments.callee._singletonInstance) return arguments.callee._singletonInstance;
        arguments.callee._singletonInstance = this;

        this.addService = function(name, service) {
            // Can add in some validation like throwing an alert/error signalling that service with same name already exists.
            if (!this.services[name]) this.services[name] = service;
        };

        this.getService = function(name) {
            return this.services[name];
        };
    };
})($, native5);