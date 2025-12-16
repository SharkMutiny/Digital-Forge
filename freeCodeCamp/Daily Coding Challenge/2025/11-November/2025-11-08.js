// Daily Coding Challenge: November 8, 2025
// Character Limit
// In this challenge, you are given a string and need to determine if it fits in a social media post. Return the following strings based on the rules given:

// "short post" if it fits within a 40-character limit.
// "long post" if it's greater than 40 characters and fits within an 80-character limit.
// "invalid post" if it's too long to fit within either limit.

function canPost(message) {
    // Get the length of the message
    const length = message.length;

    // Determine the category based on length
    if (length <= 40) {
        return "short post";
    } else if (length <= 80) {
        return "long post";
    } else {
        return "invalid post";
    }
}