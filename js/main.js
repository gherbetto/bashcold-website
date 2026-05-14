$(function () {
  var ajaxInitialize = function () {
    if (jQuery.fn.selectpicker) {
      $("select.selectpicker").selectpicker();
    }

    if (jQuery.fn.datetimepicker) {
      $(".datetimepicker-input").datetimepicker({
        format: "L",
        locale: "RU",
      });
    }

    if (jQuery.fn.inputmask) {
      $(".phone-mask input").inputmask({
        mask: "+7 (999) 999-9999",
        showMaskOnHover: false,
      });
    }
  };

  $(document).ajaxComplete(ajaxInitialize);

  if (jQuery.fn.selectpicker) {
    $("select.selectpicker").selectpicker();
  }

  if (jQuery.fn.datetimepicker) {
    $(".datetimepicker-input").datetimepicker({
      format: "L",
      locale: "RU",
    });
  }

  if (jQuery.fn.inputmask) {
    $(".phone-mask input").inputmask({
      mask: "+7 (999) 999-9999",
      showMaskOnHover: false,
    });
  }

  $(document).on("hidden.bs.modal", ".modal", function () {
    $(".modal:visible").length && $(document.body).addClass("modal-open");
  });

  /*oform-input valid*/
  $(document).on("keyup", ".input-item", function () {
    if ($(this).find("input").length > 0) {
      if ($(this).find("input").val().length === 0) {
        $(this).removeClass("valid");
      } else {
        $(this).addClass("valid");
      }
    }
    if ($(this).find("textarea").length > 0) {
      if ($(this).find("textarea").val().length === 0) {
        $(this).removeClass("valid");
      } else {
        $(this).addClass("valid");
      }
    }
  });
  /*end oform-input valid*/

  /*file name*/
  $(".input-file input").change(function (event) {
    files = event.target.files;
    $(this)
      .parents(".input-file")
      .find(".input-file__text")
      .text(
        $(this)
          .val()
          .replace(/.+[\\\/]/, ""),
      );
  });
  /*end file name*/

  if ($("[data-fancybox]").length > 0) {
    $("[data-fancybox]").fancybox({
      loop: true,
      thumbs: {
        autoStart: true,
      },
    });
  }

  if ($(".main-slider").length > 0) {
    $(".main-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      dots: true,
      arrows: true,
      infinite: false,
      swipeToSlide: true,
      focusOnSelect: false,
      fade: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
    });
  }

  if ($(".main-production-slider").length > 0) {
    $(".main-production-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      dots: true,
      arrows: true,
      infinite: false,
      swipeToSlide: true,
      focusOnSelect: false,
      fade: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      infinite: true,
      prevArrow:
        "<button type='button' class='slick-prev'><i class='mps-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next'><i class='mps-arrow-right'></i></button>",
    });
  }

  if ($(".main-news-slider").length > 0) {
    $(".main-news-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      dots: true,
      arrows: true,
      infinite: false,
      swipeToSlide: true,
      focusOnSelect: false,
      fade: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      infinite: true,
      prevArrow:
        "<button type='button' class='slick-prev'><i class='mps-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next'><i class='mps-arrow-right'></i></button>",
    });
  }

  $(".big-drp__btn").on("click", function (e) {
    e.preventDefault();
    var parent = $(this).parents(".big-drp");

    if (parent.hasClass("open")) {
      parent.removeClass("open");
    } else {
      parent.addClass("open");
    }
  });

  $(document).on("click", function (event) {
    if ($(event.target).closest(".big-drp").length) return;
    $(".big-drp").removeClass("open");
    event.stopPropagation();
  });

  $(".mobile-burger__btn").on("click", function () {
    $(this).parents(".mobile-burger").addClass("open");
    $("body").addClass("burger-open");
  });

  $(".mobile-burger__close").on("click", function () {
    $(this).parents(".mobile-burger").removeClass("open");
    $("body").removeClass("burger-open");
  });

  if ($(".product-inner-slider").length > 0) {
    $(".product-inner-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      dots: true,
      arrows: false,
      infinite: false,
      swipeToSlide: true,
      focusOnSelect: false,
      fade: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      infinite: true,
    });
  }

  if ($(".partners-slider").length > 0) {
    $(".partners-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      dots: true,
      arrows: false,
      infinite: false,
      swipeToSlide: true,
      focusOnSelect: false,
      fade: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      infinite: true,
    });
  }

  if ($(".product-more-slider").length > 0) {
    $(".product-more-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      lazyLoad: "ondemand",
      dots: true,
      arrows: true,
      infinite: false,
      swipeToSlide: true,
      focusOnSelect: false,
      adaptiveHeight: false,
      prevArrow:
        "<button type='button' class='slick-prev'><i class='mps-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next'><i class='mps-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  }

  if ($(".page-gallery-slider").length > 0) {
    $(".page-gallery-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      lazyLoad: "ondemand",
      dots: true,
      arrows: true,
      infinite: false,
      swipeToSlide: true,
      focusOnSelect: false,
      adaptiveHeight: false,
      prevArrow:
        "<button type='button' class='slick-prev'><i class='mps-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next'><i class='mps-arrow-right'></i></button>",
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  }

  if ($("#pib_clps").length > 0) {
    var pib_clps = document.getElementById("pib_clps");
    pib_clps.addEventListener("hidden.bs.collapse", function () {
      var btn = $(".product-inner-body__more .btn");
      var data_show = btn.attr("data-show");
      var data_hide = btn.attr("data-hide");

      btn.find("span").text(data_show);
    });
    pib_clps.addEventListener("shown.bs.collapse", function () {
      var btn = $(".product-inner-body__more .btn");
      var data_show = btn.attr("data-show");
      var data_hide = btn.attr("data-hide");

      btn.find("span").text(data_hide);
    });
  }

  $(".catalog-mob-select__btn").on("click", function () {
    if ($(this).parents(".catalog-mob-select").hasClass("open")) {
      $(this).parents(".catalog-mob-select").removeClass("open");
    } else {
      $(this).parents(".catalog-mob-select").addClass("open");
    }
  });

  $(".cms-item-wr .cms-item").on("click", function () {
    // var html = $(this).html();
    //
    // $(this).parents('.catalog-mob-select').find('.catalog-mob-select__btn').find('.cms-item').html(html);

    $(this).parents(".catalog-mob-select").removeClass("open");
  });

  $(document).on("click", function (event) {
    if ($(event.target).closest(".catalog-mob-select").length) return;
    $(".catalog-mob-select").removeClass("open");
    event.stopPropagation();
  });

  $(".header-search input").on("input", function () {
    if ($(this).val().length !== 0) {
      $(this).parents(".header-search").addClass("inputed");
    } else {
      $(this).parents(".header-search").removeClass("inputed");
    }
  });

  $(".header-search__clear").on("click", function () {
    $(this).parents(".header-search").removeClass("inputed");
    $(this).parents(".header-search").find("input").val("");
  });

  if ($(".date-pick-solo").length > 0) {
    $(".date-pick-solo").daterangepicker({
      autoUpdateInput: false,
      singleDatePicker: true,
      startDate: moment(),
      endDate: moment(),
      autoApply: true,
      locale: {
        format: "DD.MM.YYYY",
        separator: " - ",
        applyLabel: "Применить",
        cancelLabel: "Отмена",
        fromLabel: "От",
        toLabel: "До",
        customRangeLabel: "Custom",
        weekLabel: "W",
        daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        monthNames: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь",
        ],
        firstDay: 1,
      },
    });

    $(".date-pick-solo").on("apply.daterangepicker", function (ev, picker) {
      $(this).val(picker.startDate.format("DD.MM.YYYY"));
      $(this).parents(".input-item").addClass("valid");
    });

    $(".date-pick-solo").on("cancel.daterangepicker", function (ev, picker) {
      $(this).val("");
      $(this).parents(".input-item").removeClass("valid");
    });
  }

  var headerOffset = $(".header-nav-wr").offset().top;
  var headerHeight = $(".header-nav-wr").outerHeight();

  $(window).on("load scroll", function () {
    if ($(this).scrollTop() >= headerOffset + headerHeight) {
      $(".header-nav-wr").addClass("is-fixed");
      $(".header-top").css("padding-bottom", headerHeight - 20 + 30);
    } else {
      $(".header-nav-wr").removeClass("is-fixed");
      $(".header-top").css("padding-bottom", 30);
    }
  });

  $(".where-buy-tabs .dropdown .dropdown-menu a").on("click", function () {
    $(this).parents("li").siblings("li").find("a").removeClass("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (typeof yall === "function") {
    yall({
      observeChanges: true,
    });
  }

  const popup = document.getElementById("cookie-consent-popup");
  const acceptBtn = document.getElementById("cookie-consent-accept");

  // 1. Guard clause: Exit if elements don't exist on this page
  if (!popup || !acceptBtn) return;

  // 2. Check storage
  const hasConsented = localStorage.getItem("cookieConsent");

  if (!hasConsented) {
    // Better to use classes for styling
    popup.classList.remove("is-hidden");
  }

  // 3. Event Listener

  acceptBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent accidental form submits if wrapped
    localStorage.setItem("cookieConsent", "true");
    popup.classList.add("is-hidden");
  });
});
