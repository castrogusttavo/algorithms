// Exercícios de Estrutura Sequencial

import promptSync from 'prompt-sync';
const prompt = promptSync();

// ===
function calculateRoomArea(): void {

  let L = parseFloat(prompt("Enter the length of the wall L:") as string) 
  let C = parseFloat(prompt("Enter the length of the wall C:") as string)

  let Area : number = L * C

  console.log("The area of the room this: " + Area)
}

function calculateRoomAreaAndPerimeter() {

  let L = parseFloat(prompt("Enter the length of the wall L:") as string) 
  let C = parseFloat(prompt("Enter the length of the wall C:") as string)

  let Area : number = L * C
  let Perimeter : number = 0

  if(C === 0) {
    Perimeter = 4 * L
  } else if (L === 0) { 
    Perimeter = 4 * C
  } else {
    Perimeter = 2 * (L + C)
  }

  console.log("The area of the room this: " + Area, "and", "The perimeter of the room this: " + Perimeter)
}

function fivePercentDiscountPrice(){

  let price = parseFloat(prompt("Enter the price of the product: ") as string)

  let discountPrice : number = price * 0.95

  console.log("The price of the product with 5% discount: " + Math.round(discountPrice))
}

function paymentPriceProduct(){

  let price = parseFloat(prompt("Enter the price of the product: ") as string)
  let discount = parseFloat(prompt("Enter the discount of the product: ") as string)

  let paymentPrice = price - (price * discount / 100)

  console.log("The payment price of the product: " + Math.round(paymentPrice))
}

function amountDiscount(){
  let price = parseFloat(prompt("Enter the price of the product: ") as string)
  let priceDiscount = parseFloat(prompt("Enter the price discount of the product: ") as string)

  let discount = (price - priceDiscount)

  console.log("The amount of discount: " + Math.round(discount) + "%")
}

function personAge() {

  let actualYear = new Date().getFullYear()
  let birthYear = parseFloat(prompt("Enter the year of birth: ") as string)

  let age = actualYear - birthYear

  console.log("The age of the person: " + age)
}

function volumeSphere() {

  let radius = parseFloat(prompt("Enter the radius of sphere: ") as string)

  let volume = (4/3) * Math.PI * Math.pow(radius, 3)

  console.log("The volume of the sphere: " + Math.round(volume))
}

function parkingPaymentValue() {

  let entryTime = parseFloat(prompt("Enter the entry time: ") as string)
  let entryMinutes = parseFloat(prompt("Enter the entry minutes: ") as string) 
  let exitTime = parseFloat(prompt("Enter the exit time: ") as string) 
  let exitMinutes = parseFloat(prompt("Enter the exit minutes: ") as string) 

  let totalMinutes = (exitTime * 60) + exitMinutes - ((entryTime * 60) + entryMinutes)
  let totalHours = totalMinutes / 60
  let totalValue = totalHours * 4

  console.log("The parking payment value: R$ " + totalValue)
}

function moneySafeInBank() {
  
  let dollarSafe = parseFloat(prompt("Enter the amount of dollars: ") as string)
  let dollarExchangeRate = parseFloat(prompt("Enter the exchange rate of dollar: ") as string )

  let realSafe = dollarSafe * dollarExchangeRate

  console.log("The amount of real: R$ " + realSafe)
}

function alterValue() {

  let a = parseFloat(prompt("Enter the number: ") as string)
  let b = parseFloat(prompt("Enter the other number: ") as string)

  let newA = b
  let newB = a

  console.log("The new value of A: " + newA, "and", "The new value of B: " + newB)
}

function buildWall() {

  let brickLength = parseFloat(prompt("Enter the length of the brick: ") as string)
  let brickWidth = parseFloat(prompt("Enter the width of the brick: ") as string)

  let wallLength = parseFloat(prompt("Enter the length of the wall: ") as string)
  let wallWidth = parseFloat(prompt("Enter the width of the wall: ") as string)

  let brickArea = brickLength * brickWidth
  let wallArea = wallLength * wallWidth

  let totalBricks = wallArea / brickArea

  console.log("The total of bricks: " + totalBricks)
}

calculateRoomArea()
calculateRoomAreaAndPerimeter()
fivePercentDiscountPrice()
paymentPriceProduct()
amountDiscount()
personAge()
volumeSphere()
parkingPaymentValue()
moneySafeInBank()
alterValue()
buildWall()