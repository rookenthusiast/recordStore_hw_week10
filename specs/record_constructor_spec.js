var Record = require("../record_constructor");
var assert = require ("assert");


describe("record_constructor", function(){
  
  var record;
  var record2;
  
  beforeEach(function(){
    record = new Record("Queen", "Radio Ga Ga", 10.00);
    record2 = new Record("A-ha", "Take On Me", 5.00)
});

it("should have an artist",function(){
  assert.equal("Queen", record.artist)
});

it("should have a title", function(){
  assert.equal("Radio Ga Ga", record.title)
});

it("should have a price", function(){
  assert.equal(10.00, record.price)
});

});
