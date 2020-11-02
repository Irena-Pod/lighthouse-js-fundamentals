const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

// Loop through all packingList items
console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

//Example of accessing one specific item in the array (index it)
console.log("The most important items to pack are " + packingList[3]);