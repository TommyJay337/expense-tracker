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
  
    if (description && amount) {
      addExpense(description, parseFloat(amount));
      document.getElementById('expense-form').reset(); // clear form
    }
  });
  
  function addExpense(description, amount) {
    const expenseList = document.getElementById('expense-list');
  
    const li = document.createElement('li');
    li.textContent = `${description} - $${amount.toFixed(2)}`;
  
    expenseList.appendChild(li);
  }
  