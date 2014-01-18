$('a.pledge-jump').click(function(e){
  e.preventDefault();
  debugger ;
  $('html, body').animate({
    // scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    scrollTop: $('a[name="the-pledge"]').offset().top
  }, 500);
  return false;
});
