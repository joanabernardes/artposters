var imagens = $.makeArray($('.img'));

var imgCentro, imgNext, imgPrev, imgNext2, imgPrev2;
var wImg, xCentro, xNext, xPrev, xNext2, xPrev2;
var d1 = 1;

function setImageRoles() {
  imgCentro = imagens[0];
  imgNext = imagens[1];
  imgPrev = imagens[imagens.length-1];
  imgNext2 = imagens[2];
  imgPrev2 = imagens[imagens.length-2];
}
setImageRoles();

function positionImages() {
  wImg = 600;
  xCentro = (window.outerWidth - wImg) / 2;
  xNext = window.outerWidth - (wImg * .2);
  xPrev = -wImg * .8;
  xNext2 = window.outerWidth + wImg * 2;
  xPrev2 = -wImg * 2;
  
  TweenMax.set(imagens, {x:-1000});
  TweenMax.set(imgCentro,{x:xCentro, scale:1.2});
  TweenMax.set(imgNext,{x:xNext});
  TweenMax.set(imgPrev,{x:xPrev});
}
positionImages();

function clicaNext() {
  TweenMax.to(imgPrev, d1, {x:xPrev2});
  TweenMax.to(imgCentro, d1, {x:xPrev, scale:1});
  TweenMax.to(imgNext, d1, {x:xCentro, scale:1.2});
  TweenMax.fromTo(imgNext2, d1, {x:xNext2}, {x:xNext});
  
  imagens.push(imagens.shift());
  
  setImageRoles();
}
function clicaPrev() {
  TweenMax.to(imgPrev, d1, {x:xCentro, scale:1.2});
  TweenMax.to(imgCentro, d1, {x:xNext, scale:1});
  TweenMax.to(imgNext, d1, {x:xNext2});
  TweenMax.fromTo(imgPrev2, d1, {x:xPrev2}, {x:xPrev}); 
  
  imagens.unshift(imagens.pop());
  
  setImageRoles();
}

// Buttons
var bNext = $('#buttonNext');
var bPrev = $('#buttonPrev');
bNext.click(clicaNext);
bPrev.click(clicaPrev);

// 
$(window).resize(function() {
  positionImages();
});