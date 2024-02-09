const bubbleSort = function(arr) {
    const n = arr.length;
    for(let i = 1; i < n; i++) {
        for(let j = 0; j < n - i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    let output = "";
    for(let k = 0; k < n; k++) {
        output += arr[k] + " ";
    }

    console.log(output);
}

let arr = [5,3,1,7,8,6]
bubbleSort(arr);

