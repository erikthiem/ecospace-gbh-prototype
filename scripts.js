$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  var factory_info_visible = false;

  $(".factory-button").click(function() {
    console.log('clicked');
    if(factory_info_visible) {
      $(".factory-info").fadeOut();
      factory_info_visible = false;
    } else {
      $(".factory-info").fadeIn().css("display", "inline");
      factory_info_visible = true;
    }
  });
})
