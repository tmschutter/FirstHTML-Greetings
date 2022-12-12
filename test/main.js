// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
//   }

// console.log(getFullName('Tom', 'Schutter'))

function countCharacter(str, char) {

  var count = 0

  for (let index = 0; index < str.length; index ++){
    if (str[index] === char){
        count ++
    }
  }
  return count
}

console.log(countCharacter('bannanananananaana', 'a'))