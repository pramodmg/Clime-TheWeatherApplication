currentIndex = 0;
pages = [$('#page1'), $('#page2')];
var selector = $(".selector");

function scrollRight() {

    if (currentIndex === 0) return;
    pages[currentIndex].removeClass('stage-center');
    pages[currentIndex].addClass('stage-right');

    pages[currentIndex - 1].removeClass('stage-left');
    pages[currentIndex - 1].addClass('stage-center');

    currentIndex = currentIndex - 1;
    $("i", $(selector)).removeClass("selected");
    $($(selector).find("i")[currentIndex]).addClass("selected");

    $("#sr").removeClass("fa-circle");
    $("#sr").addClass("fa-circle-o");
    $("#sl").removeClass("fa-circle-o");
    $("#sl").addClass("fa-circle");
}

function scrollLeft() {

    if (currentIndex === pages.length - 1) return;

    pages[currentIndex].removeClass('stage-center');
    pages[currentIndex].addClass('stage-left');

    pages[currentIndex + 1].removeClass('stage-right');
    pages[currentIndex + 1].addClass('stage-center');

    currentIndex = currentIndex + 1;
    $("i", $(selector)).removeClass("selected");
    $($(selector).find("i")[currentIndex]).addClass("selected");

    $("#sl").removeClass("fa-circle");
    $("#sl").addClass("fa-circle-o");
    $("#sr").removeClass("fa-circle-o");
    $("#sr").addClass("fa-circle");
}

$('#container').swipeLeft(scrollLeft);
$('#container').swipeRight(scrollRight);
