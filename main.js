const arr = [
    {'a': 1},
    {'b': 2},
    {'c':
        {'d': 3, 'e': 4}
    }
];

function compressArrayAPI(userArray) {
    
    function compressObj(someObj) {
        // for (let elem of myArray) {
        //         if (typeof item === 'object') {
        //             compArr(item)
        //     }
        // }
        return JSON.stringify(someObj)
    };

    result = [];

    return userArray.map((elem) => compressObj(elem));
}

alert(compressArrayAPI(arr))
