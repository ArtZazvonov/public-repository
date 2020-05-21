$(document).ready(function() {
  $("#form").submit(function() {
    if (document.form.name.valeu == '' || document.form.phone.valeu == ''){
      valid = false;
      return valid;
    }
    $.ajax({
      url: 'send.php',
      type: 'POST',
      data: $(this).serialize()
    }).done(function() {
      $(".js-overlay-thank-you").fadeIn();
      $(this).find('input').val("");
      $("#form").trigger('reset');
    }).fail(function() {
      alert("Ошибка отправки");
    })
    return false;    
  });
});

$(".js-close-thank-you").click(function() {
  $(".js-overlay-thank-you").fadeOut();
});
$(document).mouseup(function(e) {
  var popup = $(".popup");
  if(e.target != popup[0] && popup.has(e.target).lenght === 0){
    $(".js-overlay-thank-you").fadeOut();
  }
});

$(function ($) {
  $('[name="phpne"]').mask("+7(999) 999-9999");
});