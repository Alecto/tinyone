$(document).ready(function(){
  let $btnHumburger = $('.header-navbar__hamburger');
  let $navbarList = $('.header-navbar__list');
  let $window = $(window);
  let $body = $('body');
  let isShow = false;

  function toggleActive() {
    $btnHumburger.toggleClass('active');
    isShow ? $body.removeAttr('class') : $body.toggleClass('active');
    $navbarList.fadeToggle(500);
    isShow = !isShow;
  }

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
});
