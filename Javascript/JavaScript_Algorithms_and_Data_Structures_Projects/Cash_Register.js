/*
Design a cash register drawer function checkCashRegister() that accepts purchase price 
as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid)
 as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
 or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is
 equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
 sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

function checkCashRegister(price, cash, cid) {
    //initialization of the status and the change array
    var status="";
    var change=[
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];
    //computation of the due change and total cash in CID
    var changeDue = toPrecise(cash-price);
    var totalCash=toPrecise(cid.map(element => element[1]).reduce((a,b) =>a+b));
    //Exit case : if there isn't enough money in CID
    if(toPrecise(changeDue-totalCash)>0){
      return {status:"INSUFFICIENT_FUNDS", change:[]};
  
    } else{
      //for each type of money...
      for(let i=cid.length-1;i>=0; i--){
        //while there is still money in the cid, change to give, and change - current money is positive
          while(cid[i][1]>0
          &&changeDue>0
          &&toPrecise(changeDue-currencyToAmount(cid[i][0]))>=0){
            change[i][1]=change[i][1]+currencyToAmount(cid[i][0]);
            cid[i][1]=toPrecise(cid[i][1]-currencyToAmount(cid[i][0]));
            changeDue=toPrecise(changeDue-currencyToAmount(cid[i][0]));
          }
        }
      }
      //re computation of the total cash in CID
      totalCash=cid.map(element => element[1]).reduce((a,b) =>a+b);
      //If there is still change due after :
      if(changeDue>0&&totalCash!=0){
        return {status:"INSUFFICIENT_FUNDS", change:[]};
      //If all the cash is given :
      } else if(toPrecise(changeDue-totalCash)==0){
        return {status:"CLOSED",change:change
      .map(element => [element[0], parseFloat(toPrecise(element[1]))])};
      //If there is still cash in the cid after giving the change :
      } else{
          return {status:"OPEN", change:change.filter(element => element[1]!=0).reverse()};
      }
  }
  
  function toPrecise(expression){
    return expression.toFixed(2);
  }
  
  function currencyToAmount(name){
    switch(name){
      case "PENNY":	
        return 0.01;
        break;
      case "NICKEL":	
        return 0.05;
        break;
      case "DIME":	
        return 0.1;
        break;
      case "QUARTER":	
        return 0.25;
        break;
      case "ONE":
        return 1;
        break;
      case "FIVE":	
        return 5;
        break;
      case "TEN":	
        return 10;
        break;
      case "TWENTY":
        return 20;
        break;
      case "ONE HUNDRED": 
        return 100;
        break;
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
