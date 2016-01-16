$(document).ready(function() {
  $('.btnjumbo').click(function() {
    $('.questions').toggle()
    $('.results').hide()
  });

  $('.form').submit(function(event) {

    var active = $('select.active').val();
    var setting = $('select.setting').val();
    var monkey = $('input[name=monkey]:checked').val();
    var carbs = $('select.carbs').val();
    var celebrity = $('input[name=celebrity]:checked').val();

    var salvadortotal = null;
    var madridtotal = null;
    var egypttotal= null;
    var chiangmaitotal= null;

    //setting question//

    if (setting === 'jungle') {
      chiangmaitotal += 3;
      salvadortotal += 2;
      egypttotal += 1;
      madridtotal += 0;
    }

    else if (setting === 'city') {
      chiangmaitotal += 1;
      salvadortotal += 2;
      egypttotal += 0;
      madridtotal += 3;
    }

    else if (setting === 'beach') {
      chiangmaitotal += 1;
      salvadortotal += 3;
      egypttotal += 0;
      madridtotal += 2;
    }

    else {
      chiangmaitotal += 0;
      salvadortotal += 2;
      egypttotal += 3;
      madridtotal += 1;
    }

    //active question//

    if (active === 'v-active') {
      chiangmaitotal += 3;
      salvadortotal += 1;
      egypttotal += 0;
      madridtotal += 2;
    }

    else if (active === 'm-active') {
      chiangmaitotal += 2;
      salvadortotal += 1;
      egypttotal += 0;
      madridtotal += 3;
    }

    else if (active === 'n-active') {
      chiangmaitotal += 0;
      salvadortotal += 3;
      egypttotal += 2;
      madridtotal += 1;
    }

    else {
      chiangmaitotal += 0;
      salvadortotal += 2;
      egypttotal += 3;
      madridtotal += 1;
    }

    //monkey question//

    if (monkey === 'bornean-orangutan') {
      chiangmaitotal += 3;
      salvadortotal += 2;
      egypttotal += 1;
      madridtotal += 0;
    }

    else if (monkey === 'barbary-macaque') {
      chiangmaitotal += 1;
      salvadortotal += 0;
      egypttotal += 2;
      madridtotal += 3;
    }

    else if (monkey === 'spider-monkey') {
      chiangmaitotal += 2;
      salvadortotal += 3;
      egypttotal += 1;
      madridtotal += 0;
    }

    else {
      chiangmaitotal += 2;
      salvadortotal += 1;
      egypttotal += 3;
      madridtotal += 0;
    }

    //carbs question//

    if (carbs === 'rice') {
      chiangmaitotal += 3;
      salvadortotal += 2;
      egypttotal += 1;
      madridtotal += 0;
    }

    else if (carbs === 'bread') {
      chiangmaitotal += 0;
      salvadortotal += 1;
      egypttotal += 2;
      madridtotal += 3;
    }

    else if (carbs === 'corn') {
      chiangmaitotal += 0;
      salvadortotal += 3;
      egypttotal += 1;
      madridtotal += 2;
    }

    else {
      chiangmaitotal += 0;
      salvadortotal += 2;
      egypttotal += 3;
      madridtotal += 1;
    }

    //celebrity question//

    if (celebrity === 'tonyjaa') {
      chiangmaitotal += 3;
      salvadortotal += 2;
      egypttotal += 0;
      madridtotal += 1;
    }

    else if (celebrity === 'penelope') {
      chiangmaitotal += 0;
      salvadortotal += 2;
      egypttotal += 1;
      madridtotal += 3;
    }

    else if (celebrity === 'pele') {
      chiangmaitotal += 1;
      salvadortotal += 3;
      egypttotal += 0;
      madridtotal += 2;
    }

    else {
      chiangmaitotal += 1;
      salvadortotal += 0;
      egypttotal += 3;
      madridtotal += 2;
    }

    //total points//

    if (chiangmaitotal > salvadortotal && chiangmaitotal > egypttotal && chiangmaitotal > madridtotal) {
      $('.results').show();
      $('.chiangmai').show();
      $('.madrid, .egypt, .salvador').hide();
    }

    else if (egypttotal > salvadortotal && egypttotal > chiangmaitotal && egypttotal > madridtotal) {
      $('.results').show();
      $('.egypt').show();
      $('.madrid, .salvador, .chiangmai').hide();
    }

    else if (madridtotal> salvadortotal && madridtotal> chiangmaitotal && madridtotal> egypttotal) {
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
