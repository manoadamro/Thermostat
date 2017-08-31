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


  describe('turning the temp up', function(){

    it ('can increase temperature with up function', function() {
      thermostat.up(5)
      expect(thermostat.temp).toEqual(STARTING_TEMP + 5)
    })

  })

  describe('turning the temp down', function(){

    it ('can reduce temperature with down function', function() {
      thermostat.down(5)
      expect(thermostat.temp).toEqual(STARTING_TEMP - 5)
    })
    

    it ('should not go below 10 degrees', function(){
      thermostat.setTemp(MIN_TEMP)
      expect(function(){
        thermostat.down(1)
      }).toThrow("10 is the lowest!");
    })
  });
});
