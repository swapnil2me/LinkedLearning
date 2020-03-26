'use strict'
this.addEventListener('message', function (e) {
  console.log("Message Received from Main Script");
  console.log(e.data);
});
