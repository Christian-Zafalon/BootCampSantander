type input = string | number;

function somarTipos(input1: input, input2: input) {
    if (Number(input1) && Number(input2)) {
        return Number(input1) + Number(input2);
    } else {
        return input1.toString() + input2.toString();
    }
}


console.log(somarTipos(1, 5));
console.log(somarTipos('oi', 5));