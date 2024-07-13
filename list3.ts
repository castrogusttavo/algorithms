// Estrutura de Repetição

import promptSync from 'prompt-sync';
const prompt = promptSync();

// ===

function totalTruckWeight() {
  let boxWeight = 0
  let totalWeight = 0

  for (let i = 1; i <= 25; i++) {
    boxWeight = Number(prompt(`Enter the weight of the load ${i}: `))
    totalWeight += boxWeight
  }

  console.log(`The total weight to be carried by the truck is: ${totalWeight}`)
}

function totalSpentByTheCompany() {
  let itemAmount: number
  let itemPrice: number

  let totalSpent = 0

  for (let i = 1; i <= 45; i++) {
    itemAmount = Number(prompt(`Enter the amount of item ${i}: `))
    itemPrice = Number(prompt(`Enter the price of item ${i}: `))
    
    let totalItem = itemAmount * itemPrice

    totalSpent += totalItem
  }

  console.log(`The total spent by the company is: ${totalSpent}`)
}

function totalHoursWorked() {
  let hoursWorked: number
  let totalHours = 0

  for (let i = 1; i <= 30; i++) {
    hoursWorked = Number(prompt(`Enter the amount of hours worked of day ${i}: `))
    totalHours += hoursWorked
  }

  console.log(`The total hours worked by the company is: ${totalHours}`)
}

function monthlySalaryPerHourWorked(){
  let hoursWorked: number
  let salary = 0
  let totalHours = 0

  for (let i = 1; i <= 30; i++) {
    hoursWorked = Number(prompt(`Enter the amount of hours worked of day ${i}: `))
    totalHours += hoursWorked
    salary = totalHours * 10
  }

  console.log(`The total salary of month is: R$${salary}`)
}

function fahrenheitToCelsiusConversion() {
  let temperature: number

  for (let i = 1; i <= 50; i++) {
    temperature = (i - 32) * 5/9
    console.log(`The temperature in Celsius is: ${temperature.toFixed(2)}`)
  }
}

function sumOfNumbersUpToLimit() {
  let numberLimit = Number(prompt('Enter the number limit: '))

  let sumLimit = numberLimit

  while(numberLimit > 0) {
    numberLimit--
    sumLimit +=numberLimit
  }

  console.log(`The sum of numbers up to ${numberLimit} is: ${sumLimit}`) 
}

function calculatesTheFactorialOfTheNumber() {
  let factorial = Number(prompt('Enter a number: '))

  let numberFactorial = factorial

  switch (true) {
    case factorial === 0:
      console.log(`The factorial of the number is: 1`)
    break
    case factorial < 0:
      console.log('The number must be greater than 0')
    break
    default:
      do {
        factorial--
        numberFactorial *= factorial
      } while (factorial > 1);

      console.log(`The factorial of the number is: ${numberFactorial}`)
    break
  }
} 

function whatIsTheBiggestNumber() {
  let number: number
  let biggestNumber = 0

  for (let i = 1; i <= 3; i++) {
    number = Number(prompt(`Enter the number ${i}: `))
    if (i === 1) {
      biggestNumber = number
    } else if (number > biggestNumber) {
      biggestNumber = number
    }
  }

  console.log(`The biggest number is: ${biggestNumber}`)
}


function companyShoppingList() {
  let itemAmount: number
  let itemPrice: number
  let word: string
  
  let totalSpent = 0 

  do {
    itemAmount = Number(prompt('Enter the amount of items: '))
    
    if (itemAmount <= 0) {
      console.log('The amount of items must be greater than 0')
      return null
    } else {
      itemPrice = Number(prompt('Enter the price of items: '))
      
      if (itemPrice <= 0) {
        console.log('The price of items must be greater than 0')
        return null
      } else {
        word = prompt('Finished list? (end): ')

        let totalItems = itemAmount * itemPrice
        totalSpent += totalItems
      }
    } 
  } while (word !== 'end')
  
  console.log(`The total spent by the company is: R$${totalSpent}`)
}
 
