var foo = document.querySelector(".exp");

$(document).ready(function () {
  $('.exp').mouseenter(function () {

    foo.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.5)' }],
      {
        duration: 1000,
        fill: 'forwards',
        easing: "ease-in",
      })
  })
});

$(document).ready(function () {
  $('.Expériencesprofessionnelles').click(function () {

    foo.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.5)' }],
      {
        duration: 1000,
        fill: 'forwards',
        easing: "ease-in",
        direction: 'reverse',
      })
  })
});

//carrousel Loisirs

var img1 = document.querySelector('.img1')
var img2 = document.querySelector('.img2')
var img3 = document.querySelector('.img3')
var img4 = document.querySelector('.img4')
var img5 = document.querySelector('.img5')
var img6 = document.querySelector('.img6')
