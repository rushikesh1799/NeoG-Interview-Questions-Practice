let Ram = {
    name: "Ram",
    power: 2500,
    yuga: "Treta",
    age: 25
};

let Krishna = {
    name: "Krishna",
    power: 2325,
    yuga: "Dwapar",
    age: 31
};

function checkMaxAge(param1, param2) {
    // console.log(param1.name, param2.name)
    if (param1.age > param2.age) {
        return `'${param1.name}' is the older person.`;
    } else if (param2.age > param1.age) {
        return `'${param2.name}' is the older person.`;
    } else {
        return `Both the persons '${param1.name}' and '${param2.name}' are of same age.`
    }
}

console.log(checkMaxAge(Ram, Krishna));