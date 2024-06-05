const convertAgeToDays = () => {
    const ageInput = document.getElementById('age');
    const daysOutput = document.getElementById('days');

    const ageInYears = parseFloat(ageInput.value);
    if (isNaN(ageInYears)) {
        daysOutput.value = 'Invalid input. Please enter a valid age.';
        return;
    }

    const days = ageInYears * 365; 
    daysOutput.value = days
};

const convertButton = document.querySelector('button');
convertButton.addEventListener('click', convertAgeToDays);
