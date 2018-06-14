var dwarves = ["Dopey", "Grumpy", "Bashful"];

function dwarfRollCall() {
  var length = dwarves.length;
  var msg =[];
  var position;

  for (var i = 0; i < length; i++) {
  position = i + 1; 
  msg += position +  ". " + dwarves[i] + " ";
  }
  console.log(msg);
  return msg;
}

dwarfRollCall();

var veggies = ["carrot", "cucumber", "pepper"];

function summonCaptainPlanet(k) {
  var length = k.length;
  var msg = "";

    k.forEach(function(k) {
        msg +=  k.charAt(0).toUpperCase();
        msg += k.slice(1,9) + "! ";
      });
  console.log(length);
  console.log(msg);
}
summonCaptainPlanet(veggies);

function longPlaneteerCalls(l) {
  var msg = "";
  if(l.length > 4) {
    msg = true;
  } else {
    msg = false;
  }
  console.log(msg);
}

longPlaneteerCalls(longCalls);

var cheddarCheese = ["banana", "cheddar", "sock"];
var noCheeseArray = ["banana", "tomato", "sock"];

function findTheCheese(m) {
  var msg = "";
  var count = 0;
  for (var i = 0; i < m.length; i++) {
  var word = m[i];
  if (word === "cheddar") {
      count += 1;
    }
  if (count === 1) {
    msg = "cheddar"
  } else {
    msg = "no cheese!"
  }
  }
  console.log(count);
  console.log(msg);
}

findTheCheese(cheddarCheese);