function sumAndAverageOfIntegers() {
  let numbers: number[] = []
  let sum = 0
  let average = 0
  let count = 0

  do {
    let numberInput = prompt('Enter a number(or a negative number to exit): ')
    let number = parseFloat(numberInput)

    numbers.push(number)

    if (number < 0) {
      break
    } else {
      count++
      sum += number
      average = sum / count
    }

  } while (numbers.length > 0);

  console.log(`The sum of the numbers is: ${sum}`)
  console.log(`The average of the numbers is: ${average}`)
}

function biggestValueAmongSeveralNumbers() {
  let number: number
  let biggestNumber = 0

  for (let i = 1; i >= 0; i++) {
    number = Number(prompt('Enter a number: '))

    if (number <= 0) break

    i === 1 ? biggestNumber = number : null
    biggestNumber < number ? biggestNumber = number : null
  }

  console.log(`The biggest number is: ${biggestNumber}`)
}

function smallestValueAmongSeveralNumbers() {
  let number: number
  let smallestNumber = 0

  for (let i = 1; i >= 0; i++) {
    number = Number(prompt('Enter a number: '))
    let breakWord = prompt('Finished list? (S/N): ')

    i === 1 ? smallestNumber = number : null
    smallestNumber > number ? smallestNumber = number : null
    
    if (breakWord === 'S') break
  }

  console.log(`The smallest number is: ${smallestNumber}`)
} 

function showLargestAndSmallestNumber() {
  let number: number
  let biggestNumber = 0
  let smallestNumber = 0

  for (let i = 1; i >= 0; i++) {
    number = Number(prompt('Enter a number: '))
    let breakWord = prompt('Finished list? (yes): ')

    i === 1 ? biggestNumber = number : null
    i === 1 ? smallestNumber = number : null

    biggestNumber < number ? biggestNumber = number : null
    smallestNumber > number ? smallestNumber = number : null

    if (breakWord === 'yes') break
  }

  console.log(`The biggest number is: ${biggestNumber}`)
  console.log(`The smallest number is: ${smallestNumber}`)
}

function evenOrOdd() {
  let number: number

  for (let i = 1; i <= 10; i++) {
    number = Number(prompt('Enter a number: '))

    if (number < 0) {
      console.log('The number must be greater than 0')
      break
  }

    number % 2 === 0 
      ? console.log(`${number} is even`) 
      : console.log(`${number} is odd`)
  }
}

function whenWillHeBigger() {
  let Anacleto = 150
  let Felisberto = 110
  let totalDays = 0

  for (let i = 1; Anacleto > Felisberto; i++){
    Anacleto += 2
    Felisberto += 3
    totalDays = i

    if (Felisberto > Anacleto) break
  }  
  console.log(`Felisberto will be bigger than Anacleto in ${totalDays} days`) 
}

function totalAreaOfTheHome(){
  let widthConvenient: number
  let lengthConvenient: number

  let areaTotal = 0

  for (let i = 1; i >= 0; i++) {
    widthConvenient = Number(prompt(`Enter the width of the convenient ${i}: `))
    lengthConvenient = Number(prompt(`Enter the length of the convenient ${i}: `))
    let breakWord = prompt('Finished list? (yes): ')

    areaTotal += widthConvenient * lengthConvenient

    if (widthConvenient <= 0 || lengthConvenient <= 0) break
    if (breakWord === 'yes') break
  }

  console.log(`The total area of the home is: ${areaTotal.toLocaleString('pt-BR')} m²`)
}

function multiplicationTable() {
  let number: number
  let multiplication = 0

  number = Number(prompt('Enter a number: '))

  for (let i = 0; i <= 10; i++) {
    multiplication = number * i
    console.log(`${number} x ${i} = ${multiplication}`)
  }
}

