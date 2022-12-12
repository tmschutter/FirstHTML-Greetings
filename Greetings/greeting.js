localStorage.setItem('english', 'Hello')
localStorage.setItem('spanish', 'Hola')
localStorage.setItem('french', 'Bonjour')

var greetingData = {
}

for (let x = 0; x <localStorage.length; x++){ // add keys/values from localStorage to greetingData object
    var localKey = localStorage.key(x)
    var localVal = localStorage.getItem(localKey)
    greetingData[localKey] = localVal
}

console.log(greetingData)

function addGreeting(language, greeting){
    greetingData[language] = greeting // add new greeting data to current greetingData object
    localStorage.setItem(language, greeting) // push new greeting data to localStorage for later use
}

function greetUser(){
    var language = document.getElementById("langSelect").value // retrieve value from HTML 'langSelect' field
    var name = document.getElementById("name").value // retrieve value from HTML 'name' field
    if (language === 'other'){ // if 'language' selection is 'other'
        language = prompt('What language would you like to add?') // ask user for new language
        addGreeting(
            language, prompt('What should the greeting be?') // ask user for desired greeting
            )
    }      
    document.getElementById("output").innerHTML = `${greetingData[language]}, ${name}!` // print the desired greeting and name into the HTML 'output'
}

function clearFields(){ // clears HTML name field, called upon page reload
    document.getElementById("name").value = ''
}

function clearLocal(){
    localStorage.clear()
}