function telephoneCheck(str) {
    // Regular expression for validating US phone numbers
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-?\s]?)\d{4}$/;

    // Test the string against the regular expression
    return phoneRegex.test(str);
}
