// Estrutura de Repetição - Vetor e Matriz

import promptSync from 'prompt-sync';
const prompt = promptSync();

// ===

function obesePeople() {
  let personAge: number[] = []
  let personWeight: number[] = []

  for (let i = 1; i <= 7; i++) {
    let age = parseFloat(prompt(`Enter the age of person ${i}: `))
    let weight = parseFloat(prompt(`Enter the weight of person ${i}: `))
  
    personAge.push(age)
    personWeight.push(weight)

    let peopleOver90Kg: number = personWeight.filter(x => x > 90).length
    let averageAge:number = (personAge.reduce((acumulador, valorAtual) => (acumulador + valorAtual))) / personAge.length

    if (i === 7) {
      console.log(`People over 90kg: ${peopleOver90Kg}`)
      console.log(`Average age: ${averageAge.toFixed(2)}`)
    }
  }  
}

function numberOfNumbers() {
  let numbers: number[] = []

  for (let i = 1; i <= 10; i++) {
    let number = parseFloat(prompt(`Enter the number ${i}: `))
    numbers.push(number)

    let evenNumbers = numbers.filter(x => x >= 30 && x <= 90)

    if (i === 10) console.log(`Even numbers: ${evenNumbers}`)
  }
}

function averageOfValues() {
  let personAge: number[] = []
  let personWeight: number[] = []
  let personHeight: number[] = []

  for (let i = 1; i <= 10; i++) {
    let age = parseFloat(prompt(`Enter the age of person ${i}: `))
    let weight = parseFloat(prompt(`Enter the weight of person ${i}: `))
    let height = parseFloat(prompt(`Enter the height of person ${i}: `))

    personAge.push(age)
    personWeight.push(weight)
    personHeight.push(height)
  }
  let peopleOver190 = personAge.filter((age, index) => personHeight[index] > 190)
  let countPeopleBetween10And30Over190 = peopleOver190.filter(age => age >= 10 && age <= 30).length
  let percentagePeopleBetween10And30Over190 = (countPeopleBetween10And30Over190 / peopleOver190.length) * 100
  let peopleOver90KgAnd150 = personWeight.filter(x => x > 90).length && personHeight.filter(x => x > 150)
  let averageAgeOfPeople: number = personAge.reduce((acumulador, valorAtual) => acumulador + valorAtual) / personAge.length 

  console.log(`Average age of people: ${averageAgeOfPeople.toFixed(2)}`)
  console.log(`Number of people with weight over 90kg and height under 1.50m: ${peopleOver90KgAnd150}`)
  console.log(`Percentage of people aged 10 to 30 over 1.90m: ${percentagePeopleBetween10And30Over190.toFixed(2)}`)
}

function ageAndSex() {
  let personAge: number[] = []
  let personSex: number[] = []

  for (let i = 1; i <= 12; i++) {
    let age = parseFloat(prompt(`Enter the age of person ${i}: `))
    let sex = Number(prompt(`Enter the sex of person ${i} (0 to Women and 1 for Man): `))

    personAge.push(age)
    personSex.push(sex)
  }

  let averageAgeOfGroup = personAge.reduce((acumulador, valorAtual) => acumulador + valorAtual) / personAge.length
  
  let onlyWomen = personSex.filter((_, index) => personSex[index] === 0)
  let averageAgeOfWomen = onlyWomen.reduce((acumulador, valorAtual) => acumulador + valorAtual) / onlyWomen.length
  
  let onlyMan = personSex.filter((_, index) => personSex[index] === 1)
  let averageAgeOfMan = onlyMan.reduce((acumulador, valorAtual) => acumulador + valorAtual) / onlyMan.length

  console.log(`The average age of the group is: ${averageAgeOfGroup.toFixed(2)}`)
  console.log(`The average age of women is: ${averageAgeOfWomen.toFixed(2)}`)
  console.log(`The average age of man is: ${averageAgeOfMan.toFixed(2)}`)
}

function sumOf50EvenNumbers() {
  let numbers: number[] = []

  function isPrime(num: number) {
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        return false
      }
      return true
    }
  }

  for (let i = 0; i <= 50; i++) {
    if (isPrime(i)) {
      numbers.push(i)
    }
  }

  let sumPrimeNumbers = numbers.reduce((acumulador, valorAtual) => acumulador + valorAtual)

  console.log(sumPrimeNumbers)
}
 
function wholeNumber() {
  let number = 0

  number = Number(prompt('Enter the number: '))

  console.log(Math.abs(number))
}

function multiplyNumbers() {
  let numbers: number[] = []

  do {
    let number = Number(prompt('Enter the number: '))
    numbers.push(number)

  } while (numbers.length <= 1);

  let multiply = numbers[0] * numbers[1]

  console.log(multiply)
}

