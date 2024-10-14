class TipCalculator {
    // Constructor for billAmount, tipPercent, totalPerson
    constructor(billAmount = 0, tipPercent = "0%", totalPerson = 1) {
        this.billAmount = parseFloat(billAmount);
        this.tipPercent = parseFloat(tipPercent);
        this.totalPerson = parseInt(totalPerson);
    }
    // Validates the input for valid numbers
    validateInputs() {
        return !(isNaN(this.billAmount) || this.billAmount <= 0 || isNaN(this.totalPerson) || this.totalPerson <= 0);
    }
    // Calculates and updates the tip and total amount per person
    calculateAmountAndUpdate() {
        this.tipPercent = parseInt(this.tipPercent);  // Convert "10%" to 10
        const totalTip = (this.billAmount * this.tipPercent) / 100;
        const tipPerPerson = totalTip / this.totalPerson;
        const totalAmtPerPerson = (this.billAmount / this.totalPerson) + tipPerPerson;
        // Updating DOM elements
        document.getElementById('tipPerPerson').textContent = `${tipPerPerson.toFixed(2)} Rs.`;
        document.getElementById('totalAmtPerPerson').textContent = `${totalAmtPerPerson.toFixed(2)} Rs.`;
    }
    // Fetches values from input fields and initiates calculation
    initiateOperation() {
        const billAmount = parseFloat(document.getElementById('billAmount').value);
        const tipPercent = document.getElementById('tipPercent').value;
        const totalPerson = parseInt(document.getElementById('totalPerson').value);
        // Create object and validate
        const calculator = new TipCalculator(billAmount, tipPercent, totalPerson);
        if (!calculator.validateInputs()) {
            alert("Invalid inputs. Please check your values.");
            return;
        }
        // Calculate and update results
        calculator.calculateAmountAndUpdate();
    }
    // Increment or decrement tip percent
    modifyTipPercent(increment = true) {
        let tipPercent = parseInt(document.getElementById('tipPercent').value);
        tipPercent = increment ? tipPercent + 1 : tipPercent - 1;
        document.getElementById('tipPercent').value = `${Math.max(tipPercent, 0)}%`;
    }
    // Increment or decrement total people
    modifyTotalPeople(increment = true) {
        let totalPerson = parseInt(document.getElementById('totalPerson').value);
        totalPerson = increment ? totalPerson + 1 : Math.max(totalPerson - 1, 1);
        document.getElementById('totalPerson').value = totalPerson;
    }
}
// Event listeners for actions
const calculator = new TipCalculator();
document.getElementById('calculate').addEventListener('click', () => calculator.initiateOperation());
document.getElementById('tipPlus').addEventListener('click', () => calculator.modifyTipPercent(true));
document.getElementById('tipMinus').addEventListener('click', () => calculator.modifyTipPercent(false));
document.getElementById('totalPlus').addEventListener('click', () => calculator.modifyTotalPeople(true));
document.getElementById('totalMinus').addEventListener('click', () => calculator.modifyTotalPeople(false));
