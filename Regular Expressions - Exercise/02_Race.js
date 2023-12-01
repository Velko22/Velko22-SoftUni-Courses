function processRaceInfo(input) {
    const participants = input.shift().split(', ');
    const racers = {};

    for (let line of input) {
        if (line === 'end of race') {
            break;
        }

        const regex = /[A-Za-z]+|[0-9]+/g;
        const match = line.match(regex);

        const name = match.filter((el) => isNaN(el)).join('');
        const distance = match.filter((el) => !isNaN(el)).map(Number).reduce((a, b) => a + b, 0);

        if (participants.includes(name)) {
            if (!racers.hasOwnProperty(name)) {
                racers[name] = 0;
            }

            racers[name] += distance;
        }
    }

    const sortedRacers = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

    console.log(`1st place: ${sortedRacers[0]}`);
    console.log(`2nd place: ${sortedRacers[1]}`);
    console.log(`3rd place: ${sortedRacers[2]}`);
}

// Example usage:
processRaceInfo([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
// Output:
// 1st place: George
// 2nd place: Peter
// 3rd place: Tom
