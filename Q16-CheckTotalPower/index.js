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

function calculateCharLength(name) {
    return name.length
}

function totalPower1(name) {
    return (calculateCharLength(name.name)*35 + name.power)
}

function checkTotalMaxPower(param1, param2) {
    if (totalPower1(param1) > totalPower1(param2)) {
        return `The most powerful person is Ram with total power: ${totalPower1(Ram)}`
    } else if (totalPower1(param2) > totalPower1(param1)) {
        return `The most powerful person is Ram with total power: ${totalPower1(Krishna)}`
    }
}

console.log(`Total power of Ram is: ` + totalPower1(Ram) + ` AND Total power of Krishna is:` + totalPower1(Krishna))

console.log(checkTotalMaxPower(Ram, Krishna))