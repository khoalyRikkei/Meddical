$(".slider-center").slick({
    centerMode: true,
    centerPadding: "16px",
    slidesToShow: 1.5,
    mobileFirst: true,
    arrows: false,
    dots: true,
    cssEase: "ease",
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "20px",
                slidesToShow: 3,
            },
        },
    ],
});
