$(document).ready(function() {
  $('.btnjumbo').click(function() {
    $('.questions').show();
  });

  $('.form').submit(function(event) {

    var active = $('select.active').val();
    var setting = $('select.setting').val();
    var monkey = $('input[name=monkey]:checked').val();
    var carbs = $('select.carbs').val();
    var celebrity = $('input[name=celebrity]:checked').val();

    var points = null;

    //setting question//

    if (setting === 'jungle') {
      points += 4;
    }

    else if (setting === 'city') {
      points += 2;
    }

    else if (setting === 'beach') {
      points += 1;
    }

    else {
      points += 3;
    }

    //active question//

    if (active === 'v-active') {
      points += 4;
    }

    else if (active === 'm-active') {
      points += 2;
    }

    else if (active === 'n-active') {
      points += 1;
    }

    else {
      points += 3;
    }

    //monkey question//

    if (monkey === 'bornean-orangutan') {
      points += 4;
    }

    else if (monkey === 'barbary-macaque') {
      points += 2;
    }

    else if (monkey === 'spider-monkey') {
      points += 1;
    }

    else {
      points += 3;
    }

    //carbs question//

    if (carbs === 'rice') {
      points += 4;
    }

    else if (carbs === 'bread') {
      points += 2;
    }

    else if (carbs === 'corn') {
      points += 1;
    }

    else {
      points += 3;
    }

    //celebrity question//

    if (celebrity === 'tonyjaa') {
      points += 4;
    }

    else if (celebrity === 'penelope') {
      points += 2;
    }

    else if (celebrity === 'pele') {
      points += 1;
    }

    else {
      points += 3;
    }

    //total points//

    if (points > 15) {
      $('.results').show();
      $('.chiangmai').show();
      $('.madrid, .egypt, .salvador').hide();
    }

    else if (points > 10) {
      $('.results').show();
      $('.egypt').show();
      $('.madrid, .salvador, .chiangmai').hide();
    }

    else if (points > 5) {
      $('.results').show();
      $('.madrid').show();
      $('.salvador, .egypt, .chiangmai').hide();
    }

    else {
      $('.results').show();
      $('.salvador').show();
      $('.madrid, .egypt, .chiangmai').hide();
    }

  event.preventDefault();
  });
});
