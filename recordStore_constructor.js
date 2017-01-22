var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 100.00;
};

RecordStore.prototype = {
  addRecord : function(record){
    this.inventory.push(record);
  },

  listInventory: function(){
   return this.inventory;
 },

 getInventoryValue: function(){
   var inventoryValue = this.inventory.reduce(function(accum, record){
     return accum + record.price;},0);
   return inventoryValue;
 },

 getAllFinances: function(){
  var inventoryValue = this.getInventoryValue();
  var totalValueOfBusiness = inventoryValue + this.balance;
  return "total value of stock: " + inventoryValue + ", " + "Store Balance: " + this.balance + ", " + "Total business value: " + totalValueOfBusiness
 },

 sellRecord: function(recordName){
  var selectedItem = this.inventory.find(function(record){
    console.log(record.title);
    return record.title === recordName;
  });
  var index = this.inventory.indexOf(selectedItem);
  var recordSold = this.inventory.splice(index, 1);
  console.log(recordSold.price);
  this.balance += recordSold.price;
}



}

module.exports = RecordStore;