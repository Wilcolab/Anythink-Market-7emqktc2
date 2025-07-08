function toKebabCase(str) {
    return str
        .match(/[A-Za-z0-9]+/g) // Identify words (alphanumeric)
        .map(word => word.toLowerCase()) // Lowercase each word
        .join('-'); // Join with hyphens
}