(function ($) {
  "use strict";

  // Preloader
  $("#page").css("display", "none");
  $(window).on("load", function () {
    $("#loader").addClass("loaded");
    $("#page").css("display", "");
  });

  // Navbar
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".desktop-navbar").addClass("navbar-scroll");
    } else {
      $(".desktop-navbar").removeClass("navbar-scroll");
    }
  });

  $(".js-clone-nav").each(function () {
    var $this = $(this);

    $this.clone().attr("class", "mobile-navbar-wrap").appendTo(".mobile-navbar-body");
  });

  $("body").on("click", ".js-menu-toggle", function (e) {
    var $this = $(this);
    e.preventDefault();

    if ($("body").hasClass("offcanvas-menu")) {
      $("body").removeClass("offcanvas-menu");
      $this.removeClass("active");
    } else {
      $("body").addClass("offcanvas-menu");
      $this.addClass("active");
    }

    if ($("body").hasClass("offcanvas-menu")) {
      $(".mobile-mask").addClass("active");
    } else {
      $(".mobile-mask").removeClass("active");
    }
  });

  $(document).mouseup(function (e) {
    var container = $(".mobile-navbar");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $(".mobile-mask").removeClass("active");
      }
    }
  });

  // Copy IP Button
  $("body").on("click", "#copyip", function () {
    navigator.clipboard.writeText("mc.hypixel.net").then((error) => {
      if (error) {
        console.error(error);
      } else {
        Swal.fire({
          icon: "success",
          title: "Server IP Copied",
          html: "Server IP successfully copied to the clipboard.",
        });
      }
    });
  });

  // Games Carousel
  new Swiper(".games-swiper", {
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 2500,
    },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: -50,
    slideActiveClass: "active",
    navigation: {
      nextEl: ".games-swiper-button-next",
      prevEl: ".games-swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
    },
  });

  // Partners Carousel
  new Swiper(".sponsor-swiper", {
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 2500,
    },
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Team Carousel
  new Swiper(".team-swiper", {
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 2500,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".team-swiper-button-next",
      prevEl: ".team-swiper-button-prev",
    },
    breakpoints: {
      762: {
        slidesPerView: 2,
      },
    },
  });
})(window.jQuery);
