if (Meteor.isClient) {
  index = 0;
  var arrayHolder = ['cout', 'o', 'u', 'cout', 's', 'e', 'r', 'cout', 'o', 'u', 't'];
  var container;
  var newLineHolder;
  var spaceHolder;
  var counter = 0;
  var holder;
  var extraHolder;
  var holderArray = [];
  var number = 0;

  soundManager.onready(function() {
    if (soundManager.supported()) {
      // SM2 is ready to go!
      var mySound = soundManager.createSound({id: 'mySound', url: 'http://www.vibrationdata.com/piano_E.mp3', volume: 50, multiShot: true, duration: 1000});
    } else {
      console.log("something went wrong")
    }
  });

  function arrayTest(holderArray, holderArrayLength) {
    array = holderArray;
    arrayLength = holderArrayLength;
    counter = index;
    if (array[index] == 'cout') {
      console.log("found a 'cout' ")
      playSound();
      index++;
    } else if (array[index] == null) {
      console.log("array ended");
    } else {
      index++;
      console.log("not a 'cout' ")
      arrayTest(array, arrayLength);
    }
  };

  function playSound() {
    soundManager.play('mySound', {
      onfinish: function() {
        //arrayTest(holderArray, holderArray.length);
        arrayTest(holderArray, holderArray.length);
      }
    });
  };

  Template.body.events({
    'click button': function() {
      var count = 0;
      var enteredCode = document.getElementById("codeText").value;

      holder = enteredCode.split("");

      for (var x = 0; x < holder.length; x++) {

        if (holder[x] == 'c') {
          if (holder[x + 1] == 'o') {
            if (holder[x + 2] == 'u') {
              if (holder[x + 3] == 't') {
                //console.log("found it!!");
                holderArray[number] = 'cout';
                number++;
              }
            }
          }
        } else {
          //console.log("sigh");
          continue;
        }
      }
      for(var y = 0; y < holderArray.length; y++){
        console.log(holderArray[y]);
      }
      arrayTest(holderArray, holderArray.length);
      //arrayTest(arrayHolder, arrayHolder.length);
    }

  });

}
if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}
