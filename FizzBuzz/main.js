function fizzBuzz(length){
    for (let x = 1; x <= length; x++){
        if (x % 3 === 0 && x % 5 === 0){
            console.log('fizzbuzz')
        } else if (x % 3 === 0){
            console.log('fizz')
        } else if (x % 5 === 0){
            console.log('buzz')
        } else {
            console.log(x)
        }
    }
}

function fizzBuzzArray(length){
    var outputArray = []
    
    for (let x = 1; x <= length; x++){
        if (x % 3 === 0 && x % 5 === 0){
            outputArray.push('fizzbuzz')
        } else if (x % 3 === 0){
            outputArray.push('fizz')
        } else if (x % 5 === 0){
            outputArray.push('buzz')
        } else {
            outputArray.push(x)
        }
    }
    return outputArray
}

// fizzBuzz(100)

// takes in an array

// outputs the amount of times that 2 appears in the array

var arr = [1,2,3,4,3,2,1,2,3,4,5,4,3,21,1,2,2,3,4,5,6,2,2,2,2,2,2,2,2,2,2,2,'f',4,'y','h','q',134,'g','g','qa','sd','gf','y5',5,'v','d','d','s','a','d','g','g','g','g',4,4,' ',4,4,4,4]

function countTwos(array){
    var count = 0
    for (let x = 0; x < array.length; x++){
        if (array[x] === 2){
            count ++
        }
    }
    return count
}

// console.log(countTwos(arr))

function countEach(array){
    var count = {}

    for (let x = 0; x < array.length; x++){
        if (count[array[x]] === undefined){
            count[array[x]] = 1
        } else {
            count[array[x]]++
        }
    }
    return count
}

// console.log(countEach(arr))

// console.log(countEach(fizzBuzzArray(100)))

function mostCommon(input){
    var max = 0
    var mostCommon;
    for (let key in input){
        if (input[key] > max){
            mostCommon = key
            max = input[key]
        }
    }
    return `The most common value is ${mostCommon} and it appears ${max} times.`
}

// countEach(fizzBuzzArray(100))

var countFB = countEach(fizzBuzzArray(100))
console.log(countFB)
console.log(mostCommon(countFB))