/* exported Account */

function Account(number, holder) {
  this.number = number;
    this.holder = holder;
    this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount === Math.abs(amount) && amount !== 0) {
    var depositObject = new Transaction('deposit', amount)
    this.transactions.push(depositObject);
    return true;
  } else if (amount !== Math.abs(amount) || amount === NaN || typeof amount === 'string' || amount === 0) {
    return false;
  }
}

Account.prototype.withdraw = function (amount) {
  if (amount === Math.abs(amount) && amount !== 0) {
    var withdrawObject = new Transaction('withdrawal', amount)
    this.transactions.push(withdrawObject);
    return true;
  } else if (amount !== Math.abs(amount) || amount === NaN || typeof amount === 'string' || amount === 0) {
    return false;
  }
}

Account.prototype.getBalance = function(){
  var depositBank=0;
  var withdrawBank=0;
  for (var transList = 0; transList < this.transactions.length ; transList++){
    if (this.transactions[transList].type ==='deposit'){
      depositBank+=this.transactions[transList].amount;
    } else if (this.transactions[transList].type ==='withdrawal'){
      withdrawBank+=this.transactions[transList].amount;
    }
  }
  return depositBank - withdrawBank;
  }
