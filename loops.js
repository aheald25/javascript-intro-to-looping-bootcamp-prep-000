function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
    } else {
    array.push('I am ${i} strange loop.')
    }
  }
  return array
  }

function whileLoop(number) {

  while(number > 0) {
    console.log(--number)
  }
  if (number === 0) {
    return ('done')
  }
  return whileLoop
}
function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  function array() {
    --array
  }
  do {
    return array
  }
  while (array.length > 0 && maybeTrue())
}
