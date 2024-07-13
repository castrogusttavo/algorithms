// Exercícios de Estrutura Decisão

import promptSync from 'prompt-sync';
const prompt = promptSync();

// ===
function electricityBill() {
  let valueBill = parseFloat(prompt("Enter the value of the bill: ") as string)

  valueBill > 50 ? console.log("You’re spending too much") :  console.log("Your spending was normal")
}

function calculateIMC() {

  let heightPerson = parseFloat(prompt("Enter the height in cm of the person: ") as string )
  let sexPerson = prompt("Enter the sex of the person (M/F): ") as string

  let imc : number

  sexPerson === 'M' ? imc = (72.7 * heightPerson) - 58 : imc = (62.1 * heightPerson) - 44.7

  console.log("Your ideal IMC is: " + imc.toFixed(2))
}

function amountSpentOnFullTank() {

  const alcohol = 1.00
  const gasoline = 1.80

  let typeTankCar = prompt("Enter the type of tank car (A/G): ") as string
  let tankCapacity = parseFloat(prompt("Enter the tank capacity in L: ") as string )

  let paymentPrice : number

  typeTankCar === 'A' ? paymentPrice = tankCapacity * alcohol : paymentPrice = tankCapacity * gasoline

  console.log("The payment price of the tank car: R$" + paymentPrice)
}

function moduleAtNumber() {

  let number = parseFloat(prompt("Enter the number: ") as string)

  let removeModule : number = Math.abs(number)

  console.log("The module of the number: " + removeModule)
}

function promotionalProductMessage() {

  let priceProduct = parseFloat(prompt("Enter the price of the product: ") as string)

  if(priceProduct >= 50 && priceProduct <= 100) {
    console.log("On Sale")
  } else {
    console.log("Standard Price")
  }
}

function totalEmployeeMonthlySales() {
  
  let nameEmployee = prompt("Enter the name of the employee: ") as string
  let saleEmployee = parseFloat(prompt("Enter the sales of the employee: ") as string)

  if(saleEmployee >= 1000000 && saleEmployee <= 5000000) {
    console.log("Total for sale for the month: " + saleEmployee + " from the Employee: " + nameEmployee)
  } else {
    console.log("Total for sale for the month: R$" + saleEmployee)
  }
}

function salaryAndNameOfCompanyEmployees() {

  let nameEmployee = prompt("Enter the name of the employee: ") as string
  let departmentEmployee = prompt("Enter the department of the employee: ") as string
  let salaryEmployee = parseFloat(prompt("Enter the salary of the employee: ") as string)

  if(departmentEmployee === 'P' || departmentEmployee === 'E') {
    if (salaryEmployee >= 1000 && salaryEmployee <= 1500) {
      console.log("Employer name: " + nameEmployee + "and your salary: R$" + salaryEmployee)
    } else {
      console.log("No employees with that salary")
    }
  } else {
    console.log("No recorded data from this department")
  }
}

function increaseInEmployeeSalary() {

  let nameEmployee = prompt("Enter the name of the employee: ") as string
  let salaryEmployee = parseFloat(prompt("Enter the salary of the employee: ") as string)

  let newEmployeeSalary : number = 0

  switch(true){
    case salaryEmployee < 500:
      newEmployeeSalary = salaryEmployee + (salaryEmployee * 0.15)
    break
    case salaryEmployee >= 500 && salaryEmployee <= 1000:
      newEmployeeSalary = salaryEmployee + (salaryEmployee * 0.10)
    break
    default:
      newEmployeeSalary = salaryEmployee + (salaryEmployee * 0.05)
    break
  }

  console.log("The new salary of the employee " + nameEmployee + "is: R$" + newEmployeeSalary )
}

function sumOrDifferenceBetweenNumbers() {

  let firstNumber = parseFloat(prompt("Enter the first number: ") as string )
  let secondNumber = parseFloat(prompt("Enter the first number: ") as string )

  let result : number

  firstNumber === secondNumber ? result = firstNumber + secondNumber : result = Math.abs(firstNumber - secondNumber)
  console.log("The result operation: " + result)
}

function bookCategory() {

  let codeBook = prompt("Enter the code book (A/B): ") as string

  switch (true) {
    case codeBook === 'A':
      console.log("The book category is: Fiction")
    break
    case codeBook === 'B':
      console.log("The book category is: Non-Fiction")
    break
    default:
      console.log("Invalid code")
    break
  }
}

function thermometer() {

  let temperature = parseFloat(prompt("Enter the temperature: ") as string)

  switch (true) {
    case temperature < 100:
      console.log("Temperature is too low")
    break
    case temperature > 100 && temperature < 200:
      console.log("Temperature is low")
    break
    case temperature > 200 && temperature < 500:
      console.log("Temperature is normal")
    break
    case temperature > 500 && temperature < 1000:
      console.log("Temperature is high")
    break
    default:
      console.log("Temperature is too high")
    break
  }
}