function movieReviewResult() {
  let reviews: string[] = []
  let ageReviewers: number[] = []
  let averageAgeReviewers = 0
  let percentageA = 0
  let percentageB = 0
  let percentageC = 0
  let percentageD = 0
  let percentageE = 0

  for (let i = 1; i >= 0; i++) {

    let ageReviewer = parseFloat(prompt('Enter a age of reviewer (or a negative number to exit): '))
    if (isNaN(ageReviewer) || ageReviewer <= 0) break

    let review = prompt('Enter the review (A/B/C/D/E): ')

    reviews.push(review)
    ageReviewers.push(ageReviewer)

    averageAgeReviewers = 
      ageReviewers.reduce((acc, age) => acc + age, 0) / ageReviewers.length

    percentageA = (reviews.filter(review => review === 'A').length / reviews.length) * 100
    percentageB = (reviews.filter(review => review === 'B').length / reviews.length) * 100
    percentageC = (reviews.filter(review => review === 'C').length / reviews.length) * 100
    percentageD = (reviews.filter(review => review === 'D').length / reviews.length) * 100
    percentageE = (reviews.filter(review => review === 'E').length / reviews.length) * 100
  }

  console.log(`The total of reviews are: ${reviews.length}`)
  console.log(`The average age of the reviewers: ${averageAgeReviewers}`)
  console.log(`The percentage of reviews excellent: ${percentageA.toFixed(2)}%`)
  console.log(`The percentage of reviews excellent: ${percentageB.toFixed(2)}%`)
  console.log(`The percentage of reviews excellent: ${percentageC.toFixed(2)}%`)
  console.log(`The percentage of reviews excellent: ${percentageD.toFixed(2)}%`)
  console.log(`The percentage of reviews excellent: ${percentageE.toFixed(2)}%`)
}

function calculateSalaryOfEmployees() {
  let grossSalary: number
  let netSalary = 0

  for (let i = 0; i >= 0; i++) {
    grossSalary = Number(prompt('Enter the gross salary: '))

    let INSS = grossSalary * 0.11
    let parcialSalary = grossSalary - INSS

    switch (true) {
      case parcialSalary <= 900:
        netSalary = parcialSalary
      break
      case parcialSalary > 900 && parcialSalary <= 1800:
        netSalary = parcialSalary + (parcialSalary * 0.15) - 135
      break
      case parcialSalary > 1800:
        netSalary = parcialSalary + (parcialSalary * 0.275) - 360
      break
    }

    console.log(`The net salary of the employees is: R$${netSalary.toFixed(2)}`)
    let breakWord = prompt('Finished list? (yes): ')    
    if (breakWord === 'yes') break
  }
}

function totalPurchaseMadeByTheCustomer() {
  let priceProduct: number[] = []
  let quantityProduct: number[] = []
  let paymentMethod: number 

  for (let i = 0; i >= 0; i++) {
    priceProduct.push(Number(prompt('Enter the price of product: ')))
    quantityProduct.push(Number(prompt('Enter the quantity of product: ')))

    let totalPurchase = 0

    for (let i = 0; i < priceProduct.length; i++) {
      totalPurchase += priceProduct[i] * quantityProduct[i]
    }
    
    let breakWord = prompt('Finished list? (yes): ')   

    if (breakWord === 'yes') {
      paymentMethod = Number(prompt('Enter the payment method (1/2/3/4): '))

      switch (true) { 
        case paymentMethod === 1:
          totalPurchase = totalPurchase - (totalPurchase * 0.10)
          console.log(`The total purchase made by the customer is: R$${totalPurchase.toFixed(2)}`)
        break
        case paymentMethod === 2:
          totalPurchase = totalPurchase - (totalPurchase * 0.5)
          console.log(`The total purchase made by the customer is: R$${totalPurchase.toFixed(2)}`)
        break
        case paymentMethod === 3:
          totalPurchase = totalPurchase / 2
          console.log(`The total purchase made by the customer is: R$${totalPurchase.toFixed(2)}`)
        break
        case paymentMethod === 4:
          totalPurchase = (totalPurchase + (totalPurchase * 0.10)) / 3
          console.log(`The total purchase made by the customer is: R$${totalPurchase.toFixed(2)}`)
        break
      }

      break
    }
  }
}

