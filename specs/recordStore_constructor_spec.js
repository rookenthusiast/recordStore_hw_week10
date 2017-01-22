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
    assert.deepEqual([record,record2], recordStore.listInventory())
  });

  it("should be able to sell record", function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    recordStore.sellRecord(record);
    
    assert.equal(110.00,recordStore.balance);
    assert.equal(1,recordStore.inventory.length)
  });

  it("should be able to get inventory value", function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    assert.equal(15, recordStore.getInventoryValue());
  })

  it("should be able to return financial information of store", function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    assert.equal("total value of stock: 15, Store Balance: 100, Total business value: 115", recordStore.getAllFinances())
  })

});
