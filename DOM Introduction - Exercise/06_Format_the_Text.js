function formatText() {
    // Get the input text from the textarea
    const inputText = document.getElementById("input").value;

    // Split the text into sentences
    const sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0);

    // Clear previous content in the output div
    document.getElementById("output").innerHTML = "";

    // Iterate over the sentences and create paragraphs with at most 3 sentences each
    for (let i = 0; i < sentences.length; i += 3) {
        const paragraphText = sentences.slice(i, i + 3).join('. ') + '.'; // Combine sentences into a paragraph
        const paragraph = `<p>${paragraphText}</p>`; // Create paragraph element

        // Append the paragraph to the output div
        document.getElementById("output").innerHTML += paragraph;
    }
}

// Attach the formatText function to the click event of the [Format] button
document.getElementById("formatBtn").addEventListener("click", formatText);
