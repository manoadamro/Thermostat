STARTING_TEMP = 20
MIN_TEMP = 10

var Thermostat = function(){
  this.temp = STARTING_TEMP

};

Thermostat.prototype.up = function (value = 1) {
  this.temp += value
};

Thermostat.prototype.down = function (value = 1) {
  if ((this.temp - value) < MIN_TEMP) {
    throw "10 is the lowest!"
    this.temp = MIN_TEMP;
  } else {
    this.temp -= value
  }
};

Thermostat.prototype.setTemp = function(value){
  if (value < MIN_TEMP) {
    throw "10 is the lowest!";
    this.temp = MIN_TEMP;
  }
  else {
    this.temp = value;
  }
};
