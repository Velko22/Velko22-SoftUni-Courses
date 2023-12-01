function splitPascalCase(input) {
    const words = input.replace(/([a-z])([A-Z])/g, '$1 $2').split(/\s+/);
    console.log(words.join(', '));
}

// Example usage:.
const example1 = 'SplitMeIfYouCanHaHaYouCantOrYouCan';
splitPascalCase(example1);
// Output: Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can

const example2 = 'HoldTheDoor';
splitPascalCase(example2);
// Output: Hold, The, Door

const example3 = 'ThisIsSoAnnoyingToDo';
splitPascalCase(example3);
// Output: This, Is, So, Annoying, To, Do
