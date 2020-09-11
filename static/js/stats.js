class BoxMullerRandom {
    sigma;
    mu;

    constructor(mu = 0, sigma = 1) {
        this.mu = mu;
        this.sigma = sigma;
    }

    nextDouble() {
        var z = this.getZ();
        while (isNaN(z))
            z = this.getZ();
        return z * this.sigma + this.mu;
    }

    getZ() {
        var u1 = Math.random();
        var u2 = Math.random();
        var z = Math.sqrt(-2.0 * Math.log(u1) * Math.cos(2.0 * Math.PI * u2));
        return z;
    }

    next() {
        var d = this.nextDouble();
        var i = Math.floor(d);
        return i;
    }
}

function getRandom(l){
    return l[Math.floor(Math.random()*l.length)];
}