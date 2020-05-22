$.ajax({
  url: "getPagamenti.php",
  method: 'GET',
  success: function (data) {
    data.forEach(element => {
      $("ul").append("<li>" + element + "</li>");
    });

  },
  error: function (err) {
    console.log(err)
  }

});



function init() {

}


$(document).ready(init);