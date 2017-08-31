STARTING_TEMP = 20

var Thermostat = function(){
  this.temp = STARTING_TEMP

};

Thermostat.prototype.up = function (value) {
  this.temp += value
};

Thermostat.prototype.down = function (value) {
  this.temp -= value
};
