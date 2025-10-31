// SpOoKy~CaSe
// Given a string representing a variable name, convert it to "spooky case" using the following constraints:

// Replace all underscores (_), and hyphens (-) with a tilde (~).
// Capitalize the first letter of the string, and every other letter after that, ignore the tilde character when counting.
// For example, given hello_world, return HeLlO~wOrLd.


function spookify(boo) {
    // result string to write to
    let result = '';
    // keeps track of whether to capitalize the next letter
    let capitalize = true;

    for (let i = 0; i < boo.length; i++) {
        let char = boo[i];
        // check for underscores or hyphens to replace with tilde
        if (char === '_' || char === '-') {
            result += '~';
        } else {
            // capitalize or lowercase based on the flag
            if (capitalize) {
                result += char.toUpperCase();
            } else {
                result += char.toLowerCase();
            }
            // toggle the capitalize flag
            capitalize = !capitalize;
        }
    }
    return result;
}


// console.log(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"))
// console.log(spookify("c_a-n_d-y_-b-o_w_l"))
// console.log(spookify("TRICK-or-TREAT"))
