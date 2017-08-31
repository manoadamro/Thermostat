STARTING_TEMP = 20
MIN_TEMP = 10

ERROR_MIN_TEMP = MIN_TEMP + " is the lowest!"

var Thermostat = function(){
  this.temp = STARTING_TEMP
  this.powerSaving = true
};

Thermostat.prototype.up = function (value = 1) {
  max = this.maxTemp();
  if ((this.temp + value) > max) {
    throw "Max temp is " + max + "!"
    this.temp = max;
  } else {
    this.temp += value
  }
};

Thermostat.prototype.down = function (value = 1) {
  if ((this.temp - value) < MIN_TEMP) {
    throw ERROR_MIN_TEMP
    this.temp = MIN_TEMP;
  } else {
    this.temp -= value
  }
};

Thermostat.prototype.setTemp = function(value){
  max = this.maxTemp();
  if (value < MIN_TEMP) {
    throw ERROR_MIN_TEMP;
    this.temp = MIN_TEMP;
  }
  else if (value > max ) {
    throw "Max temp is " + max + "!"
    this.temp = max;
  }
  else {
    this.temp = value;
  }
};

Thermostat.prototype.setPowerSaving = function(state){
  this.powerSaving = state
}
//
Thermostat.prototype.maxTemp = function(){
  if (this.powerSaving === true) {
    return 25
  }
  else {
    return 32
  }
};

Thermostat.prototype.reset = function () {
  this.temp = STARTING_TEMP
};

Thermostat.prototype.energyUsage = function () {
  if (this.temp < 18) {
    return 'low-usage'
  }
  else if (this.temp < 25) {
    return 'medium-usage'
  }
  else {
    return 'high-usage'
  }
}
