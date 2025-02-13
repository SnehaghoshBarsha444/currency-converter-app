// Exchange rates with INR as base (1 INR = X foreign currency)
const exchangeRates = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0095,
    JPY: 1.78,
    AUD: 0.018,
    CAD: 0.016,
    CHF: 0.011,
    CNY: 0.086
  };

  const amount = document.getElementById('amount');
  const fromCurrency = document.getElementById('fromCurrency');
  const toCurrency = document.getElementById('toCurrency');
  const result = document.getElementById('result');
  const swapBtn = document.getElementById('swapBtn');

  function convertCurrency() {
    const amountValue = parseFloat(amount.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    // Convert to INR first (if not already INR)
    const inrAmount = from === 'INR' ? amountValue : amountValue / exchangeRates[from];
    
    // Convert from INR to target currency
    const finalAmount = to === 'INR' ? inrAmount : inrAmount * exchangeRates[to];

    const formatConfig = {
      style: 'currency',
      currency: to,
      maximumFractionDigits: 2
    };

    result.textContent = `${amountValue} ${from} = ${finalAmount.toLocaleString('en-US', formatConfig)}`;
  }

  function swapCurrencies() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    convertCurrency();
  }

  // Event listeners
  amount.addEventListener('input', convertCurrency);
  fromCurrency.addEventListener('change', convertCurrency);
  toCurrency.addEventListener('change', convertCurrency);
  swapBtn.addEventListener('click', swapCurrencies);

  // Initial conversion
  convertCurrency();