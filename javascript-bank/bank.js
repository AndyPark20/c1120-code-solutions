/* exported Bank */

function Bank(){
  this.nextAccountNumber = 1;
  this.accounts =[];
}

Bank.prototype.openAccount = function(holder, balance){
  if(balance === Math.abs(balance) && balance !==0 ){
    var newAccount = new Account(this.nextAccountNumber, holder);
    var firstBalance =newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++
    return this.nextAccountNumber-1;
  } else if (balance !==Math.abs(balance) || balance === undefined || typeof balance === 'string' || balance === false || balance === 0) {
    return null;
  }

}

Bank.prototype.getAccount = function(number){
  for (var i=0; i<this.accounts.length; i++){
    if (this.accounts[i].number === number){
      return this.accounts[i];
    }
    }
    return null;
  }


Bank.prototype.getTotalAssets = function(){
  var grandDeposit=0;
  var grandWithdrawal=0;
  for (var j=0; j<this.accounts.length;j++){
    for (var h =0; h<this.accounts[j].transactions.length; h++){
      if(this.accounts[j].transactions[h].type ==='deposit'){
        grandDeposit += this.accounts[j].transactions[h].amount;
      } else if (this.accounts[j].transactions[h].type ==='withdrawal'){
        grandWithdrawal += this.accounts[j].transactions[h].amount;
      }
    }
  }
  return grandDeposit-grandWithdrawal;
}
