let Name = prompt('Please Enter Your Name')

function greetuser(username) {
    return 'welcome!' + username + 'To my First Webpage'
}
let greeting = greetuser(Name)
alert(greeting);

function isprime(number) {
    if (number <=1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
        return false;
    }
    return true;
}


let usernumber = prompt('please enetr a positive integer')

let result = isprime(usernumber)

let resultmessage = isprime(usernumber) ? 'is' : 'is not'
alert(`${usernumber} ${resultmessage} 'a prime number'`)


