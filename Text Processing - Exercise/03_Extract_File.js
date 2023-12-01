function extractFileNameAndExtension(filePath) {
    // Use the '\\' character to split the file path
    const pathComponents = filePath.split('\\');

    // Get the last component of the path, which is the file name with extension
    const fileNameWithExtension = pathComponents[pathComponents.length - 1];

    // Use the lastIndexOf method to find the last occurrence of '.' in the file name
    const lastDotIndex = fileNameWithExtension.lastIndexOf('.');

    // Extract the file name and extension based on the last dot index
    const fileName = fileNameWithExtension.slice(0, lastDotIndex);
    const extension = fileNameWithExtension.slice(lastDotIndex + 1);

    // Output the results
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

// Example usage:
const example1 = 'C:\\Internal\\training-internal\\Template.pptx';
extractFileNameAndExtension(example1);
// Output:
// File name: Template
// File extension: pptx

const example2 = 'C:\\Projects\\Data-Structures\\LinkedList.cs';
extractFileNameAndExtension(example2);
// Output:
// File name: LinkedList
// File extension: cs
