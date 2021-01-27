(function ($) {
  function selectToggle() {
    $(".custom-select .selected-item").on("click", function () {
      $(this).closest(".custom-select").toggleClass("show-dropdown");
    });
    $(document).on("click", function (event) {
      var $trigger = $(".custom-select");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".custom-select").removeClass("show-dropdown");
      }
    });
  }
  selectToggle();

  function btn_progress() {
    $(".form-wrap .select-list-container .select-grid:last-child").on(
      "click",
      function () {
        $(".form-wrap button").removeClass("is-disable");
        $(".form-wrap button").addClass("active");
        $(".form-wrap .progress_bar").addClass("active");
      }
    );
  }
  btn_progress();

  function headerStyle() {
    var scrollLink = $(".scroll-top");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 400) {
        scrollLink.addClass("open");
        $("header").addClass("scroll-header");
      } else {
        scrollLink.removeClass("open");
        $("header").removeClass("scroll-header");
      }
    });
    /*  scrollLink.on('click', function() {
      window.scrollTo(0, 0);
    }); */
  }
  headerStyle();

  function openModal() {
    $(".modal-link").on("click", function (e) {
      e.preventDefault();
      var targetId = $(this).attr("popup-link");
      $("#" + targetId).addClass("open");
    });
  }
  openModal();

  function closeModal() {
    $(".popup-footer .common-button, .close-icon, .status-button").on(
      "click",
      function (e) {
        e.preventDefault();
        $(this).closest(".popup").removeClass("open");
      }
    );
  }
  closeModal();

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }
})(window.jQuery);
