module.exports = append;
module.exports.checkdigit = checkdigit;
module.exports.validate = validate;

function append (string) {
    return string + checkdigit(string);
}

function validate (string) {
    var val = string.substr(0, string.length - 1);

    return append(val) === string;
}

function checkdigit (string) {
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