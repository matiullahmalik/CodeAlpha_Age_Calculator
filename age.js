function calculateAge() {
    const dob = document.getElementById('dob').value;
    const resultElement = document.getElementById('result');

    if (dob === "") {
        resultElement.innerText = "Please enter your date of birth.";
        resultElement.classList.add('show');
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();
    const dayDifference = today.getDate() - dobDate.getDate();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    resultElement.innerText = "Your age is: " + age + " years," + monthDifference + "months and " + dayDifference + "days";
    resultElement.classList.add('show');
}

