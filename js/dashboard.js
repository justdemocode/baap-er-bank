// ! deposit 
// ! step-1 : add event listener to the deposit
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button clicked')
    // ! step-2 : get the deposit amount from the deposit input field
    // ! for input field use (.value) to the inside the input field
    const depositField = document.getElementById('user-deposit-input');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(depositAmount);

    // ! step-3 : get the current deposit total
    // ! for non-input (element other than input , textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(depositTotal);
    // ! step-4 : add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // ! set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

     

     // ! step-5 : get balance current total
     const balanceTotalElement = document.getElementById('balance-total');
     const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotal =parseFloat(previousBalanceTotalString);
     // ! step-6 : calculate current total balance

     const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
     // ! set the balance total

    balanceTotalElement.innerText = currentBalanceTotal;
    // ! step-7 :clear the input field
    depositField.value = ' ';
})











//! withdraw
// ! step-1 : add event listener to the deposit
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw button clicked')
    // ! step-2 : get the withdraw amount from the deposit input field
    // ! for input field use (.value) to the inside the input field
    const withdrawField = document.getElementById('user-withdraw-input');
    const newWithdrawAmountString = withdrawField.value;
    // console.log(withdrawAmount);
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // ! step-3 :
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText ;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    

    // ! step-5 :
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);
    // ! step-5-a : clear the input field
    withdrawField.value = ' ';
    //  ! step-6 : amount valid
    if(newWithdrawAmount > previousBalanceTotal){
        // console.log('valid user');
        alert('your current balance end');
        return;
    }

    // ! step-4 : calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal
    
    // ! step-7 :
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    

    // ! step-8 : clear the input field
    withdrawField.value = ' ';

})