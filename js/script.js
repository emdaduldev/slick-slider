$(function(){

    $('.banner-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        dots: true,
      });

      $('.sliders').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        arrows: true,
        prevArrow: '.rahman',
        nextArrow: '.emdadul',
      });


      $('.food-sliders').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '.one',
        nextArrow: '.two',
      });

})