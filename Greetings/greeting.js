var greetingData = {
    addGreeting: function(language, greeting){
        greetingData[language] = greeting
    },
    english: 'Hello',
    spanish: 'Hola',
    french: 'Bonjour'
}

function greetUser(){
    var language = document.getElementById("language").value
    var name = document.getElementById("name").value
    if (!greetingData[language]){
        greetingData.addGreeting(
            language, prompt(`I don\'t know ${language}, how should I greet you?`)
            )
    }      
    document.getElementById("output").innerHTML = `${greetingData[language]}, ${name}!`
}

function clearFields(){
    document.getElementById("language").value = ''
    document.getElementById("name").value = ''
}