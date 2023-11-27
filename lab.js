//Part 1

const pi = 3.1415;
const radius = 5;
const area = pi * radius * radius;
const plant = .8;

const startSpace = plant * 20;

console.log("The total area of the plant space is " + area + " sqare meters.");
console.log("The amount of space the starting plants are taking up is " + startSpace + " sqare meters.");

let numOfWeeks = 8;
const weekOne = startSpace * 2 * 1;
const weekTwo = startSpace * 2 ** (2-1);
const weekThree = startSpace * 2 ** (3-1);
let plantGrowth = startSpace * 2**(numOfWeeks-1);


console.log("The plant growth after " + numOfWeeks + " weeks is " + plantGrowth + " square meters.");
const prune = area * .8;
const monitored = area * .5;

if (plantGrowth > prune) {
    console.log("Time to prune!");
    } else if (plantGrowth > monitored) {
        console.log("The plants are growing at an acceptable rate");
    } else {
        console.log("There is room to plant more plants!");
    }

//Part 2

const newPlantGrowth = (100 * plant) * 2 ** (9-1);
console.log("If scientists started with 100 plants and did not prune them for 10 weeks, the plants would take up " + newPlantGrowth + " square meters.");

const expandedRadius = Math.sqrt(newPlantGrowth/pi);
console.log("The radius of the expanded garden would be " + expandedRadius + " meters.") 




try {
	if (area >= plantGrowth) {
		debugger;
	} else if (area < plantGrowth) {
		throw "Error - The plants will not fit in this space";
	}

} catch (err) {
	console.log(err);
}