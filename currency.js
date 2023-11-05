
    const convertButton = document.getElementById('convert');

    const amountInput = document.getElementById('amount');

    const convertedAmountOutput = document.getElementById('converted_amount');

    convertButton.addEventListener('click', async () => {

      const fromCurrency = document.getElementById('from').value;

      const toCurrency = document.getElementById('to').value;

      const amount = amountInput.value;

      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);

      const data = await response.json();

      const conversionRate = data.rates[toCurrency];

      const convertedAmount = amount * conversionRate;

      convertedAmountOutput.innerHTML = convertedAmount;

    });

