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



 sellRecord: function(record){
  var index = this.inventory.indexOf(record);
  var recordSold = this.inventory.splice(index, 1);
  this.balance += recordSold.price;
}



}

module.exports = RecordStore;