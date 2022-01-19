


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

// const clients = ["google", "facebook", "kmart"]
// const friends = ["Joe", "Matt", "Michael"]

// const listOfNames = [...clients, ...friends]

// console.log(listOfNames)


// ===================== **** DESTRUCTURING OBJECTS **** =====================


// ****** QUESTION: How do we get access to those properties listed below? ******

// var userInfo =  {
//   name: "Mike",
//   lastName: "santos",
//   age: 29
// }

// ***** THE OLD WAY *****

// var name = userInfo.name

// console.log(name)


// ***** USING DESTRUCTURING OBJECTS *****

// var {name} = userInfo

// console.log(name)


// ***** BEING ABLE TO TARGET EACH PROPERTY *****

// DECLARING EACH PROPERTY AS A VARIABLE BELOW

// var {name, lastName, age} = userInfo

// console.log(age)



// ===================== **** DESTRUCTURING ARRAYS **** =====================

// ***** THE OLD WAY *****

// var cars = ['honda', 'bmw', 'benz']

// var johnyCar = cars[0]
// var joeCar = cars[1]
// var jamesCar = cars[2]

// console.log(jamesCar)


// ***** USING ES6 *****


// var cars = ['honda', 'bmw', 'benz']

// var [johnyCar,rubenCar,alexCar] = cars

// console.log(rubenCar)


// ===================== **** forEACH METHOD **** =====================

// LOOPING THROUGH AN ARRAY

// var users = ["Joe", "Matt", "Barbara"]

// OLD WAY

// for (var i = 0; i < users.length; i++) {
//   console.log(users[i])
// }

// LOOPING THROUGH ARRAY USING ES6 METHOD

// NOTE: WE CAN NAME "USER" WHATEVER WE WANT IT CAN just "i" or whatever

// users.forEach((user) => {
//   console.log(user)
// })


// ===================== **** MAP METHOD **** =====================


// NOTE: THE MAP METHOD IS GOOD WHEN YOU WANT TO TAKE DATA AND PUT IT INTO AN ARRAY

// CODE BELOW IS ARRAY FULL OF OBJECTS

// var users = [
//   {name: "Joe", age: 29},
//   {name: "Matt", age: 30},
//   {name: "Tom", age: 42},

// ]

// var userNames = users.map((user) => {
//   return user.age
// })

// console.log(userNames)

// ===================== **** FILTER METHOD **** =====================
// CODING PHASE FAVORITE

// BELOW WE HAVE AN ARRAY WITH USERS AND WE WANT TO FILTER THINGS OUT

// var users = [
//   {name: "Joe", age: 29},
//   {name: "Matt", age: 15},
//   {name: "Tom", age: 10},

// ]

// LETS SAY WE WANT FILTER BY AN AGE

// var newData = users.filter ((user) => {

//   return user.age ==20
// })

// FILTER BY LETTER

// var newData = users.filter ((user) => {

//   var name = user.name.toLocaleLowerCase()
//   name = name.startsWith('t')
//   return name
// })

// FILTER USERS WHO ARE UNDER 18

// var newData = users.filter ((user) => {


//   return user.age < 18
// })
// console.log(newData)


// ===================== **** FIND **** =====================

// var users = [
//   {name: "Joe", age: 29},
//   {name: "Matt", age: 15},
//   {name: "Tom", age: 10},

// ]

// // FIND USER

// var newData = users.find ((user) => {

//   return user.name == "Tom"
// })
// console.log(newData)


// ===================== **** EVERY AND SOME METHODS **** =====================


var users = [
  {name: "Joe", age: 29},
  {name: "Matt", age: 15},
  {name: "Tom", age: 10},

]

// FIND USER

var newData = users.find ((user) => {
  return user.name == "Tom"
})
console.log(newData)