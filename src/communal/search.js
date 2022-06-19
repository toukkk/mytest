export const searchSubscribe = function (msg) {
  if (msg === "") {
    return (this.tableData = this.table);
  }
  this.tableData = this.table;
  msg == "1"
    ? (this.tableData = this.tableData.filter(
      (data) => data.subscribe === true
    ))
    : (this.tableData = this.tableData.filter(
      (data) => data.subscribe === false
    ));
};

export const searchSupplier = function (msg) {
  if (msg === "") {
    return this.supplierData = this.supplierList;
  }
  this.supplierData = this.table
  this.supplierData.filter((data) => data.algoName === msg).length
    ? this.supplierData = this.tableData.filter((data) => data.algoName === msg)
    : this.transit = [], this.transit.length = 1
};