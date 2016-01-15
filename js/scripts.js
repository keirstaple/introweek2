$(document).ready(function() {
  $('.btnjumbo').click(function() {
    $('.questions').show()
  });

  $('.form').submit(function(event) {
    var active = $('select.active').val()
    var setting = $('select.setting').val()
    var monkey = $('input[name=monkey]: checked').val()
    var carbs = $('select.carbs').val()
    var celebrity = $('input[name=celebrity]: checked').val()

  event.preventDefualt();
  });


});
