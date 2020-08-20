import $ from "jquery";

export const smoothScroll = (el) => {
    $('html, body').animate({
        scrollTop: $(el).offset().top,
    }, 500);
};

export const smoothScrollBlogList = (el) => {
    $('html, body').animate({
        scrollTop: $(el).offset().top - 100,
    }, 500);
};