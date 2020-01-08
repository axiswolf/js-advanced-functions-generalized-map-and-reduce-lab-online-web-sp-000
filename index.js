// Add your functions here
function map(array, cb) {
    const result = []
    for (let x of array) {
      result.push(cb(x))
    }
    return result
}

function reduce(array, cb, value) {
  for (let x of array) {
    value = cb(value,x,array)
  }
  return value
}