let testing_obj = {
    a: 'ct',
    b: 'cat',
    c: 'caat',
    d: 'caaat',
    e: 'caaaat',
    f: 'caaaaat',
    g: 'caaaaaat',
    h: 'caaaaaaat',
    i: 'caaaaaaaat',
    j: 'caaaaaaaaat',
    k: 'caaaaaaaaaat',
    l: 'caaaaaaaaaaat',
    m: 'caaaaaaaaaaaat',
    n: 'caaaaaaaaaaaaat',
    o: 'caaaaaaaaaaaaaat',
    p: 'caaaaaaaaaaaaaaat',
    q: 'caaaaaaaaaaaaaaaat',
    r: 'caaaaaaaaaaaaaaaaat',
    s: 'caaaaaaaaaaaaaaaaaat',
}
//zero or more quantifier 

let zero_or_more_regex = /ca*t/i


//one or more quantifier
let one_or_more_regex = /ca+t/i

//zero or one quantifier 

let one_or_zero_regex = /ca?t/i

//custom range quantifier

let custom_exact_range_regex = /ca{5}t/i
let custom_from_range_regex = /ca{2,}t/i
let custom_from_to_range_regex = /ca{2,4}t/i

for(var key in testing_obj){
    // console.log(testing_obj[key], zero_or_more_regex.test(testing_obj[key]))
    // console.log(testing_obj[key], one_or_more_regex.test(testing_obj[key]))
    // console.log(testing_obj[key], one_or_zero_regex.test(testing_obj[key])) 
    // console.log(testing_obj[key] , custom_exact_range_regex.test(testing_obj[key]))
    // console.log(testing_obj[key] , custom_from_range_regex.test(testing_obj[key]))
    // console.log(testing_obj[key] , custom_from_to_range_regex.test(testing_obj[key]))
}