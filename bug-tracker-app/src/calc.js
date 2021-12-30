export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

/* The above functions as assembled in a 'module' object and the module object is exported */

let utils = {
    isOdd : x => x % 2 === 1,
    isEven : x => x % 2 === 0
};

export default utils;