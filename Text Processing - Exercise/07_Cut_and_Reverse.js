function reverseAndPrintHalves(input) {
    const length = input.length;
    const halfIndex = Math.floor(length / 2);

    // Split the string into two halves and reverse each half
    const firstHalf = input.slice(0, halfIndex).split('').reverse().join('');
    const secondHalf = input.slice(halfIndex).split('').reverse().join('');

    // Print each half on a separate line
    console.log(firstHalf);
    console.log(secondHalf);
}

// Example usage:
const example1 = 'tluciffiDsIsihTgnizamAoSsIsihT';
reverseAndPrintHalves(example1);
// Output:
// ThisIsDifficult
// ThisIsSoAmazing

const example2 = 'sihToDtnaCuoYteBIboJsihTtAdooGoSmI';
reverseAndPrintHalves(example2);
// Output:
// IBetYouCantDoThis
// ImSoGoodAtThisJob
