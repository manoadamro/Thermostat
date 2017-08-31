describe('Themostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('when initialized', function(){

    it('should start with a defualt value of ' + STARTING_TEMP, function(){
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


    it ('should not go below 10 degrees when reducing by 1', function(){
      thermostat.setTemp(MIN_TEMP)
      expect(function(){
        thermostat.down(1)
      }).toThrow("10 is the lowest!");
    })

    it ('should not go below 10 degrees when reducing by more than 1', function(){
      thermostat.setTemp(MIN_TEMP + 5)
      expect(function(){
        thermostat.down(10)
      }).toThrow("10 is the lowest!");
    })

  });

  describe('setting the temperature', function(){

    it ('method \'setTemp\' can not set temp below ' + MIN_TEMP, function () {
      expect(function(){
        thermostat.setTemp(MIN_TEMP - 1)
      }).toThrow("10 is the lowest!");
    })
  });


  describe('#Power saving mode', function(){

    it('should start in power saving mode',function(){
      expect(thermostat.powerSaving).toBe(true);
    })

    it('when power saving is on, max temp is 25', function(){
      expect(thermostat.maxTemp()).toEqual(25)
    })

    it('when power saving is off, max temp is 32', function(){
        thermostat.setPowerSaving(false);
      expect(thermostat.maxTemp()).toEqual(32)
    })

  })

});
