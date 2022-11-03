// Ternary with context

const computers = [
  {id: "computer 1", time: 42, energy: 600},
  {id: "computer 2", time: 57, energy: 480},
];

const avg = computers.reduce((a, b) => {
  return (a + b.energy) / computers.length;
}, 0);

console.log(avg);

for (i = 0; i < computers.length; i++) {
  const power = (computers[i].energyUsed = avg * computers[i].time);
}

const result =
  computers[0].energyUsed > computers[1].energyUsed
    ? computers[0]
    : computers[1];

console.log(computers);
console.log(result.id);

//testing mirroring git repository from github to gitlab
