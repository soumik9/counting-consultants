function getInputValue(inputId, errId){
    const input = document.getElementById(inputId);
    const inputValue = input.value ;

    return inputValue;
}

function checkErrors(mainValue, errId){
    if(isNaN(mainValue)){
        const numberErr = document.getElementById(errId).innerText = 'Please input only numbers ';
        return numberErr;
    }else if(mainValue < 0){
        const positiveErr = document.getElementById(errId).innerText = 'Numbers should be positive';
        return positiveErr;
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
        document.getElementById('err-in-ex-msg').innerText = 'Please input all income and expense';
    }else{
        // convert to parseFloat
        const getIncomeValue = parseFloat(incomeValue);
        const getFoodExpenseValue = parseFloat(foodExpenseValue);
        const getRentExpenseValue = parseFloat(rentExpenseValue);
        const getClothExpenseValue = parseFloat(clothExpenseValue);

        const totalExpense = getFoodExpenseValue + getRentExpenseValue + getClothExpenseValue;
        const balance = getIncomeValue - totalExpense;
        document.getElementById('total-expense').innerText = totalExpense;
        document.getElementById('balance').innerText = balance;
    }



   
})