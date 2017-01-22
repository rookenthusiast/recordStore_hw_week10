var Record = require("../record_constructor");
var RecordStore = require("../recordStore_constructor")
var assert = require ("assert");

describe("recordStore_constructor", function(){
  var record;
  var recordStore;

  beforeEach( function(){

    record = new Record("Queen", "Radio Ga Ga", 10.00);
    record2 = new Record("A-ha", "Take On Me", 5.00);
    recordStore = new RecordStore("Cami's Classics", "Glasgow")
  });

  it("should have a name",function(){
    assert.equal("Cami's Classics", recordStore.name)
    console.log(recordStore.balance)
  });

  it("should have a city", function(){
    assert.equal("Glasgow",recordStore.city);
  });

  it("should have no records in its inventory", function(){ 
    assert.deepEqual([], recordStore.inventory);
  });

  it("should be able to add records to inventory", function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    assert.equal(2, recordStore.inventory.length)
  });

  it("should be able to list inventory", function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    console.log(recordStore.balance)
    assert.deepEqual([record,record2], recordStore.listInventory())
  });

  it("should be able to sell record", function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    recordStore.sellRecord(record);
    console.log(recordStore.balance)
    assert.equal(110.00,recordStore.balance);
    assert.equal(1,recordStore.inventory.length)

  })

});
