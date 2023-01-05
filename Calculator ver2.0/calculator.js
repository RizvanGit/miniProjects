const OPERATIONS = {
  sum: '+',
  substract: '-',
  multiply: '*',
  division: '/',
}

function calculate ({a, b, operation}) {
  let result = null

  switch (operation) {
    case OPERATIONS.sum :
      result = sum (a, b)
      break;
    case OPERATIONS.substract :
      result = sub (a, b)
      break;
    case OPERATIONS.multiply :
      result = multiply (a, b)
      break;
    case OPERATIONS.division :
      result = division (a, b)
      break;
  }

  return result
}