function higherNumber() {
  let numbers: number[] = []

  do {
    let number = Number(prompt('Enter the number: '))
    numbers.push(number)

  } while (numbers.length <= 1);

  let higher = numbers.sort()

  console.log(higher[1])
}

function sumOfTheAgesOfTwoPeople() {
  let personAge: number[] = []
  let personName: string[] = []

  do {
    let age = Number(prompt('Enter the age of person: '))
    let name = prompt('Enter the name of person: ')

    personAge.push(age)
    personName.push(name)

  } while (personAge.length <= 1);

  let sumOfAges = personAge.reduce((acumulador, valorAtual) => acumulador + valorAtual)

  console.log(`The sum of the ages of ${personName[0]} and ${personName[1]} is ${sumOfAges}`)
}

function exchangeOfValues() {
  let numbers: number[] = []

  do {
    let number = Number(prompt('Enter the number: '))
    numbers.push(number)

  } while (numbers.length <= 1);

  let reverse = numbers.reverse()

  console.log(`The new values are 1. ${reverse[0]} and 2. ${reverse[1]}`)
}

function numberTheorem() {
  let numbers: number[] = []

  do {
    let number = Number(prompt('Enter the number: '))
    numbers.push(number)
    
  } while (numbers.length <= 2);

  let theorem = (numbers[0] * numbers[1]) * numbers[2]

  console.log(`The result of the theorem is: ${theorem}`)
}

function dimensionTheorem() {
  let numbers: number[] = []

  do {
    let number = Number(prompt('Enter the number: '))
    numbers.push(number)
    
  } while (numbers.length <= 2);

  let theorem = ((numbers[0] * 5) * numbers[1]) * numbers[2]

  console.log(`The result of the theorem is: ${theorem}`)
}

function gradeAverage() {
  let grades: number[] = []
  let weights: number[] = []

  do {
    let grade = Number(prompt('Enter the student grade: '))
    let weight = Number(prompt('Enter the weight of the notes: '))
    grades.push(grade)
    weights.push(weight)
    
  } while (grades.length <= 1);

  let gradeFinal = ((grades[0] * weights[0]) + (grades[1] * weights[1])) / (weights[0] + weights[1])

  console.log(`The student achieved an average of: ${gradeFinal.toFixed(1)}`)
}

function temperatureConversion() {
  let temperature = 0

  temperature = Number(prompt('Enter the temperature in Fahrenheit (ºF): '))

  let conversion = (temperature - 32) * 5/9

  console.log(conversion)
}

function gasolineExpense() {
  let gasoline = 0

  gasoline = Number(prompt('Enter the amount you have in the gas tank: '))

  let distance = 520 / 12

  let totalPrice = (distance - gasoline) * 1.50

  console.log(`Maria will use ${distance.toFixed()} liters of gasoline and will need to fill up ${totalPrice.toLocaleString('pt-BR', {style: "currency", currency: "BRl"})}`)
}

function totalPayableAndCommission() {
  let productPrices: number[] = []
  let commission = 0

  do {
    let productPrice = Number(prompt('Enter the price of the product: '))
    productPrices.push(productPrice)

  } while (productPrices.length <= 2);

  let total = productPrices.reduce((acumulador, valorAtual) => acumulador + valorAtual)

  let inCash = total - (total * 0.10) 
  commission = inCash * 0.05
  console.log(`The amount to be paid in cash is ${inCash.toLocaleString('pt-BR', {style: "currency", currency: "BRl"})} 
    and the commission will be ${commission.toLocaleString('pt-BR', {style: "currency", currency: "BRl"})}`)

  let inCreditCard = total / 3
  commission = total * 0.05
  console.log(`The amount to be paid in credit card is ${inCreditCard.toLocaleString('pt-BR', {style: "currency", currency: "BRl"})} 
    and the commission will be ${commission.toLocaleString('pt-BR', {style: "currency", currency: "BRl"})}`)
}

function addAsciiEConvertToCharacter() {
  let numbers: number[] = []
  
  do {
    let number = Number(prompt('Enter the number: '))
    numbers.push(number)

  } while (numbers.length <= 1);

  let sum = numbers[0] + numbers[1]
  let result = String.fromCharCode(sum)

  console.log(`The character corresponding to the sum of ASCII values is: ${result}`);
}

function differenceBetweenDates() {
  let actualDate = new Date().toLocaleDateString('pt-BR')
  const [actualDay, actualMonth, actualYear] = actualDate.split('/').map(Number);

  let day = parseFloat(prompt("Enter the day: ") as string )
  let month = parseFloat(prompt("Enter the month: ") as string )
  let year = parseFloat(prompt("Enter the year: ") as string )

  let date = new Date(year, month - 1, day)
  
  let difference = date.getTime() - new Date().getTime()
  let days = Math.floor(difference / (1000 * 60 * 60 * 24))

  console.log(`The difference between dates is: ${days} days`)
}

