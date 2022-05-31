export function add(x, y){
    return x + y;
}

export function subtract(x, y){
    return x - y;
}

export function multiply(x, y){
    return x * y;
}

export function divide(x, y){
    if (y === 0){
        return "You cant divide with 0!";
    } else return x / y;
}

export function capitalize(string){
    let s = string[0].toUpperCase();
    for (let i = 1; i < string.length; i++){
        s += string[i];
    }
    return s;
}

export function reverseString(string){
    let s = "";
    for (let i = string.length-1; i > -1; i--){
        s += string[i];
    }
    return s;
}

export function caesarCipher(string){
    //make it lowercase
    let lowercase = "";
    let s = "";
    for (let i = 0; i < string.length; i++){
        lowercase += string[i].toLowerCase();
    }
    let temp;
    let tempChar;
    for (let i = 0; i < string.length; i++){
        if (lowercase.charCodeAt(i) == 122){
            temp = 97;
        } else 
        if (lowercase.charCodeAt(i) < 97 || lowercase.charCodeAt(i) > 122){
            temp = lowercase.charCodeAt(i);
        } else
        temp = lowercase.charCodeAt(i)+1;
        s += String.fromCharCode(temp);
    }
    return s;
}

export function analyzeArray(arr){
    let asd  = {average, min, max, length};
    
    //average
    let average = 0;
    let temp = 0;
    for (let i = 0; i < arr.length; i++){
        temp += arr[i];
    }
    average = temp / arr.length;

    //min
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }

    //max
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }

    //length
    let length = arr.length;

    asd.average = average;
    asd.min = min;
    asd.max = max;
    asd.length = length;

    return asd;
}