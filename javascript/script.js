// ARRAY WITH USER INPUT VALUES FOR VERIFICATION:  

let verify = document.getElementsByClassName('verify');
// verify[0] -> number of Adults
// verify[1] -> number of children
// verify[2] -> duration (hours)

// ------------------------------------------------------------------

// VARIABLES FOR INTERFACE BUTTONS:

let calculateButton = document.getElementById('calculate');
let backButton = document.getElementById('back');
let copyButton = document.getElementById('copy');
let clearButton = document.getElementById('erase');

// ------------------------------------------------------------------

// BUTTONS EVENT LISTENERS: 

calculateButton.addEventListener('click', () => {
   
   let inputValueTest = verifyInputValue();
   
   if(inputValueTest === true) {
      document.getElementById('warning').style.display = 'flex';
      window.setTimeout(() => {document.getElementById('warning').style.display = 'none'}, 3000)
   }
   else {
      let d = verifyDuration();

      let meatQtd = meat(d);
      let beerQtd = beer(d);
      let drinkQtd = drink(d);

      document.getElementById('meat').textContent = meatQtd.toFixed(3) + ' Kg de carne';
      document.getElementById('beer').textContent = beerQtd.toFixed(1) + ' L de cerveja';
      document.getElementById('drink').textContent = drinkQtd.toFixed(1) + ' L de água/refrigerante';

      document.getElementsByClassName('results-field')[0].style.display = 'flex';
      document.getElementsByClassName('blur')[0].style.filter = 'blur(3px)';
      document.getElementsByClassName('blur')[1].style.filter = 'blur(3px)';
      document.getElementsByClassName('blur')[2].style.filter = 'blur(3px)';
   }
   
})

backButton.addEventListener('click', () => {

   document.getElementsByClassName('results-field')[0].style.display = 'none';
   document.getElementsByClassName('blur')[0].style.filter = 'none';
   document.getElementsByClassName('blur')[1].style.filter = 'none';
   document.getElementsByClassName('blur')[2].style.filter = 'none';
})

copyButton.addEventListener('click', () => {
   navigator.clipboard.writeText(document.getElementById('meat').textContent+'\n'+document.getElementById('beer').textContent+'\n'+document.getElementById('drink').textContent);
});

clearButton.addEventListener('click', () => {

   verify[0] = '';
   verify[1] = '';
   verify[2] = '';
});

// ------------------------------------------------------------------

// BUSSINESS RULES FUNCTIONS:

function meat(durationRule) {
      if(durationRule === true) {
         return (verify[0].value * 0.65) + (verify[1].value * 0.325);
      }
      else {
         return (verify[0].value * 0.4) + (verify[1].value * 0.2);
      }
}

function beer(durationRule) {
   if(durationRule === true) {
      return (verify[0].value * 2.0);
   }
   else {
      return (verify[0].value * 1.2);
   }
}

function drink(durationRule) {
   if(durationRule === true) {
      return (verify[0].value * 1.5) + (verify[1].value * 0.750);
   }
   else {
      return (verify[0].value * 1.0) + (verify[1].value * 0.500);
   }
}

// ------------------------------------------------------------------

// VERIFICATION FUNCTIONS:

function verifyDuration() {
   verify[2].value >= 6 ? true : false;
}

function verifyInputValue() {
   for(let k of verify) {
      if((k.value == '')) {
         return true;
      }
   }
}

// ------------------------------------------------------------------