
function mergeSort(arr1, arr2) {
    let result = [];
    while (arr1.lenght && arr2.length) {
        if (arr1[0] < arr2[0])
function reconcileHelper(arr1, arr2) {
    let numInArrA = [];
    let numInArrB = [];

    numInArrA = arr1.filter(e => !arr2.includes(e));
    numInArrB = arr2.filter(e => !arr1.includes(e));


}

//reconcileHelper([1, 3, 5, 9], [2, 4, 5, 6, 9]);
reconcileHelper([3, 1, 9, 5], [4, 2, 9, 6, 5]);
