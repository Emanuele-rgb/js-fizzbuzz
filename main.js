var numerinorm = 0;

for (var i = 0; i < 100; i++) {

  numerinorm = numerinorm + 1

  if (numerinorm % 15 == 0) {
    console.log('FizzBuzz')

  }
  else {
    if (numerinorm % 5 == 0) {
      console.log('Buzz')

    }
    else {
      if (numerinorm % 3 == 0) {
        console.log('Fizz')
      }
      else {
        console.log(numerinorm)
      }
    }
  }
}
