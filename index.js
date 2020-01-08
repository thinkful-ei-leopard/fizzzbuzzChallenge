'use strict'


$('button').on('click', event => {
  event.preventDefault();

  const num = $('#number-choice').val();


  function fizzBuzz(countTo) {
    // your code here
    const result = [];
    for (let i = 1; i <= countTo; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        result.push('fizzbuzz');
      } else if ( i % 5 === 0) {
        result.push('buzz');
      } else if (i % 3 === 0) {
        result.push('fizz');
      } else {
        result.push(i);
      }
    }
    
    console.log(result);
  }

  fizzBuzz(num);
  
});