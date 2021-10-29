$(function () {
    $('.SendEmail').click(function () {
      var email = 'martin.pavel.jaros@gmail.com';
      var subject = 'Hello Martin. I would like to collaborate!';
      var emailBody = '';
      document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    });
  });