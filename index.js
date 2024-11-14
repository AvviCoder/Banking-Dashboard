
// let balance = 1000;

// function displayBalance(){
//     document.getElementById('balance').innerText = `$${balance.toFixed(2)}`;
// }

// function deposite() {
//      let depoAmount = parseFloat(document.getElementById('deposite-amount').value);

//      if(!isNaN(depoAmount) && depoAmount > 0)
//      {
//         balance +=depoAmount;
//         displayBalance();
//         document.getElementById('deposite-amount').value = ' ';
//      }
//      else{
//         alert("Please enter the feasible amount to deposite");
//      }
// }

// function withdraw() {
//      let amount = parseFloat(document.getElementById('withdraw-amount').value);

//      if(!isNaN(amount) && amount > 0)
//      {
//         balance -= amount;
//         displayBalance();
//         document.getElementById('withdraw-amount').value = " ";
//      }
//      else{
//         alert("Please enter the feasible amount to withdraw")
//      }
// }

// Initial balance set to $1,000
let balance = 1000;

// Function to display the balance
function displayBalance() {
    document.getElementById('balance').textContent = `${balance.toFixed(2)}`;
}

// Function to deposit money
function deposit() {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);

    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        displayBalance();
        document.getElementById('deposit-amount').value = ''; // Clear input
    } else {
        alert('Please enter a valid deposit amount.');
    }
}

// Function to withdraw money
function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);

    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            displayBalance();
        } else {
            alert('Insufficient funds. Please enter a lower amount.');
        }
        document.getElementById('withdraw-amount').value = ''; // Clear input
    } else {
        alert('Please enter a valid withdrawal amount.');
    }
}

// Initial display of the balance
displayBalance();
