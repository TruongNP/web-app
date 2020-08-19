import $ from "jquery";

export const smoothScroll = (el) => {
    $('html, body').animate({
        scrollTop: $(el).offset().top,
    }, 500);
};