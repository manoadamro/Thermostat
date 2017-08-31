describe('Themostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

describe('when initialized', function(){

  it('should start with a defualt value of 20', function(){
    expect(thermostat.temp).toEqual(STARTING_TEMP);
  });

});

});
