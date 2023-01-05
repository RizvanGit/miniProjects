const RATES = {
  usd: 0.014,
  eur: 0.013,
}

function convert ({rub , currency}) {
  if (!RATES[currency]) {
    throw new Error('Currency error')
  }

  return rub * RATES[currency]
}

