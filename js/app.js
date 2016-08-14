// Header function to add/remove sticky class when scrolling
$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.page-header').addClass("sticky");
    }
    else {
        $('.page-header').removeClass("sticky");
    }
});

// Smooth scrolling function for header links
function scrollToAnchor(id) {
    var tag = $("#" + id);
    $('html,body').animate({ scrollTop: tag.offset().top - 65}, 'slow');
}

// Enable smooth scrolling for links
$("#about-link").click(function() {
    scrollToAnchor('about')
});
$("#projects-link").click(function() {
    scrollToAnchor('projects')
});
$("#contact-link").click(function() {
    scrollToAnchor('contact')
});