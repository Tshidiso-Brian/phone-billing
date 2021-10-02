

const billItemTypeRadio = document.querySelector(".billItemTypeRadio");

const callTotalTwo = document.querySelector(".callTotalTwo");

const smsTotalTwo = document.querySelector(".smsTotalTwo");

const totalTwo = document.querySelector(".totalTwo");

const radioBillAddBtn = document.querySelector(".radioBillAddBtn");

const RadioBillTotalElement = document.querySelector(".totalTwo");

var billTotal1 = 0;

var billTotal2 = 0;

//const radioBill = PhoneBill();

function radioBillAddBtnhs(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
  console.log(billItemType)
    
 

   //for (var i=0;i<billItems.length;i++){
        //var billItemType = billItems[i].trim();

        if (billItemType === "call"){
           billTotal1 += 2.75;
           //radioBill.makeCall()

           var roundedBillCall =  billTotal1.toFixed(2);
          callTotalTwo.innerHTML = roundedBillCall;
        }

          
     
      else if (billItemType === "sms"){
            billTotal2 += 0.75;
      //       radioBill.makeSms()

            var roundedBillsms = billTotal2.toFixed(2);
         smsTotalTwo.innerHTML = roundedBillsms;
        
      
        //radioBill.action(billItemType); 
    
    }
    var roundedBillTotal2 = (billTotal2+billTotal1).toFixed(2);
    RadioBillTotalElement.innerHTML = roundedBillTotal2;

   if (roundedBillTotal2 >=30 && roundedBillTotal2 <50 ) {

     RadioBillTotalElement.classList.add("warning");
 }
  else if (roundedBillTotal2 >=50){
      RadioBillTotalElement.classList.remove("warning");
      RadioBillTotalElement.classList.add("danger");
  }
 //RadioBillTotalElement.classList.remove("warning","danger");
//RadioBillTotalElement.classList.add(radioBill.totalStyle());
  }

} 
radioBillAddBtn.addEventListener('click',radioBillAddBtnhs);

// get a reference to the sms or call radio buttons

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed


//in the event listener get the value from the billItemTypeRadio radio buttons


// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
