
// class is define here
class TipCalculator {
       // constructor is created for billAmount,tipPercent,totalPerson
	constructor(billAmount, tipPercent, totalPerson) {
		// Here this keyword is used to avoid naming conflicts
		this.billAmount = billAmount;
		this.tipPercent = tipPercent;
		this.totalPerson = totalPerson;
	 } 
	   /* this method validates the input and checks whether billAmount is NaN(Not a Number) or bilAmount is less than equal to zero
	   or totalPerson equal to zero in this case show the alert of Invalid Input */
	   validateInputs() {
		if(isNaN(this.billAmount) || this.billAmount <= 0 || this.totalPerson == 0) return false;
		return true;
	}
        // this method is used to calculate tipPerPerson and totalAmountPerPerson
	calculateAmountAndUpdate() {
		let tipPerPerson = 0;
		let totalAmtPerPerson = 0;
		/* extract the value as the tipPercent is of type string (eg. 10%) so 10 is to be extracted 
		 from it. */
		this.tipPercent = this.tipPercent.substr(0,this.tipPercent.length-1);
       // calculate the totalTip
		let totalTip = (this.billAmount * this.tipPercent) / 100;
         // calculate tipPerPerson
		tipPerPerson = totalTip / this.totalPerson;
		// calculate totalAmountPerPerson
		totalAmtPerPerson = (this.billAmount / this.totalPerson) + tipPerPerson
         // updates the value of tipPerPerson in HTML page 
		document.getElementById('tipPerPerson').innerHTML = tipPerPerson.toFixed(2) + " Rs.";
		// updates the value of totalAmtPerPerson in HTML page 
		document.getElementById('totalAmtPerPerson').innerHTML = totalAmtPerPerson.toFixed(2) + " Rs.";	
	}
    // this method is used to take value in billAmount,tipPercent,totalPerson variables from input boxes
	initiateOperation() {

		let billAmount = document.getElementById('billAmount').value;
		let tipPercent = document.getElementById('tipPercent').value;
		let totalPerson = document.getElementById('totalPerson').value;
		// create object of constructure
		let t = new TipCalculator(billAmount, tipPercent, totalPerson);
		// show the alert if input is not correct
		if(!t.validateInputs()) alert("Invalid inputs");
		else {
			t.calculateAmountAndUpdate();
		}
	}
       // method is used to increase tipPercent
	incrementTipPercent() {
		let tipPercent = document.getElementById('tipPercent').value;
		tipPercent = tipPercent.substr(0,tipPercent.length-1);
		// increase tipPercent one by one
		tipPercent = Number(tipPercent) + Number(1);
		document.getElementById('tipPercent').value = tipPercent + "%";
	}
       // method is used to decrease tipPercent
	decrementTipPercent() {
		let tipPercent = document.getElementById('tipPercent').value;
		tipPercent = tipPercent.substr(0,tipPercent.length-1);
		if(tipPercent > 0) {
			// decrease tipPercent one by one
			tipPercent = tipPercent - 1;
			document.getElementById('tipPercent').value = tipPercent + "%";
		}
	}
       // method is used to increase totalPeople
	incrementTotalPeople() {
		let totalPerson = document.getElementById('totalPerson').value;
		// increase totalPerson one by one
		totalPerson = Number(totalPerson) + Number(1);
		document.getElementById('totalPerson').value = totalPerson;
	}
      // method is used to decrease totalPeople
	decrementTotalPeople() {
		let totalPerson = document.getElementById('totalPerson').value;
		if(totalPerson > 1) {
				// decrease totalPerson one by one
			totalPerson = totalPerson - 1;
			document.getElementById('totalPerson').value = totalPerson;
		}
	}

}


let calculate = document.getElementById('calculate');
  // create object of class 
let calc = new TipCalculator();
 // to perform task on click 
calculate.addEventListener('click', calc.initiateOperation);

let tipMinus = document.getElementById('tipMinus');
  // to perform task on click tipMinus
tipMinus.addEventListener('click',calc.decrementTipPercent);
  
let tipPlus = document.getElementById('tipPlus');
    // to perform task on click tipPlus
tipPlus.addEventListener('click',calc.incrementTipPercent); 
	

let totalMinus = document.getElementById('totalMinus');
    // to perform task on click totalMinus
totalMinus.addEventListener('click',calc.decrementTotalPeople);

let totalPlus = document.getElementById('totalPlus');
    // to perform task on click totalPlus
totalPlus.addEventListener('click',calc.incrementTotalPeople);