$(document).ready(function(){
  /* menu */
  let $btnHumburger = $('.header-navbar__hamburger');
  let $navbarList = $('.header-navbar__list');
  let $window = $(window);
  let $body = $('body');
  let isShow = false;

  let toggleActive = () => {
    $btnHumburger.toggleClass('active');
    isShow ? $body.removeAttr('class') : $body.toggleClass('active');
    $navbarList.fadeToggle(500);
    isShow = !isShow;
  };

  $btnHumburger.on('click', () => {
    toggleActive();
    return false;
  });

  $body.on('click', () => isShow && toggleActive());

  $window.on('resize', () => {
    if ($window.width() > 768 && isShow) {
      toggleActive();
    }
  });

  /* slider */
  let $slides = $('.slide');
  let $indContainer = $('.indicators');
  let $indItems = $('.indicator');
  let currentSlide = 0;
  let playbackStatus = true;
  const carouselInterval = 5000;
  const movedInterval = 500;

  let gotoNSlide = (n) => {
    const i = currentSlide;

    $($slides[currentSlide]).toggleClass('active moved');
    $($indItems[currentSlide]).toggleClass('active');
    currentSlide = (n + $slides.length) % $slides.length;
    $($slides[currentSlide]).toggleClass('active');
    $($indItems[currentSlide]).toggleClass('active');

    setTimeout(() => {
      $($slides[i]).removeClass('moved');
    }, movedInterval)
  };

  let gotoNextSlide = () => gotoNSlide(currentSlide + 1);

  let slideInterval = setInterval(gotoNextSlide, carouselInterval);

  let pauseSlideShow = () => {
    if (playbackStatus) {
      playbackStatus = !playbackStatus;
      clearInterval(slideInterval);
    }
  };

  let clickIndicatorBtn = (e) => {
    pauseSlideShow();
    gotoNSlide(+e.target.getAttribute('data-slide-to'));
  };

  $indContainer.on('click', '.indicator', clickIndicatorBtn);
});
