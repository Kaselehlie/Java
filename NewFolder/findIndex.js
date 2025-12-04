//.......TASK..............
// Use the `find` method to locate the first creature of the "Water" type and log its name to the console.
// Use the `findIndex` method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.
// Use the `find` method to locate the first creature last seen in "Enchanted Forest".

const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];
//.............springboard solution......................with my comments.................
const firstWaterCreature = mythicalCreatures.find(
  //instructing to locate with 'find' method
  function (creature) {
    return creature.type === "Water"; // creature type
  }
);
console.log(firstWaterCreature.name); // console printed Mermaid
//-------------------------------------------------------------------------------------------------
const griffinIndex = mythicalCreatures.findIndex(
  // 'findIndex' method to find index
  function (creature) {
    return creature.name === "Griffin"; // creature name
  }
);
console.log(griffinIndex); //console printed 3
//.........................................................................................................
const enchantedForestCreature = mythicalCreatures.find(
  // 'find' method
  function (creature) {
    return creature.lastSeen === "Enchanted Forest"; // creature lastSeen
  }
);
console.log(enchantedForestCreature.name); //console printed Unicorn
