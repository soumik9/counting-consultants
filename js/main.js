function getInputValue(inputId, errId){
    const input = document.getElementById(inputId);
    const inputValue = input.value ;

    return inputValue;
}

function checkErrors(mainValue, errId){
    if(isNaN(mainValue)){
        document.getElementById(errId).style.display = 'block';
        const numberErr = document.getElementById(errId).innerText = 'Please input only numbers ';
        return numberErr;
    }else if(mainValue < 0){
        document.getElementById(errId).style.display = 'block';
        const positiveErr = document.getElementById(errId).innerText = 'Numbers should be positive';
        return positiveErr;
    }else{
        document.getElementById(errId).style.display = 'none';
    }
}

document.getElementById('calculate').addEventListener('click', function(){
    // getting input values
    const incomeValue = getInputValue('income-amount');
    const foodExpenseValue = getInputValue('food-expense');
    const rentExpenseValue = getInputValue('rent-expense');
    const clothExpenseValue = getInputValue('cloth-expense');

    // error check for number and positive number
    checkErrors(incomeValue, 'err-income-msg');
    checkErrors(foodExpenseValue, 'err-food-msg');
    checkErrors(rentExpenseValue, 'err-rent-msg');
    checkErrors(clothExpenseValue, 'err-cloth-msg');

    if(incomeValue == '' || foodExpenseValue == '' || rentExpenseValue == ''|| clothExpenseValue == ''){
        document.getElementById('err-in-ex-msg').style.display = 'block';
        document.getElementById('err-in-ex-msg').innerText = 'Please input all income and expense';
    }else{
        // hideing error msg
        document.getElementById('err-in-ex-msg').style.display = 'none';

        // convert to parseFloat
        const getIncomeValue = parseFloat(incomeValue);;
        const getFoodExpenseValue = parseFloat(foodExpenseValue);
        const getRentExpenseValue = parseFloat(rentExpenseValue);
        const getClothExpenseValue = parseFloat(clothExpenseValue);

        // total calculation
        const totalExpense = getFoodExpenseValue + getRentExpenseValue + getClothExpenseValue;
        const balance = getIncomeValue - totalExpense;

        // checking is expense higher than income
        if(totalExpense > getIncomeValue){
            document.getElementById('err-in-ex-msg').style.display = 'block';
            document.getElementById('err-in-ex-msg').innerText = 'Expense should be less than income';
            document.getElementById('balance').style.color = 'red';
            document.getElementById('total-expense').innerText = '0000';
            document.getElementById('balance').innerText = '0000';
        }else{
            document.getElementById('err-in-ex-msg').style.display = 'none';
            document.getElementById('balance').style.color = 'green';
            document.getElementById('total-expense').innerText = totalExpense;
            document.getElementById('balance').innerText = balance;
        }
    }
});

//saving amount calculation
document.getElementById('save').addEventListener('click', function(){
    // getting input values
    const incomeValue = getInputValue('income-amount');
    const foodExpenseValue = getInputValue('food-expense');
    const rentExpenseValue = getInputValue('rent-expense');
    const clothExpenseValue = getInputValue('cloth-expense');
    const savingAmountPercentValue = getInputValue('saving-amount-percent');

    // error check for number and positive number
    const theValue = checkErrors(savingAmountPercentValue, 'err-saving-msg');

    if(theValue == undefined){
        if(savingAmountPercentValue == ''){
            document.getElementById('err-saving-msg').style.display = 'block';
            document.getElementById('err-saving-msg').innerText = 'Please input saving percent';
        }else if(incomeValue == '' || foodExpenseValue == '' || rentExpenseValue == ''|| clothExpenseValue == ''){
            document.getElementById('err-saving-msg').style.display = 'block';
            document.getElementById('err-saving-msg').innerText = 'Please input all income and expense';
        }else{
            // hide error msg
            document.getElementById('err-saving-msg').style.display = 'none';

            // convert to parseFloat
            const getIncomeValue = parseFloat(incomeValue);;
            const getFoodExpenseValue = parseFloat(foodExpenseValue);
            const getRentExpenseValue = parseFloat(rentExpenseValue);
            const getClothExpenseValue = parseFloat(clothExpenseValue);
            const getSavingAmountPercentValue = parseFloat(savingAmountPercentValue);

            // total calculation
            const totalExpense = getFoodExpenseValue + getRentExpenseValue + getClothExpenseValue;
            const balance = getIncomeValue - totalExpense;
            const savingAmountTotal = ((getIncomeValue * getSavingAmountPercentValue) / 100) ;
            const remainingBalance = balance - savingAmountTotal;

            // checking is saving amount higher than balance
            if(savingAmountTotal > balance){
                document.getElementById('err-saving-msg').style.display = 'block';
                document.getElementById('err-saving-msg').innerText = 'Income is not enough to save';
                document.getElementById('total-saving').innerText ='0000';
                document.getElementById('total-remaining-amount').innerText = '0000';
                document.getElementById('total-remaining-amount').style.color = 'red';
            }else if(remainingBalance >= 0){
                document.getElementById('err-saving-msg').style.display = 'none';
                document.getElementById('total-remaining-amount').style.color = 'green';
                document.getElementById('total-saving').innerText = savingAmountTotal;
                document.getElementById('total-remaining-amount').innerText = remainingBalance;
            }
        }
    }
});