let kop = [
    [3, 4, 6],
    [1, 5, 2],
    [20, 25, 11]
];

for (let line of kop) {
    for (let value in line) {
        if (line[value] > 7) {
            console.log(line);
        }
    }
}