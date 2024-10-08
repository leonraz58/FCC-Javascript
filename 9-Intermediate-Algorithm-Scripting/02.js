// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
//
//     Note: You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))