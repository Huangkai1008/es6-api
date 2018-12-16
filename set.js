const s = new Set();

[2, 3, 5, 4, 5].forEach(x => s.add(x));

for (let i of s) {
    console.log(i);
}