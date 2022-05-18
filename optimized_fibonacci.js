
var yourself = {
    fibonacci : function(n) {
        if (n <= 1) {
           return n;
        }
        return this.fibonacci_accumulator(n, 1, 0);

    },
    fibonacci_accumulator : function(n, prev, cumulative){
        if(n < 1){
            return cumulative;
        }
        return this.fibonacci_accumulator(n-1, cumulative, cumulative + prev);
    }
};


