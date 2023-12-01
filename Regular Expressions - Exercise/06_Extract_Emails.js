function extractEmails(text) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const emails = text.match(emailRegex) || [];

    for (const email of emails) {
        console.log(email);
    }
}

// Example usage:
extractEmails("Please contact us at: support@github.com. Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information. Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.");
// Output:
// support@github.com
// s.miller@mit.edu
// j.hopking@york.ac.uk
// steve.parker@softuni.de
