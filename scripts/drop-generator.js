function randomValFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const numbers = [2,3,4,5,6,7,8];
const letters = ['C','D','E','F','G','H'];

const mapArr = [];


// d1, e1, f1, i4, i5, i6, i7, i8
const remainingSquares = [{number: 1, letter: 'D'}, {number: 1, letter: 'E'}, {number: 1, letter: 'F'}, {number: 4, letter: 'I'},
                          {number: 5, letter: 'I'}, {number: 6, letter: 'I'}, {number: 7, letter: 'I'}, {number: 8, letter: 'I'}]; 


numbers.forEach(num => letters.forEach(letter => mapArr.push({number: num, letter: letter})));
remainingSquares.forEach(square => mapArr.push(square));

const dropPoint = randomValFromArray(mapArr);

document.getElementById('drop-point').innerHTML = dropPoint.letter + dropPoint.number;
