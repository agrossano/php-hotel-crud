console.log('cia')


$.ajax({
  url: "getPagamenti.php",
  method: 'GET',
  success: function (data) {
  },
  error: function (err) {
    console.log(err)
  }

});





function init() {

}


$(document).ready(init);