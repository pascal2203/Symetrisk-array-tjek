class Array {
    constructor(array) {
        this.array = array;
    }

    reverse() {
        let result = [];
        for (let i = this.array.length - 1; i >= 0; i--) {
            result.push(this.array[i]);
            console.log(result);

        }
        return result;
    }

}

let array = new Array([1, 2, 4, 3])

console.log(array.reverse())