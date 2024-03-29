// Made thanks to the "combineArrays" method from John D. Aynedjian
// https://stackoverflow.com/questions/8936610/how-can-i-create-every-combination-possible-for-the-contents-of-two-arrays

function getPINs(observed) {
    function combineArrays(array_of_arrays) {
        // Start "odometer" with a 0 for each array in array_of_arrays.
        let odometer = new Array(array_of_arrays.length);
        odometer.fill(0);

        let output = [];

        let newCombination = formCombination(odometer, array_of_arrays);

        output.push(newCombination);

        while (odometer_increment(odometer, array_of_arrays)) {
            newCombination = formCombination(odometer, array_of_arrays);
            output.push(newCombination);
        }

        return output;
    }/* combineArrays() */


    // Translate "odometer" to combinations from array_of_arrays
    function formCombination(odometer, array_of_arrays) {
        // In Imperative Programmingese (i.e., English):
        // let s_output = "";
        // for( let i=0; i < odometer.length; i++ ){
        //    s_output += "" + array_of_arrays[i][odometer[i]]; 
        // }
        // return s_output;

        // In Functional Programmingese (Henny Youngman one-liner):
        return odometer.reduce(
            function (accumulator, odometer_value, odometer_index) {
                return "" + accumulator + array_of_arrays[odometer_index][odometer_value];
            },
            ""
        );
    }/* formCombination() */

    function odometer_increment(odometer, array_of_arrays) {

        // Basically, work you way from the rightmost digit of the "odometer"...
        // if you're able to increment without cycling that digit back to zero,
        // you're all done, otherwise, cycle that digit to zero and go one digit to the
        // left, and begin again until you're able to increment a digit
        // without cycling it...simple, huh...?

        for (let i_odometer_digit = odometer.length - 1; i_odometer_digit >= 0; i_odometer_digit--) {

            let maxee = array_of_arrays[i_odometer_digit].length - 1;

            if (odometer[i_odometer_digit] + 1 <= maxee) {
                // increment, and you're done...
                odometer[i_odometer_digit]++;
                return true;
            }
            else {
                if (i_odometer_digit - 1 < 0) {
                    // No more digits left to increment, end of the line...
                    return false;
                }
                else {
                    // Can't increment this digit, cycle it to zero and continue
                    // the loop to go over to the next digit...
                    odometer[i_odometer_digit] = 0;
                    continue;
                }
            }
        }/* for( let odometer_digit = odometer.length-1; odometer_digit >=0; odometer_digit-- ) */

    }/* odometer_increment() */

    let possibleFromObserved = {
        "1": [1, 2, 4],
        "2": [1, 2, 3, 5],
        "3": [2, 3, 6],
        "4": [1, 4, 5, 7],
        "5": [2, 4, 5, 6, 8],
        "6": [3, 5, 6, 9],
        "7": [4, 7, 8],
        "8": [5, 7, 8, 9, 0],
        "9": [6, 8, 9],
        "0": [8, 0]
    }

    let observedArray = observed.split("")
    let arrPossible = observedArray.map((item) => possibleFromObserved[item])

    let combinedArrays = combineArrays(arrPossible)

    return combinedArrays

}