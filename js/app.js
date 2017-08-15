// Header function to add/remove sticky class when scrolling
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
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
$("#home-link").click(function() {
    scrollToAnchor('start')
});
$("#about-link").click(function() {
    scrollToAnchor('about')
});
$("#projects-link").click(function() {
    scrollToAnchor('projects')
});
$("#contact-link").click(function() {
    scrollToAnchor('contact')
});
$("#lab-link").click(function() {
    scrollToAnchor('lab')
});

// Toastr notification options
toastr.options = {
    "closeButton": true,
    "onclick": null,
    "positionClass": "toast-bottom-right"
}
toastr.info('Website is a work in progress! The rest is coming soon!');