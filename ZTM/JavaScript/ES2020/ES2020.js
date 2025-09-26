// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) 
console.log(Number.MIN_SAFE_INTEGER)
// 9007199254740991
// -9007199254740991



// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n

// BigInt and Number cannot be mixed. Convert 3 and 4 to BigInt
3n + 4n + 1n
// 8n   

// remove the n from 1n
3 + 4 + 1
// 8

// or convert 1n to Number
3 + 4 + Number(1n)
// 8



// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }


// using optional chaining
if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
        console.log('fight!')
} else {
        console.log('walk away...')
}



// Exercise 4: What do these each output?
console.log(false ?? 'hellooo')             // false because false is not null or undefined
console.log(null ?? 'hellooo')              // 'hellooo' because null is null
console.log(null || 'hellooo')              // 'hellooo' because null is falsy
console.log((false || null) ?? 'hellooo')   // 'hellooo' because (false || null) is null
console.log(null ?? (false || 'hellooo'))   // 'hellooo' because (false || 'hellooo') is 'hellooo'
