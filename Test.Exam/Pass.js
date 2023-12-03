function isValidPassword(input) {
    let n = Number(input[0]);
    let results = [];

    for (let i = 1; i <= n; i++) {
        let password = input[i];

        let match = password.match(/^(.+?)>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1$/);

        if (match) {
            let encryptedPassword = match[2] + match[3] + match[4] + match[5];
            results.push(`Password: ${encryptedPassword}`);
        } else {
            results.push("Try another password!");
        }
    }

    return results.join('\n');
}

// Example usage
const input1 = ["3", "##>00|no|NO|!!!?<###", "##>123|yes|YES|!!!<##", "$$<111|noo|NOPE|<<>$$"];
const input2 = ["5", "aa>111|mqu|BAU|mqu<aa", "()>111!aaa!AAA!^&*<()", "o>088|abc|AAA|***<o", "asd>asd|asd|ASD|asd<asd", "*>088|zzzz|ZzZ|123<*"];

console.log(isValidPassword(input1));
console.log(isValidPassword(input2));