function smallestOfTwo(input1, input2){
    let result
    if(input1 < input2){
        result = input1
    }else{
        result = input2
    }
    return result
}

function smallestOfThree(input1, input2, input3){
    let small = smallestOfTwo(input1, input2)
    let result
    if(small < input3){
        result = small
    }else{
        result = input3
    }
    return result
}

function largestOfFour(input1, input2, input3, input4){
    let result
    if(input1 > input2 && input1 > input3 && input1 > input4){
        result = input1
    }
    else if(input2 >input1 && input2 >input3 && input2 >input4){
        result = input2
    }
    else if(input3 > input1 && input3 > input2 && input3 >input4){
        result = input3
    }
    else if(input4 > input1 && input4 > input2 && input4 >input3){
        result = input4
    }
    return result 
}

let res = smallestOfTwo(3,9)
console.log(res)

let res1 = smallestOfThree(1,30,2)
console.log(res1)

let res2 = largestOfFour(210,599,108,395)
console.log(res2)

// Loop i funktion

function sumTo(n){
    let sum = 0
    for(i = 0; i <= n; i++){
        sum = sum + i    
    }
    return sum
}

let res4 = sumTo(5)
let res5 = sumTo(8)
console.log(res4)
console.log(res5)

function mulTo(n){
    let mul = 1
    for(i = 1; i <= n; i++){
        mul = mul * i
    }
    return mul
}

let total1 = mulTo(10)
let total2 = mulTo(3)
console.log(total1)
console.log(total2)

// Fibonacci sequence

function fibonacci(input1){
    let cero = 0
    let one = 1
    let sum = 1

    for(i = 2; i <= input1; i++){
        sum = cero + one
        cero = one
        one = sum
    }
    return sum
}

let seq = fibonacci(8)
console.log(seq)