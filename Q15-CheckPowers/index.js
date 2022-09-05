let Ram = {
    name: "Ram",
    power: 2500,
    yuga: "Treta",
};

let Krishna = {
    name: "Krishna",
    power: 2325,
    yuga: "Dwapar",
};

function checkMaxPower(param1, param2) {
    // console.log(param1.name, param2.name)
    if (param1.power > param2.power) {
        return param1.name;
    } else {
        return param2.name;
    }
}

console.log(checkMaxPower(Ram, Krishna), `is the most powerful person.`);
