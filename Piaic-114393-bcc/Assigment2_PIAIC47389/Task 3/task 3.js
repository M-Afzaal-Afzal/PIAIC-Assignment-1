// var a = 4;
// if (++a === 5) {
// alert("given condition for variable a is true");
// }
// alert msg is displayed that ("given condition for variable a is true")


// b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// alert msg is not displayed



// c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// output ("condition 2 is true") and ("condition 4 is true")



// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// output ("The cost equals")



// e
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
// output ('true')

// f
// if("car" < "cat"){

//     alert("car is smaller than cat");
//     }
// output ("car is smaller than cat")

const obj = {
    name: 'M Afzaal Afzal',
    age: 20,
    learning: {
        no1: 'programming',
        no2: 'DSA'
    }
}

const { name: newName, age, learning: { no1, no2 } } = obj;

console.log(newName, age);