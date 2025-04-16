let budget = 0;
let totalExpenses = 0;

document.getElementById('set-budget-button').addEventListener('click', function () {
    const budgetInput = document.getElementById('budget-input');
    budget = parseFloat(budgetInput.value);
    document.getElementById('total-budget').textContent = `Total Budget: $${budget.toFixed(2)}`;
    budgetInput.value = '';
})

remainingBalance = budget - totalExpenses;

document.getElementById('remaining-balance').textContent = `Remaining Balance: $${remainingBalance.toFixed(2)}`;

document.getElementById('expense-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
  
    if (description && amount && date) {
      addExpense(description, parseFloat(amount), date);
      document.getElementById('expense-form').reset(); // clear form
    }
  });
  
let expenses = [];

function addExpense(description, amount, date) {
  let expense = {description: description, amount: amount, date: date};
  expenses.push(expense);
  renderExpenseList();
  updateTotal();
}

function renderExpenseList() {
  const expenseList = document.getElementById('expense-list');
  expenseList.innerHTML = ''; // Clear the list before re-rendering

  expenses.forEach((expense, index) => {
    // Create the list item
    const li = document.createElement('li');
    li.textContent = `${expense.description} - $${expense.amount.toFixed(2)} - ${expense.date} `;

    // Create the "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Add the click event listener to delete the expense
    removeButton.addEventListener('click', () => {
      expenses.splice(index, 1); // Remove item from array
      renderExpenseList();       // Refresh the list
      updateTotal();             // Recalculate totals
    });

    // Add the button to the list item
    li.appendChild(removeButton);

    // Add the list item to the UL
    expenseList.appendChild(li);
  });
}



function updateTotal() {
  // 1. Start fresh
  totalExpenses = 0;

  // 2. Add up all the amounts in the expenses array
  expenses.forEach(expense => {
    totalExpenses += expense.amount;
  });

  // 3. Update the total expenses on screen
  document.getElementById('total-expenses').textContent = `Total Expenses: $${totalExpenses.toFixed(2)}`;

  // 4. Calculate and display remaining balance
  const remainingBalance = budget - totalExpenses;
  document.getElementById('remaining-balance').textContent = `Remaining Balance: $${remainingBalance.toFixed(2)}`;
}

