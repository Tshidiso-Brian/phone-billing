const callTotalElem = document.querySelector(".callTotal");
const smsTotalElem = document.querySelector(".smsTotal");
const totalElem = document.querySelector(".grandTotal");
const makeCallBtn = document.querySelector(".makeCall");
const sendSmsBtn  = document.querySelector(".sendSms");

const phoneBill = PhoneBill();

callTotalElem.innerHTML = phoneBill.callTotal();
smsTotalElem.innerHTML = phoneBill.smsTotal();
totalElem.innerHTML = phoneBill.grandTotal();
//phoneBill.makeCall();
//phoneBill.makeSms();
//phoneBill.makeSms();



phoneBill.smsTotal();
phoneBill.grandTotal();

makeCallBtn.addEventListener('click', function(){
  phoneBill.makeCall();
  callTotalElem.innerHTML = phoneBill.callTotal();
  totalElem.innerHTML = phoneBill.grandTotal();
});

sendSmsBtn.addEventListener('click', function(){
  phoneBill.makeSms();
  smsTotalElem.innerHTML = phoneBill.smsTotal();
  totalElem.innerHTML = phoneBill.grandTotal();
});