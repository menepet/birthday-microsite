var birthYear = 1992
var images = [
  'sweet1.png',
  'sweet2.png',
  'sweet3.png',
  'sweet4.png',
  'sweet6.png',
  'sweet7.png',
  'sweet8.png',
  'sweet9.png',
  'sweet10.png',
  'sweet11.png'
]
var treatedOnce = false;

$('#box, #gift').click(function() {
  if (!treatedOnce) {
    $(this).fadeOut(200, function() {
      $(this).attr("src", "assets/box-opened.jpg").fadeIn();
      $('#gift').attr("src", 'assets/' + images[getRandomInt(images.length - 1)]).fadeIn();
    })
    treatedOnce = true;
  } else {
    $('#gift').fadeOut(200, function() {
      $(this).attr("src", 'assets/' + images[getRandomInt(images.length - 1)])
      $(this).fadeIn();
    });
  }

})

$('#age').text(new Date().getFullYear() - birthYear)

/**
* Returns a random integer between min (inclusive) and max (inclusive).
* The value is no lower than min (or the next integer greater than min
* if min isn't an integer) and no greater than max (or the next integer
* lower than max if max isn't an integer).
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * (max + 1));
}
