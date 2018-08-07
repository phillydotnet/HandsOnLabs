// not intended for production string encoding
function encodeString(input) {
    const output = input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return output;
}