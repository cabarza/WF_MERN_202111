function rFact(n) {
    if(n > 1) {
        const num = Math.trunc(n);
        return num * rFact(num-1);
    }
    return 1;
}


console.log(rFact(6.5));

console.log(rFact(-3));