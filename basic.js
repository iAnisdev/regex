
let customString = 'my name is mark'
let customString2 = 'my name is mat'
let customString3= 'my name is dom'
let regex = new RegExp(/mark/)
let orRegex = new RegExp(/mark|dom/)


console.log(regex.test(customString))
console.log(regex.test(customString2))
console.log(orRegex.test(customString))
console.log(orRegex.test(customString2))
console.log(orRegex.test(customString3))