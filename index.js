
let result = document.getElementById('result')

function minNumber(...min) {
    let i = min;
    let j = min.length;
    minimum = i[j - 1];
    while (j--){
        if(i[j] < minimum){
            minimum= i[j];
        }
    }
            return minimum;
}

result.innerText = minNumber(19,9,26,14,27,13,31,24,2)