function  totalPhonePrices(updateValue){
    const totalPhonePrice = updateValue * 1219;
    setTextValueById('phone-total',totalPhonePrice);
}


document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const plusInputField = getInputValueById('phone-number-field');
    const updateValue = caseNumberIncreaseAndDiscrease(true,plusInputField);
    setInputValueById('phone-number-field',updateValue);
    
    totalPhonePrices(updateValue);

    subTotalSet();
    taxAmount();
    
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const minusInputField = getInputValueById('phone-number-field');
    const updateValue = caseNumberIncreaseAndDiscrease(false,minusInputField);
    setInputValueById('phone-number-field',updateValue);

    totalPhonePrices(updateValue);

    subTotalSet()
})