function paymentControl() {

  let moneyAtTheCashier = parseFloat(prompt("Enter the money at the cashier: ") as string)
  let quantityOfProducts = parseFloat(prompt("Enter the quantity of products: ") as string)
  let priceOfProduct = parseFloat(prompt("Enter the price of the product: ") as string)

  let totalPurchase = quantityOfProducts * priceOfProduct
  let paymentControl = totalPurchase < (moneyAtTheCashier * 0.8) ? true : false

  let totalPayment : number

  switch(true) {
    case paymentControl === true:
      totalPayment = totalPurchase - (totalPurchase * 0.05)
      console.log("The payment method is: at sight", "and the total payment: R$" + totalPayment)
    break
    case paymentControl === false:
      totalPayment = (totalPurchase + (totalPurchase * 0.10)) / 3
      console.log("The payment method is: installments", "and the total payment: R$" + totalPayment)
    break
    default:
      console.log("Invalid payment")
    break
  }
}

function calculateNetSalary() {

  let workedHours = parseFloat(prompt("Enter the worked hours: ") as string)
  let hourlyRate = parseFloat(prompt("Enter the hourly rate: ") as string)

  let grossSalary = workedHours * hourlyRate
  let INSS = grossSalary * 0.11
  let parcialSalary = grossSalary - INSS;
  let IR = 0

  switch (true) {
    case parcialSalary <= 1257.12:
      IR = 0
    break
    case parcialSalary > 1257.12 && parcialSalary <= 2512.08:
      IR = 0.15 * parcialSalary - 188.57
    break
    case parcialSalary > 2512.08:
      IR = 0.275 * parcialSalary - 502.58
    break
  }

  let netSalary = grossSalary - INSS - IR

  console.log("The net salary is: R$" + netSalary.toFixed(2)) 
}

function calculateNetSalaryToRandomINSS() {

  let workedHours = parseFloat(prompt("Enter the worked hours: ") as string)
  let hourlyRate = parseFloat(prompt("Enter the hourly rate: ") as string)

  let grossSalary = workedHours * hourlyRate
  let INSS = 0

  switch (true) {
    case grossSalary < 800.45:
      INSS = grossSalary * 0.0765
    break
    case grossSalary >= 800.46 && grossSalary <= 900.00 :
      INSS = grossSalary * 0.0865
    break
    case grossSalary >= 900.01 && grossSalary <= 1334.07 :
      INSS = grossSalary * 0.09
    break
        case grossSalary >= 1334.07 && grossSalary <= 2668.15 :
      INSS = grossSalary * 0.11
    break
    default:
      INSS = 293.50
    break
  }

  let parcialSalary = grossSalary - INSS;
  let IR = 0

  switch (true) {
    case parcialSalary <= 1257.12:
      IR = 0
    break
    case parcialSalary > 1257.12 && parcialSalary <= 2512.08:
      IR = 0.15 * parcialSalary - 188.57
    break
    case parcialSalary > 2512.08:
      IR = 0.275 * parcialSalary - 502.58
    break
  }

  let netSalary = grossSalary - INSS - IR

  console.log("The net salary is: R$" + netSalary.toFixed(2))   
}

function paymentProductBasedOnLabel() {

  let priceTag = parseFloat(prompt("Enter the price of the product: ") as string )
  let paymentConditionCode = parseFloat(prompt("Enter the code of the payment method: ") as string )

  let totalPayment = 0

  switch (true) {
    case paymentConditionCode === 1:
      totalPayment = priceTag - (priceTag * 0.10)
    break
    case paymentConditionCode === 2:
      totalPayment = priceTag - (priceTag * 0.05)
    break
    case paymentConditionCode === 3:
      totalPayment = priceTag
    break
    case paymentConditionCode === 4:
      totalPayment = (priceTag + (priceTag * 0.10)) / 3
    break
  }

  console.log("The total payment is: R$" + totalPayment.toFixed(2))
}

function productOrigin() {

  let nameProduct = prompt("Enter the name of the product: ") as string
  let priceProduct = parseFloat(prompt("Enter the price of the product: ") as string )
  let codeOrigin = parseFloat(prompt("Enter the code of the origin: ") as string )

  let origin = "Fabricação Própria"

  switch (true) {
    case codeOrigin === 1:
      origin = "Sul"
    break
    case codeOrigin === 2:
      origin = "Sudeste"
    break
    case codeOrigin === 3:
      origin = "Centro-Oeste"
    break
    case codeOrigin === 4:
      origin = "Norte"
    break
    case codeOrigin === 5:
      origin = "Nordeste"
    break
  }
  
  console.log("The origin of the " + nameProduct, "is " + origin, "and product price is R$" + priceProduct)
}

function votingAge() {

  let actualYear = new Date().getFullYear()
  let birthYear = parseFloat(prompt("Enter the year of birth: ") as string )

  let age = actualYear - birthYear

  if (age >= 18) {
    console.log("The age of the person: " + age, "and you can vote")
  } else {
    console.log("The age of the person: " + age, "and you can't vote")
  }
}

