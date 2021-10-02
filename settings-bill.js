

// get refences to all the settings fields

var  callTotalSettings = document.querySelector(".callTotalSettings");
var  smsTotalSettings = document.querySelector(".smsTotalSettings");
var  totalSettings = document.querySelector(".totalSettings");
var  billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

//get a reference to the add button

var addingButton = document.querySelector(".addingButton");

//Settings Variables

var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting= document.querySelector(".warningLevelSetting");
var criticalLevelSetting= document.querySelector(".criticalLevelSetting");

//get a reference to the 'Update settings' button

 var updateSettings = document.querySelector(".updateSettings");

 // get a reference to the sms or call radio buttons
 
 var callTotalSettings1 = 0;
 var smsTotalSettings1 = 0;
 var sumTotalSettings1 = 0;

// create a variables that will keep track of all the settings

var callCostSetting1 = 0;
var smsCostSetting1 = 0;
var warningLevelSetting1 = 0;
var criticalLevelSetting1 = 0;

// create a variables that will keep track of all three totals.

var billingTotal11 = 0;

var billingTotal22 = 0

//const settingsBill = PhoneBilliat()

//add an event listener for when the 'Update settings' button is pressed

updateSettings.addEventListener('click', updateSettingsButton);

 
function updateSettingsButton(){
  //settingsBill.updateCall()

   callCostSetting1 = Number(callCostSetting.value);

   smsCostSetting1 = Number(smsCostSetting.value);
   warningLevelSetting1 =  (warningLevelSetting.value);
   criticalLevelSetting1  = (criticalLevelSetting.value);
   
console.log(callCostSetting1)
  WarnCritcolors();

}


function addingButtonRad (){

  var checkedRadioButton = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  
  if (checkedRadioButton) {
    var radioButton = checkedRadioButton.value;

   if (sumTotalSettings1 <= criticalLevelSetting1){
    

    if (radioButton === "calling") {
      callTotalSettings1 += callCostSetting1
    }else if (radioButton === "smsing"){
      smsTotalSettings1 += smsCostSetting1;
      
    }
  }
  }
// * add the appropriate value to the call / sms total
callTotalSettings.innerHTML = callTotalSettings1.toFixed(2);
smsTotalSettings.innerHTML = smsTotalSettings1.toFixed(2);

// * add the appropriate value to the call / sms total
sumTotalSettings1 = callTotalSettings1 + smsTotalSettings1;
totalSettings.innerHTML = sumTotalSettings1.toFixed(2);

WarnCritcolors()

}

// * check the value thresholds and display the total value in the right color.

function WarnCritcolors(){
//for red color
if (sumTotalSettings1 >= criticalLevelSetting1 ){
  totalSettings.classList.remove("warning");
  totalSettings.classList.add("danger")
  
  //for orange color

}else if (sumTotalSettings1 >=warningLevelSetting1 && sumTotalSettings1< criticalLevelSetting1){
  totalSettings.classList.remove("danger");
  totalSettings.classList.add("warning")
}else if (sumTotalSettings1 = "")
 { totalSettings.classList.remove("danger");
totalSettings.classList.add("warning")}
}

//add an event listener for when the add button is pressed

addingButton.addEventListener('click', addingButtonRad);

//     if (checkedRadioButton){

//         var billItemTypeWithSettings = checkedRadioButton.value;
     
// //console.log(billItemTypeWithSettings)

     
//      if (billItemTypeWithSettings === callInput){
//          billingTotal11 += callInput ;

//         var roundedBillCall11 = billingTotal11.toFixed(2);
//         callTotalSettings.innerHTML = roundedBillCall11;
  
//   } 
//    else if (billItemTypeWithSettings === smsInput){
//     billingTotal22 += smsInput ;

//    var roundedBillCall22 = billingTotal22.toFixed(2);
//    smsTotalSettings.innerHTML = roundedBillCall22; 
//  }

//  var roundedBillTotal12= (billingTotal11 + billingTotal22 ).toFixed(2);
//  totalSettings.innerHTML = roundedBillTotal12;
//     }
    

//   } 
//   console.log(totalSettings)




//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.

