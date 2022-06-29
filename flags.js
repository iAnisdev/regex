let customString = 'hey there how are you doing'
let customStringCasing = "HEY THERE HOW ARE YOU DOING"
let multipleHello = "hi, Hello , HI , hello , HELLO"
let regexCasing = new RegExp(/hey/i)
let regexGlobal = new RegExp(/hello/g)
let regexGlobalCasing = new RegExp(/hi/gi)



console.log(regexCasing.test(customString))
console.log(regexCasing.test(customStringCasing))
console.log(customString.match(regexCasing))
console.log(multipleHello.match(regexGlobal))
console.log(multipleHello.match(regexGlobalCasing))