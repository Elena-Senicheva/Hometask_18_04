"use strict";

/*
Написать функцию, которая проверяет, являются ли два слова анаграммами. (Анаграммы - слова, которые имеют одинаковую длину и состоят из одних и тех же букв, но в разном порядке. Пример: "воз", "зов")
*/

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return "Not anagram";
  }
  return (
    str1.toLowerCase().split("").sort().join() ===
    str2.toLowerCase().split("").sort().join()
  );
}

console.log(anagram("рига", "игра"));

/*
2. Написать функцию, которая подсчитывает количество гласных в строке.
*/
function getVowels(text) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
}

console.log(getVowels("Do you want to be Healthy?"));

/*function getVowels(text,vowels="a,e,i,o,u") {
  return text.toLowerCase().split('')
  .reduce((total, curValue) => {
   if (vowels.includes(curValue) ){
 return total += curValue;
   }
  return total;
  })
}
*/

/*
3. Написать функцию, которая принимает массив с числами и возвращает новый массив, который содержит отрицательные числа из первого массива.
*/

let arr = [-5,-9,2,5,-16,3];
let negativeArr = [];
arr.forEach(function(item){
if(item<0){
negativeArr.push(item);
}
})

console.log(negativeArr);



/*
4. Написать функцию, которая принимает массив и возвращает новый массив, состоящий только из уникальных значений первого массива (значения не должны повторяться).
*/

function uniqueValue(arr) {
  let result = [];
  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(uniqueValue('ooo aaa bty bty errr'))
