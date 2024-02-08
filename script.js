class BMICalculator {
    constructor(weight, height) {
        this.weight = weight;
        this.height = height; // creating a constructor for weight and height
    }

    calculateBMI() {
        const bmi = this.weight / (this.height **2); // formula to calculate BMI
        return bmi.toFixed(2); // toFixed : to give decimal point as 2
    }

    interpretBMI() {
        const bmi = this.calculateBMI();
        if(bmi < 18.5) {
            return "Underweight";
        }
        else if(bmi >= 18.5 && bmi < 24.9) {
            return "Normal weight";
        } 
        else if(bmi >= 25 && bmi < 29.9) {
            return "Overweight";
        } 
        else {
            return "Obese";
        }

    }
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value); // convert to float value whatever you give input value
    const height = parseFloat(document.getElementById("height").value); 

    if(isNaN(weight) || isNaN(height) || weight <=0 || height <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid weight and height."
        return;
    }

    const bmiCalculator = new BMICalculator(weight, height);
    const bmi = bmiCalculator.calculateBMI();
    const interpretation = bmiCalculator.interpretBMI();

    const resultmessage = `Your BMI is ${bmi} and you are categorized as ${interpretation}` ;
    document.getElementById("result").innerHTML = resultmessage;

}