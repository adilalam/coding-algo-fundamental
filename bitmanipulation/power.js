function power(n) {
    for (let bit = 0; bit < 32; bit++) {
        if((1 << bit) == n) {
            return true
        }        
    }
    return false;
}

console.log(power(16));