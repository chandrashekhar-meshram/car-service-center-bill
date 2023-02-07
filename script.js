var carInput = document.getElementById('car-type');

var service_code = document.getElementById('service-code');

var car_name = document.getElementById('car');

var service_codes_input = document.getElementById('service-codes');

const cars = ['Hatchback', 'Sedan', 'SUV'];
var carIndex = '';

//price
const basicServicingPrice = [2000, 4000, 5000];
const engineFixingPrice = [5000, 8000, 10000];
const clutchFixingPrice = [2000, 4000, 6000];
const brakeFixingPrice = [1000, 1500, 2500];
const gearFixingPrice = [3000, 6000, 8000];

//individual service bill
var basicServicingBill = '',
  engineFixingBill = '',
  clutchFixingBill = '',
  brakeFixingBill = '',
  gearFixingBill = '',
  complimentaryCleaningBill = '<tr><td>' + 'complimentaryCleaning' + '</td><td>₹  ' + 0 + '</td></tr>';

var basicServicingAmount = 0,
    engineFixingAmount = 0,
    clutchFixingAmount = 0,
    brakeFixingAmount = 0,
    gearFixingAmount = 0,
    complimentaryCleaning = 0;

var totalAmount  = 0;

carInput.addEventListener('blur', function () {
  car_name.innerText = carInput.value;

  if (carInput.value === 'Hatchback') {
    carIndex = 0;
  } else if (carInput.value == 'Sedan') {
    carIndex = 1;
  } else {
    carIndex = 2;
  }
  console.log(typeof carInput.value);
  console.log(cars[carIndex]);
  console.log(carIndex);
});

const allServiceCodes = [];
let x = 0;
service_code.addEventListener('blur', function () {
  console.log(typeof service_code.value);
  allServiceCodes[x] = service_code.value;
  x++;
  display_codes();

  basicServicing();
  engineFixing();
  clutchFixing();
  brakeFixing();
  gearFixing();

  console.log(basicServicingBill);
  //showBill();
  service_code.value = '';
});

function basicServicing() {
  if (service_code.value === 'BS01') {
    basicServicingAmount = basicServicingPrice[carIndex];
    basicServicingBill = '<tr><td>' + 'Basic Servicing' + '</td><td>₹  ' + basicServicingAmount + '</td></tr>';
    showBill();
    console.log("basicServicingAmount", typeof basicServicingAmount);
  } 
}

function engineFixing() {
  if (service_code.value === 'EF01') {
    engineFixingAmount = engineFixingPrice[carIndex];
    engineFixingBill = '<tr><td>' + 'Engine Fixing' + '</td><td>₹  ' + engineFixingAmount + '</td></tr>';
    showBill();
  } 
}

function clutchFixing() {
  if(service_code.value === 'CF01'){
    clutchFixingAmount = clutchFixingPrice[carIndex];
    clutchFixingBill = '<tr><td>' + 'Clutch Fixing' + '</td><td>₹  ' + clutchFixingAmount + '</td></tr>';
    showBill();
  } 
} 

function brakeFixing() {
  if(service_code.value === 'BF01'){
    brakeFixingAmount = brakeFixingPrice[carIndex];
    brakeFixingBill = '<tr><td>' + 'Brake Fixing' + '</td><td>₹  ' + brakeFixingAmount + '</td></tr>';
    showBill();
  } 
}

function gearFixing() {
  if(service_code.value === 'GF01'){
    gearFixingAmount = gearFixingPrice[carIndex];
    gearFixingBill = '<tr><td>' + 'Gear Fixing' + '</td><td>₹  ' + gearFixingAmount + '</td></tr>';
    showBill();
  } 
}

function display_codes() {
  let allCodes = '';
  for (let i = 0; i < allServiceCodes.length; i++) {
    allCodes += allServiceCodes[i];
    if (i < allServiceCodes.length - 1) {
      allCodes += ', ';
    }
  }
  service_codes_input.innerText = allCodes;
}

function showBill() {
  const bill = document.getElementById('bill');
  bill.innerHTML = basicServicingBill + engineFixingBill + clutchFixingBill + brakeFixingBill + gearFixingBill; 

  totalAmount = document.getElementById('total-amount');
  totalAmount.innerText = parseInt(basicServicingAmount) + parseInt(engineFixingAmount) + parseInt(clutchFixingAmount) + parseInt(brakeFixingAmount) + parseInt(gearFixingAmount);  

  if(parseInt(totalAmount) > 10000){
    console.log("totalAmount", typeof totalAmount);
    bill.innerHTML += complimentaryCleaningBill;
  } 
}

