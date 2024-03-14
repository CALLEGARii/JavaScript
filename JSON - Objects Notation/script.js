//JSON-Object Notation//

const dog = {

    name: "shark",
    age: 10,
}

const json = JSON.stringify(dog)
console.log(dog) 

const obj = JSON.parse(json)
console.log(obj)
///////////////////////////

const jsonFail = '{"name,":"hello","surname":"Word"}'

const obj2 = JSON.parse(jsonFail)
console.log(obj2)




