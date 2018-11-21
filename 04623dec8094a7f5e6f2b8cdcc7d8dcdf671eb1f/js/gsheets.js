// This is a function that will be called later and
// makes a series that is stored into an array
$(document).ready(function(){
  $.fn.serializeObject = function()
      {
       var o = {};
       var a = this.serializeArray();
       $.each(a, function() {
           if (o[this.name]) {
               if (!o[this.name].push) {
                   o[this.name] = [o[this.name]];
               }
               o[this.name].push(this.value || '');
           } else {
               o[this.name] = this.value || '';
           }
       });
       return o;
      };

    // This defines the variable "form" from the html
    var form = $('form#test-form');

    // This is the url where the google sheet web app is deployed
    var url = 'https://script.google.com/macros/s/AKfycbxqnNz_97G6Xz-wlSNNOL1mbLbHHyQ9Dw0qEfn1Oz7NxdS0tWs/exec';

    // On submit the following function gets called
    // "e" is the submit event that is being created when submitting
    form.submit(function(e){
        e.preventDefault();

      var xhr = new XMLHttpRequest(); // I think this one is not necessary anymore!

      // Here wer use the ajax library to do a http get request to the webapp
      var jqxhr = $.ajax({
        url: url, // see above
        method: "GET",    // type of request
        dataType: "json", // format of the data that is being sent
        data: form.serializeObject(),   // takes the input data from the form and transforms it into the right format for a http get request
      }).done( function(data) {   // If the request was successfull it calls this function *!*!*!* ATTENTION. USE latest JQuery library here. Old versions work with .suceess()
        if (data.result == "success") {
          console.log("great success") ;
          window.location.href = "http://www.wohnzimmeradventures.xyz/04623dec8094a7f5e6f2b8cdcc7d8dcdf671eb1f/success.html"; // redirect to the "success" page
        };
      }).fail( function(data) { // if it fails there is a popup message telling you that something went wrong
        alert("Ups ... I guess we have a problem here! Could you try again with another browser, please? We're still coding-newbies. If it still doesn't work, please write us an email: wohnzimmeradventures@posteo.de")
      });
    });
    });
