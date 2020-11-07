import '../style/index.less'
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'

/* Демонстрация работы jQuery */
// eslint-disable-next-line no-undef
$(document).ready(function() {
  // the first slider
  // eslint-disable-next-line no-undef
  $('.slider-speakers').slick({
    arrows: true,
    variableWidth: true,
    prevArrow: '<div class="prev"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L15.2415 7.04944L9 13.0989" stroke="white" stroke-width="1.5"/><path d="M0 7.25H14.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg></div>',
    nextArrow: '<div class="next"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L15.2415 7.04944L9 13.0989" stroke="white" stroke-width="1.5"/><path d="M0 7.25H14.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg></div>',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false
        }
      }
    ]
  });

  // the second slider
  $('.slider-photogallery').slick({
    arrows: true,
    variableWidth: true,
    prevArrow: '<div class="prev"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L15.2415 7.04944L9 13.0989" stroke="white" stroke-width="1.5"/><path d="M0 7.25H14.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg></div>',
    nextArrow: '<div class="next"><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L15.2415 7.04944L9 13.0989" stroke="white" stroke-width="1.5"/><path d="M0 7.25H14.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg></div>',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false
        }
      }]
  });

  // scroll to form
  $('a[href^=\'#\']').click(function() {
    // eslint-disable-next-line no-invalid-this
    const _href = $(this).attr('href');
    $('html, body').animate({scrollTop: $(_href).offset().top + 'px'}, 1300);
    return false;
  });
});
