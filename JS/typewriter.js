// Define a function called typeWriter that takes an element (el) as an argument
function typeWriter(el) {
    // Split the text content of the element into an array of individual characters
    const textArray = el.innerHTML.split('');
    // Clear the element's content
    el.innerHTML = '';

    // Use forEach to iterate through the characters in the array
    textArray.forEach((letter, i) => {
        // Set a timeout for adding each letter
        setTimeout(() => {
            // Append the current letter to the element's content
            el.innerHTML += letter;
        }, 90 * i); // Delay each letter based on its position in the array
    });

    // Set an interval to repeatedly call the typeWriter function
    setInterval(() => typeWriter(el), 8000); // Restart the typewriter effect after 8 seconds
}

// Call the typeWriter function with the element you want to apply the effect to
typeWriter(elementEl);