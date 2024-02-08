function solution(command) {
    if (command === 'upvote') {
        this.upvotes++;
    } else if (command === 'downvote') {
        this.downvotes++;
    } else if (command === 'score') {
        let positiveVotes = this.upvotes;
        let negativeVotes = this.downvotes;
        let balance = positiveVotes - negativeVotes;

        // Obfuscate if total votes are more than 50
        if (positiveVotes + negativeVotes > 50) {
            const obfuscationFactor = Math.ceil(Math.max(positiveVotes, negativeVotes) * 0.25);
            positiveVotes += obfuscationFactor;
            negativeVotes += obfuscationFactor;
        }

        // Calculate rating
        let rating = 'new';
        if (positiveVotes > negativeVotes && (positiveVotes / (positiveVotes + negativeVotes) > 2 / 3)) {
            rating = 'hot';
        } else if (positiveVotes + negativeVotes > 100) {
            if (balance >= 0) {
                rating = 'controversial';
            } else {
                rating = 'unpopular';
            }
        }

        return [positiveVotes, negativeVotes, balance, rating];
    }
}

// Example usage:
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score); // [127, 127, 0, 'controversial']

// Downvote 50 times
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}

score = solution.call(post, 'score');
console.log(score); // [139, 189, -50, 'unpopular']