function bestPurchasingOption() {
  let priceProduct: number[] = []
  let quantityProduct: number[] = []
  let totalInCashRegister: number
  let paymentMethod: number

  for (let i = 1; i >= 0; i++) {
    priceProduct.push(Number(prompt('Enter the price of product: ')))
    quantityProduct.push(Number(prompt('Enter the quantity of product: ')))
    totalInCashRegister = Number(prompt('Enter the total in cash register: '))
    
    let totalPurchase = 0
    let percentageOfTotalCashRegister = totalInCashRegister * 0.8

    for (let i = 0; i < priceProduct.length; i++) {
      totalPurchase += quantityProduct[i] * priceProduct[i]
    }
    
    if (totalPurchase < percentageOfTotalCashRegister) {
      paymentMethod = 1
      totalPurchase = totalPurchase - (totalPurchase * 0.05)
    } else {
      paymentMethod = 2
      totalPurchase = (totalPurchase + (totalPurchase * 0.10)) / 3
    }

    let breakWord = prompt('Finished list? (yes): ')   

    if (breakWord === 'yes') {
      switch (true) {
        case paymentMethod === 1:
          console.log(`The amount to be paid is ${totalPurchase.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })} and the best method of payment is cash`)
        break
        case paymentMethod === 2:
          console.log(`The amount to be paid is ${totalPurchase.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })} and the best method of payment is credit card`)
      break
      }
    
      break
    }
  }
}

function newSalaryForEmployees() {
  let salaryRecent: number
  let newSalary = 0

  for (let i = 0; i >= 0; i++) {
    salaryRecent = Number(prompt('Enter the salary actual for employed (0 to exit): '))

    if (salaryRecent <= 0) break

    switch (true) {
      case salaryRecent < 500:
        newSalary = salaryRecent + (salaryRecent * 0.15)
      break
      case salaryRecent >= 500 && salaryRecent < 1000:
        newSalary = salaryRecent + (salaryRecent * 0.10)
      break
      case salaryRecent >= 1000:
        newSalary = salaryRecent + (salaryRecent * 0.05)
      break
    }

    console.log(`The new salary for employees is: R$${newSalary.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}`)
  }
}

function agePerson() {

  let actualDate = new Date().toLocaleDateString('pt-BR')
  const [actualDay, actualMonth, actualYear] = actualDate.split('/').map(Number);

  let birthDay = parseFloat(prompt("Enter the birth day: ") as string )
  let birthMonth = parseFloat(prompt("Enter the birth month: ") as string )
  let birthYear = parseFloat(prompt("Enter the birth year: ") as string )

  let age = actualYear - birthYear
  let adjustAge = true
  
  while (adjustAge) {
    if (actualMonth < birthMonth || (actualMonth === birthMonth && actualDay < birthDay)) {
      age--
    }
    adjustAge = false
  }
  console.log(`The age of the person: ${age}`)
}

function parkingPaymentVariableValue() {
  let entryTime: number
  let entryMinutes: number
  let exitTime: number
  let exitMinutes: number
  let alreadyPaid = false

  entryTime = Number(prompt("Enter the entry time (hours): "))
  entryMinutes = Number(prompt("Enter the entry time (minutes): "))
  exitTime = Number(prompt("Enter the exit time (hours): "))
  exitMinutes = Number(prompt("Enter the exit time (minutes): "))

  while (!alreadyPaid) {
    let totalMinutes = ((exitTime * 60) + exitMinutes - ((entryTime * 60) + entryMinutes)) 
    let totalHours = totalMinutes / 60
    let additionalHour = totalHours - 2
    let totalValue = 0
    
    switch (true) {
      case totalHours == 1:
        totalValue = 4
      break
      case totalHours < 2:
        totalValue = 6
      break
      default:
        totalValue = 6 + (additionalHour * 1)
      break
    }

    console.log(`Parked time was: ${totalHours.toFixed(0)} hours`)
    console.log(`Total value: R$${totalValue.toFixed()}`)
    alreadyPaid = true
  }
}

totalTruckWeight()
totalSpentByTheCompany()
totalHoursWorked()
monthlySalaryPerHourWorked()
fahrenheitToCelsiusConversion()
sumOfNumbersUpToLimit()
calculatesTheFactorialOfTheNumber()
whatIsTheBiggestNumber()
companyShoppingList()
sumAndAverageOfIntegers()
biggestValueAmongSeveralNumbers()
smallestValueAmongSeveralNumbers()
showLargestAndSmallestNumber()
evenOrOdd()
whenWillHeBigger()
totalAreaOfTheHome()
multiplicationTable()
movieReviewResult()
calculateSalaryOfEmployees()
totalPurchaseMadeByTheCustomer()
bestPurchasingOption()
newSalaryForEmployees()
agePerson()
parkingPaymentVariableValue()