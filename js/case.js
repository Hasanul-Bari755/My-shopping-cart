function totalCaseprices(updateValue){
    const totalCasePrice = updateValue * 59;
    setTextValueById('case-total',totalCasePrice);
}



document.getElementById('btn-case-plus').addEventListener('click',function(){
 
   
    const plusInputValue =  getInputValueById('case-number-field');
    const updateValue = caseNumberIncreaseAndDiscrease(true,plusInputValue);
    setInputValueById('case-number-field',updateValue)
   
    totalCaseprices(updateValue);
     
    subTotalSet()
    
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
     
    const minusInputValue =  getInputValueById('case-number-field');
    const updateValue = caseNumberIncreaseAndDiscrease(false,minusInputValue);
    setInputValueById('case-number-field',updateValue)
    
    totalCaseprices(updateValue);

    subTotalSet()

   

})