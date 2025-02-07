const sum = (a,b) => {
    const result = a + b 
    return result
}

console.log(sum(4,5))


const obj = {
   
}
obj.calculate1 = sum

console.log(obj.calculate1(4,5))

obj.calculate2 = (cb) => {
    const res = cb(4,5)
    return res
    
}

const result1 = obj.calculate2((a,b) => {
    const szam3 = a + b
    return szam3
})

const result2 = obj.calculate2((a,b) => {
    const szam3 = a - b
    return szam3
})

obj.calculate3= (a,b,cb) => {
    const szam3 = cb(a,b)
    return szam3
}

const calculate3 = obj.calculate3(5,7,(a,b) => {
    
    return a+b
})




console.log(result1)

console.log(result2)

console.log(calculate3)

const thefunction = () => {
    const sum10 = 10
    const finalres = obj.calculate3(5,7,(a,b) => {
        return a*sum10 + b
    })
    console.log(finalres)
}

thefunction()