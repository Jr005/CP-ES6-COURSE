


// =================== Declaring Variables with Var Let Const ===================

// VAR = VARIABLE CAN BE CHANGED

// LET - PRETTY MUCH SAME THING AS VAR WHICH MEANS IT CAN BE CHANGED

// CONST - CAN NOT BE CHANGED BUT YOU CAN ADD TO ADD IT OR PUSH DATA INTO IT


// Old School Way

// Var name = "Joe"

// ***** Let ********

// Note: Let is pretty much same thing as Var. You can Change / re-assign the variable

// ============= CODE =============

// let name = "Johny"

// name = "dave"

// console.log(name)

// ============= CODE =============

// ***** Const ********

// NOTE: YOU CAN NOT CHANGE THE VARIABLE WHEN USING CONST


// ============= CODE START =============

// const name2 = "alex"

// Example you can not use code below
// name2 = "mike"

// console.log(name2)

// ============= CODE END =============

// NOTE: YOU CANT CHANGE THE CONST VARIABLE BUT YOU CAN PUSH DATA INTO 

// EXAMPLE: Cosnt Array

// ============= CODE START =============

// const names = ["Joe", "James", "Johnny"];

// names.push("Stephanie")

// console.log(names)

// ============= CODE END =============

// =================== ARROW FUNCTIONS ===================

// OLD WAY TO SETUP FUNCTION

// ============= CODE START =============


// function userName (name) {

//   return name
// }

// console.log(userName("Joe"))

// ============= CODE END =============


// ARROW FUNCTION CODE
// NOTE: Anything afte the arrow your trying to return it. So no need for curly braces and return

// ============= CODE START =============

// EXAMPLE 1

//  var userName = (name) => {
//    return name
//  }

//  console.log(userName("Ruben"))


// EXAMPLE 2

//  var userName = name => name
 
//  console.log(userName("Ruben"))


//  EXAMPLE 3 - Arrow Function with Multiple Arguments

// Note: Anything with more than 1 argument you want put paranthesis
// When there is only 1 argument you can take off the paranthesis
// if there is no argument you have to have paranthesis

//  var userName = name, lastName => name + lastName
 
//  console.log(userName("Ruben", "Santos"))

// ============= CODE END =============


// ===================== **** TEMPLATE LITERALS / STRINGS **** =====================

// THE OLD WAY

// var name = "Joe"
// var lastName = "Santos"

// console.log("the users name: " + name + " " + lastName)



// THE NEW WAY

// var name = "Ruben"
// var lastName = "Esquivel"

// console.log(`the users name:  ${name} ${lastName}`)

// EXAMPLE 2 WITH ARROW FUNCTION

// const store = (name, address, state, zipcode) => {

//   return `${name} is located at ${address} in ${state} with zipcode of ${zipcode} `
// }

// store("Gucci", "52 Park Avenue", "New York", "11101")


// ===================== **** DEFAULT PARAMS **** =====================

// Note: you use this feature for when someone forgets to put in a Parameter so you can set a default
// the number 3000 is used for the empty paramater 


// const dealerShip = (name, totalCars = 3000) => {
//   return `${name} has a minimum of ${totalCars} available cars at all times`
// }

// dealerShip("Empire")


// ===================== **** REST OPERATOR **** =====================

// EXAMPLE WITHOUT REST OPERATOR - AN ARRAY WITH NAMES
// NOTICE HOW THE LAST TWO NAMES IN THE ARRAY IS NOT SHOWING IN THE CONSOLE LOG UNLESS YOU MANUALLY ADD THEM


// const userNames = function(a, b, c, d, e, f,) {

// const names = [a,b,c,d,e,f]

// console.log(names)
// }

// userNames("Joe", "Johnny", "Fred", "Stephanie", "Matt", "Briant", "Diaz", "Tom")


// EXAMPLE HOW TO USE THE REST OPERATOR
// YOU CAN ADD ALL THE NAMES YOU WANT IN THE ARRAY AND ALL NAMES WILL STILL SHOW IN THE CONSOLE 

// const userNames = function(...names) {

// console.log(names)
// }

// userNames("Joe", "Johnny", "Fred", "Stephanie", "Matt", "Briant", "Diaz", "Tom", "SHAQ")


// ===================== **** SPREAD OPERATOR **** =====================

// SPREAD OPERATOR VERY SIMILAR TO THE REST OPERATOR. YOU CAN COMBINE BOTH ARRAYS TOGETHER

const clients = ["google", "facebook", "kmart"]
const friends = ["Joe", "Matt", "Michael"]

const listOfNames = [...clients, ...friends]

console.log(listOfNames)