function studentWillGraduateOrNot() {
  let grades: number[] = []
  let weights: number[] = []

  do {
    let grade = Number(prompt('Enter the student grade: '))
    let weight = Number(prompt('Enter the weight of the notes: '))
    grades.push(grade)
    weights.push(weight)
    
  } while (grades.length <= 1);

  let gradeFinal = ((grades[0] * weights[0]) + (grades[1] * weights[1])) / (weights[0] + weights[1])

  if (gradeFinal > 7) {
    console.log('The student will graduate')
  } else {
    console.log('The student will not graduate')
  }
}

function evenOrOdd() {
  let number = 0

  number = Number(prompt('Enter the number: '))

  if (number % 2 === 0) console.log('The number is even')
    else console.log('The number is odd')
}

function orderNumbersDescending() {
  let numbers: number[] = []
  
  do {
    let number = Number(prompt('Enter the number: '))
    numbers.push(number)

  } while (numbers.length <= 1); 

  let order = numbers.sort((a, b) => a - b)
  let descending = order.reverse()

  console.log(descending)
}

function capacityOfAnElevator() {
  let peopleWeights: number[] = []
  let maxCapacity = 300
  let totalWeight = 0

  for (let i = 1; i <= 10; i++) {
    let peopleWeight = Number(prompt('Enter the people weight: '))
    peopleWeights.push(peopleWeight)

    totalWeight = peopleWeights.reduce((acumulador, valorAtual) => acumulador + valorAtual)

    if (totalWeight >= maxCapacity) {
      console.log('Maximum capacity reached.') 
      break
    }
  }

  console.log(`The achieved weight was ${totalWeight}`)
}

function metroTicketOffice() {
  let changeValue = 0
  let personMoney = 0
  let numberOfTickets = 0
  
  for (let i = 1; numberOfTickets < 10; i++) { 
    numberOfTickets = Number(prompt('Enter the number of tickets: '))
    personMoney = Number(prompt('Enter the person money: '))  

    switch (true) {
      case numberOfTickets === 1:
        changeValue = personMoney - 1.30
        
        console.log(`The number of tickets purchased was ${numberOfTickets} and the change is ${changeValue.toLocaleString('pt-BR', {style: "currency", currency: "BRl"})}`)
      break
      case numberOfTickets >= 2 && numberOfTickets <= 9:
        changeValue = personMoney - (1.30 * numberOfTickets)
  
        console.log(`The number of tickets purchased was ${numberOfTickets} and the change is ${changeValue.toLocaleString('pt-BR', {style: "currency", currency: "BRl"})}`)
      break
      case numberOfTickets === 10:
        changeValue = personMoney - 12
  
        console.log(`The number of tickets purchased was ${numberOfTickets} and the change is ${changeValue.toLocaleString('pt-BR', {style: "currency", currency: "BRl"})}`)
      break
    }
  }
}

function employeeSalary() {
  let personName: string = ''
  let grossSalary: number
  let numberOfDependents: number

  let netSalary = 0
  let parcialSalary = 0

  do {
    personName = prompt('Enter the name of the employee: ')
    grossSalary = Number(prompt('Enter the employee gross salary: '))
    numberOfDependents = Number(prompt('Enter the number of dependents: '))
  } while (personName === '');

  switch (true) {
    case grossSalary <= 300:
      parcialSalary = grossSalary - (grossSalary * 0.08)
    break
    case grossSalary >= 301 && grossSalary <= 700:
      parcialSalary = grossSalary - (grossSalary * 0.09)
    break
    case grossSalary > 700:
      parcialSalary = grossSalary - (grossSalary * 0.10)
    break
  }

  netSalary = parcialSalary + (15 * numberOfDependents) + 40 + 100

  console.log(`The ${personName} net salary is ${netSalary.toLocaleString('pt-BR', {style: "currency", currency: "BRl"})}`)
}

obesePeople()
numberOfNumbers()
averageOfValues()
ageAndSex()
sumOf50EvenNumbers()
wholeNumber()
multiplyNumbers()
higherNumber()
sumOfTheAgesOfTwoPeople()
exchangeOfValues()
numberTheorem()
dimensionTheorem()
gradeAverage()
temperatureConversion()
gasolineExpense()
totalPayableAndCommission()
addAsciiEConvertToCharacter()
differenceBetweenDates()
studentWillGraduateOrNot()
evenOrOdd()
orderNumbersDescending()
capacityOfAnElevator()
metroTicketOffice()
employeeSalary()