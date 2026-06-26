(function ($) {

  "use strict";

  // init jarallax parallax
  var initJarallax = function () {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  window.addEventListener("load", (event) => {

    // preloader
    $(".preloader").addClass("loaded");

    // Initialize Isotope for project filtering
    var $container = $('.isotope-container').isotope({
      itemSelector: '.item',
      layoutMode: 'masonry'
    });

    // nav-bg change after scroll
    var initScrollNav = function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
          $('.navbar').removeClass("bg-opacity-50");
        } else {
          $('.navbar').addClass("bg-opacity-50");
        }
      });
    }

    // init Chocolat light box for project images
    var initChocolat = function () {
      Chocolat(document.querySelectorAll('.image-link'), {
        imageSize: 'contain',
        loop: true,
      })
    }

    $(document).ready(function () {

      initJarallax();
      initScrollNav();
      initChocolat();

      // Initialize Scroll Animations (AOS)
      AOS.init({
        duration: 2000,
        once: true,
      })

      // Services Slider
      var swiper = new Swiper(".offer-swiper", {
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".main-slider-button-next",
          prevEl: ".main-slider-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
      });

      // Testimonial Slider
      var swiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      // Active state for filter buttons
      $('.filter-button').click(function () {
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
      });

      // Filter portfolio items on button click
      $('.filter-button').click(function () {
        var filterValue = $(this).attr('data-filter');
        if (filterValue === '*') {
          $container.isotope({ filter: '*' });
        } else {
          $container.isotope({ filter: filterValue });
        }
      });

    });

  });

})(jQuery);
