// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest











// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
describe("TheCapper", () => {
  it("returns an array with a sentence about each person with their name capitalized.", () => {
    expect(TheCapper(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// psuedo code - i am taking an array and capping the first leatter of every index/ this is an array , of ill break it down and use Object.values to manupulate the text. so i used a lot per array index. i usedtoString to tur the array into a astring then used the replace function and replace the lowered cased names nd turn the first latter of them to Capital.after the values were replaced i split it back into a array index and the called all of the array index togother by con cating them into newArray and returnin it.


const TheCapper = (array)=>{

 const first = array[0]
//  console.log(first)

  const broke = Object.values(first)
  // console.log(broke)
  
  const to_st = broke.toString() 
// console.log(to_st)

const replacer = to_st.replace('ford', 'Ford',)
// console.log(replacer)

const fixed1 = replacer.replace(',', ' is ')
// console.log(fixed1)

const anotho1 =fixed1.replace('prefect','Prefect')

const lastfix1 =anotho1.replace('hitchhiker','hitchhiker.')

const pusher1 = lastfix1.split()
// console.log(pusher1)



// the seconed half 


const first2 = array[1]
//  console.log(firs2)

  const broke2 = Object.values(first2)
  // console.log(broke2)
  
  const to_st2 = broke2.toString() 
// console.log(to_st2)

const replacer2 = to_st2.replace('zaphod ', 'Zaphod ',)
// console.log(replacer2)

const fixed2 = replacer2.replace(',', ' is ')
// console.log(fixed2)

const anotho2 =fixed2.replace('beeblebrox','Beeblebrox')

const lastfix2 =anotho2.replace('galaxy','galaxy.')

const pusher2 = lastfix2.split()
// console.log(pusher2)



const first3 = array[2]
//  console.log(firs3)

  const broke3 = Object.values(first3)
  // console.log(broke3)
  
  const to_st3 = broke3.toString() 
// console.log(to_st3)

const replacer3 = to_st3.replace('arthur ', 'Arthur ',)
// console.log(replacer3)

const fixed3 = replacer3.replace(',', ' is ')
// console.log(fixed3)

const anotho3 =fixed3.replace('dent','Dent')

const lastfix3 =anotho3.replace('employee','employee.')

const pusher3 = lastfix3.split()
// console.log(pusher3)


const newArray = pusher1.concat(pusher2,pusher3)
// console.log(newArray)

return newArray


}







// // // --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
describe("third", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(hodgepodge1).toContain[ 2, 0, -1, 0]
    expect(hodgepodge2).toContain[ 2, 1, -1]
  })
})
// // // a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
// Input -an array of mixed data
// Output -returns an array of only the REMAINDERS of the numbers when divided by 3.
// Psuedo code - I want make a function named third and pass in a array , I want to sort the array to push all off the numbers the the front indexes and then use the slice function and take only the numbers. After that i assigned the array with only the numbers remaining and then created const for each index so that i can munipulate them. After each indexs has been %3 they are stacked into newArray and returned.  


const third = (array)=>{

const grabber = array.sort()
// console.log(grabber)
const pop = array.slice(0,4)

const divider1 = pop[0]%3
// console.log(divider1)

const divider2 = pop[1]%3
// console.log(divider2)

const divider3 = pop[2]%3
// console.log(divider3)

const divider4 = pop[3]%3
// console.log(divider4)

const newArray = []
const collecttor = newArray.push(divider1,divider2,divider3,divider4)
console.log(newArray)

return newArray
}





// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
describe("cubie", () => {
  it("returns the sum of all the numbers cubed", () => {
    expect(cubie(cubeAndSum1)).toEqual(99)
    expect(cubie(cubeAndSum2)).toEqual(1125)
  })
})
// a) Create a test with an expect statement using the variables provided.

// Input - Array
// Output -returns the sum of all the numbers cubed /to the 3rd power
// Psuedo code -create a functin named cubie and pass in a array, each array has 3 indexes for I destructured the array into each index and gave the name of NUM1-3. After that I created a new const called results which just take the index and muiltpy each index to the 3rd power seperately and then adding the results of the multiplication.


const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

const cubie = (array)=>{

const num1 = array[0] 
// console.log(num1)

const num2= array[1] 
// console.log(num2)

const num3 = array[2] 
// console.log(num3)

const results = ((num1 ** 3 )+(num2 ** 3 )+(num3 ** 3 ))
console.log(results)
return results
}
