module.exports = append;
module.exports.checkdigit = checkdigit;
module.exports.validate = validate;

function append (string) {
    string = maybeString(string);
    return string + checkdigit(string);
}

function validate (string) {
    string = maybeString(string);
    var val = string.substr(0, string.length - 1);

    return append(val) === string;
}

function checkdigit (string) {
    string = maybeString(string);
    const oddMultiplier = (string.length % 2) ? 3 : 1;
    const evenMultiplier = (oddMultiplier === 1) ? 3 : 1;

    const sum = string.split('')
        .map((val, index) => {
            val = parseInt(val, 10);

            if (index % 2) {
                return val * evenMultiplier;
            }
            
            return val * oddMultiplier
        })
        .reduce((acc, val) => acc + val, 0)
    
    return 10 - (sum % 10);
}

/**
 * This function makes sure the input is a string. If it isn't, it converts the input to a string.
 *
 * @param {*} input The desired value that needs to be a string.
 * @returns A string version of the input or the input if it is already a string.
 */
function maybeString(input) {
    if(typeof(input) != "string") {
        return String(input);
    } else {
        return input;
    }
}