function agePerson() {

  let actualDate = new Date().toLocaleDateString('pt-BR')
  const [actualDay, actualMonth, actualYear] = actualDate.split('/').map(Number);
  
  let birthDay = parseFloat(prompt("Enter the birth day: ") as string )
  let birthMonth = parseFloat(prompt("Enter the birth month: ") as string )
  let birthYear = parseFloat(prompt("Enter the birth year: ") as string )

  let age = actualYear - birthYear

  if (actualMonth < birthMonth || (actualMonth === birthMonth && actualDay < birthDay)) {
    age--
  }

  console.log("The age of the person: " + age)
}

function triangleType() {
  
  let lineBase = parseFloat(prompt("Enter the line base value: ") as string )
  let lineLeft = parseFloat(prompt("Enter the line left value: ") as string)
  let lineRight = parseFloat(prompt("Enter the line right value: ") as string)

  switch (true) {
    case lineBase === lineLeft && lineBase === lineRight:
      console.log("The triangle is equilateral")
    break
    case lineBase === lineLeft || lineBase === lineRight || lineLeft === lineRight:
      console.log("The triangle is isosceles")
    break
    case lineBase != lineLeft && lineBase != lineRight:
      console.log("The triangle is scalene")
    break
  }
}

function swimmerCategoryByAge() {

  let age = parseFloat(prompt("Enter the age of the swimmer: ") as string )

  switch (true) {
    case age > 5 && age <= 7:
      console.log("The swimmer category is: Infantil A")
    break
    case age > 8 && age <= 10:
      console.log("The swimmer category is: Infantil B")
    break
    case age > 11 && age <= 13:
      console.log("The swimmer category is: Juvenil A")
    break
    case age > 14 && age <= 17:
      console.log("The swimmer category is: Juvenil B")
    break
    case age >= 18:
      console.log("The swimmer category is: Adulto")
    break
  }
}

function productCategoryByCode() {

  let productCode = parseFloat(prompt("Enter the product code: ") as string )

  switch (true) {
    case productCode === 1:
      console.log("The product category is: Non-Perishable Food")
    break
    case productCode === 2 || productCode === 3 || productCode === 4:
      console.log("The product category is: Perishable Food")
    break
    case productCode === 5 || productCode === 6:
      console.log("The product category is: Dressing Room")
    break
    case productCode === 7:
      console.log("The product category is: Personal Hygiene")
    break
    case productCode === 8 || productCode === 9:
      console.log("The product category is: Cleaning and Household Items")
    break
    default:
      console.log("Invalid product code")
    break
  }
}

function controlTrafficLight() {

  let colorLight = prompt("Enter the color of the light (R/Y/G): ") as string
  let crossingDistance = parseFloat(prompt("Enter the distance of the crossing: ") as string )

  if (colorLight === 'R'){
    console.log("Stop")
  } else if (colorLight === 'Y'){
    if (crossingDistance < 5) {
      console.log("Pass carefully")
    } else {
      console.log("Stop")
    }
  } else {
    console.log("Pass")
  }
}

function parkingPaymentFixValue() {
  
  let entryTime = parseFloat(prompt("Enter the entry time: ") as string)
  let entryMinutes = parseFloat(prompt("Enter the entry minutes: ") as string) 
  let exitTime = parseFloat(prompt("Enter the exit time: ") as string) 
  let exitMinutes = parseFloat(prompt("Enter the exit minutes: ") as string)

  let totalMinutes = (exitTime * 60) + exitMinutes - ((entryTime * 60) + entryMinutes)
  let totalHours = totalMinutes / 60
  let totalValue = 0

  switch (true) {
    case totalMinutes <= 60:
      totalValue = totalHours * 4
    break
    case totalMinutes >= 61:
      totalValue = (totalHours * 4) + 4
    break
  }

  console.log(totalValue.toFixed(0))
}

function parkingPaymentVariableValue() {
  
  let entryTime = parseFloat(prompt("Enter the entry time: ") as string)
  let entryMinutes = parseFloat(prompt("Enter the entry minutes: ") as string) 
  let exitTime = parseFloat(prompt("Enter the exit time: ") as string) 
  let exitMinutes = parseFloat(prompt("Enter the exit minutes: ") as string)

  let totalMinutes = (exitTime * 60) + exitMinutes - ((entryTime * 60) + entryMinutes)
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

  console.log("Parked time was: " + totalHours.toFixed(0) + " horas")
  console.log("Total value: R$" + totalValue.toFixed(0))
}

electricityBill()
calculateIMC()
amountSpentOnFullTank()
moduleAtNumber()
promotionalProductMessage()
totalEmployeeMonthlySales()
salaryAndNameOfCompanyEmployees()
increaseInEmployeeSalary()
sumOrDifferenceBetweenNumbers()
bookCategory()
thermometer()
paymentControl()
calculateNetSalary()
calculateNetSalaryToRandomINSS()
paymentProductBasedOnLabel()
productOrigin()
votingAge()
agePerson()
triangleType()
swimmerCategoryByAge()
productCategoryByCode()
controlTrafficLight()
parkingPaymentFixValue()
parkingPaymentVariableValue()