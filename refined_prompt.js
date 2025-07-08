/**
 * Converts a string to camelCase format.
 *
 * This function normalizes the input string by replacing spaces, underscores, and hyphens
 * with spaces, then splits the string into words. It also separates camelCase words into
 * individual words. The resulting words are then transformed such that the first word is
 * in lowercase and each subsequent word is capitalized, and finally concatenated without
 * separators to form a camelCase string.
 *
 * Edge cases:
 * - Returns an empty string if the input is not a string or is empty/whitespace only.
 * - Handles input strings in various cases (snake_case, kebab-case, PascalCase, etc.).
 *
 * @param {string} str - The input string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 */

/**
 * Converts a string to dot.case format.
 *
 * This function normalizes the input string by replacing spaces, underscores, and hyphens
 * with spaces, then splits the string into words. It also separates camelCase words into
 * individual words. The resulting words are then transformed to lowercase and joined
 * together using dots as separators to form a dot.case string.
 *
 * Edge cases:
 * - Returns an empty string if the input is not a string or is empty/whitespace only.
 * - Handles input strings in various cases (snake_case, kebab-case, camelCase, PascalCase, etc.).
 *
 * @param {string} str - The input string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 */
 * Converts a string to camelCase.
 * Handles spaces, underscores, hyphens, and uppercase words.
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
    if (typeof str !== 'string' || !str.trim()) return '';

    // Replace all separators with a space, then split
    const words = str
        .replace(/[_\-\s]+/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase words
        .trim()
        .split(/\s+/);

    if (words.length === 0) return '';

    return words
        .map((word, i) => {
            word = word.toLowerCase();
            if (i === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber
console.log(toCamelCase('alreadyCamelCase'));// alreadyCamelCase
console.log(toCamelCase(''));                // ''
console.log(toCamelCase('   '));             // ''

/**
 * Converts a string to dot.case.
 * Handles spaces, underscores, hyphens, and camelCase.
 * @param {string} str
 * @returns {string}
 */
function toDotCase(str) {
    if (typeof str !== 'string' || !str.trim()) return '';

    // Replace all separators with a space, then split
    const words = str
        .replace(/[_\-\s]+/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase words
        .trim()
        .split(/\s+/);

    if (words.length === 0) return '';

    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
console.log(toDotCase('first name'));      // first.name
console.log(toDotCase('user_id'));         // user.id
console.log(toDotCase('SCREEN_NAME'));     // screen.name
console.log(toDotCase('mobile-number'));   // mobile.number
console.log(toDotCase('alreadyCamelCase'));// already.camel.case
console.log(toDotCase(''));                // ''
console.log(toDotCase('   '));             // ''

