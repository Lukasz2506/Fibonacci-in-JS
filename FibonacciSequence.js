// Solution no 1:

function fibonSeq(number) {
    var sequence = [];
    var a = 0;
    var b = 1;
    for (var i=1; i <= number; i++) {
        if (sequence.length === 0) {
            sequence.push(a);
        } else if (sequence.length === 1) {
            sequence.push(b);
        } else {
            sequence.push(sequence[sequence.length-2] + sequence[sequence.length-1])
        }
    }
    return sequence;
}

// Solution no 2 

function fibonacciGenerator(number) {
    var a = 0;
    var b = 1;
    var c = 0;
    var seq = [];
    while (seq.length != number) {
        seq.push(a);
        c = a + b;
        a = b;
        b = c;
    }
    return seq;
}

//Solution no 3 with alert

var n = 0;
var number = 'a'
var fibonacciSeq = []

while (typeof(number) !== 'number') {
    number = prompt("How long sequence would you like to generate?");
    console.log(typeof(number));
    number = Math.floor(number); // Math.floor exchange convert string to a number :)
    console.log(typeof(number));
    if (typeof(number) !== 'number') {
        alert("This is not a number. choose the number which corresponds of the sequence length.")
    } else { alert ("Your number of sequence is: " + number)}
}

for(var i=0; i < number; i++) {
    if (n<=1) {
        fibonacciSeq.push(n);
        n++;
    } else {
        fibonacciSeq.push(fibonacciSeq[n-2]+fibonacciSeq[n-1]);
        n++;
    }  
}

alert(fibonacciSeq)
