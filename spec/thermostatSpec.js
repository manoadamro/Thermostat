describe('Themostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

describe('when initialized', function(){

  it('should start with a defualt value of 20', function(){
    expect(thermostat.temp).toEqual(STARTING_TEMP);
  });

  it ('can increase temperature with up function', function() {
    thermostat.up(5)
    expect(thermostat.temp).toEqual(STARTING_TEMP + 5)
  })

  it ('can reduce temperature with down function', function() {
    thermostat.down(5)
    expect(thermostat.temp).toEqual(STARTING_TEMP - 5)
  })

});

});
