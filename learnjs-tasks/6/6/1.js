function makeCounter() {

    function counter() {
        return counter.count++;
    };

    counter.count = 0;
    counter.set = function(value){
        this.count = value
    }
    counter.decrease = function(){
        --this.count
    }

    return counter;
}

let counter = makeCounter();