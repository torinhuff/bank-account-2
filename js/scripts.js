// //business logic
// function newAccount(name, deposit) {
//   this.fullName = name;
//   this.initialDeposit = deposit;
// }
//
// function moneyTransfer(plus, minus) {
//   this.deposit = plus;
//   this.withdrawl = minus;
// debugger
// }
//
// newAccount.prototype.adjust = function(adjustment) {
//    this.initialDeposit = this.initialDeposit + adjustment;
//  };

// user interface logic
$(document).ready(function() {

  $("button#make-account").click(function(event) {
    $("form#new-account").submit(function(event){
    event.preventDefault();
  });

  function newAccount(name, deposit) {
    this.fullName = name;
    this.initialDeposit = deposit;
  }

  newAccount.prototype.adjust = function(adjustment) {
     this.initialDeposit = this.initialDeposit + adjustment;
   };
// debugger
    var inputtedName = $("input#new-name").val();
    var inputtedInitial = parseInt($("input#initial-deposit").val());
    newCustomer = new newAccount(inputtedName, inputtedInitial);

    $("#show-accounts").show();
    $("#account-name").text(newCustomer.fullName);
    $("#balance").text(newCustomer.initialDeposit);
  });
  $("button#submit").click(function(){
    $("form#new-transaction").submit(function(event){
      event.preventDefault();
  });
// debugger
    // $(".new-transfer").each(function() {
      var inputtedDeposit = parseInt($("input#new-deposit").val());
      var inputtedWithdrawal = parseInt($("input#new-withdrawal").val());
      var currentBalance = inputtedDeposit - inputtedWithdrawal;
      newCustomer.adjust(currentBalance);
      $("#balance").text(newCustomer.initialDeposit)

      // var newBalance = new moneyTransfer(inputtedDeposit, inputtedWithdrawal)
      // newAccount.balance.push(newBalance)
    });

    // $("ul#current").append("<li><span class='contact'>" + newAccount.inputtedName() + newAccount.inputtedInitial() +  "</span></li>");
    //
    // $(".contact").last().click(function() {
    //   $("#show-accounts").show();
    //   $("#show-accounts h2").text(initialAccount.fullName());
    //   $(".account-name").text(initialAccount.fullName);
    //   $(".balance").text(initialAccount.initialDeposit);
    //   $("ul#current").text("");
      // newContact.addresses.forEach(function(address) {
      //   $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.state + "</li>");
      // });
    });

    // $("input#initial-deposit").val("");
    // $("input#new-deposit").val("");
    // $("input.new-withdrawal").val("");
