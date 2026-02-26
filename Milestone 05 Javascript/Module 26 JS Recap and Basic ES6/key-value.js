const king = { name: 'nill', age: 55, kingdom: 'Pride Lands' };

const keys = Object.keys(king);
console.log(keys);

// Delete Kora jono obj

delete king.name;
Object.freeze(king); // freeze korla kono modifi kora jabe na kono kico delete kora jabe na add kora jabe na

// seal kora modifi kora jabe kingo {delete and add kora jabe na }
Object.seal(king);
