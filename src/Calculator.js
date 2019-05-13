import * as math from 'mathjs';

function Calculator (){

  const add = math.add;;
  const multiply = math.multiply;
  const subtract = math.subtract;

  return {
    add: add,
    multiply: multiply,
    subtract: subtract
  }
}

export default Calculator;
