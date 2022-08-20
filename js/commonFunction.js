function getInputValueById(inputId){
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const inputFieldNumber = parseInt(inputFieldString);

  return inputFieldNumber;
}

function caseNumberIncreaseAndDiscrease(isIncrease,inputValue){
   
     
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = inputValue + 1;
    }

    else{
        newCaseNumber = inputValue -1;
    }

    return newCaseNumber;
}

function setInputValueById(fieldId,fieldValue){
    const updateInputField = document.getElementById(fieldId);
    updateInputField.value = fieldValue;
}

function getTextValueById(elementId){
  const elementField=  document.getElementById(elementId);
  const elementFieldString = elementField.innerText;
  const elementFieldNumber = parseInt(elementFieldString);
  return elementFieldNumber;
}

function setTextValueById(elementId,elemenetValue){
    const elementField = document.getElementById(elementId);
    elementField.innerText  = elemenetValue;
}

function subTotal(phonId,caseId){
   const phonePriceTotal = getTextValueById(phonId);
   const casePriceTotal = getTextValueById(caseId);
   const subTotal = phonePriceTotal + casePriceTotal;
   return subTotal;
}

function subTotalSet(){
    const subTotals = subTotal('phone-total','case-total');
    const tax= parseFloat((subTotals * 0.1).toFixed(2));
    const total = subTotals + tax;
    setTextValueById('tax-amount',tax);
    setTextValueById("sub-total",subTotals);
    setTextValueById('final-total',total);
}

