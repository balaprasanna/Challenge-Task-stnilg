// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    if (A.length < 3)
        return -1;

    var slope = 0;
    var prev_slope = 0;
    var mypit = -1;

    for (var i = 1; i < A.length; i++)
    {
        var current = A[i];
        var previous = A[i-1];
        var diff = current - previous;

         if ((slope >= 0 && diff > 0) || (slope <= 0 && diff < 0))
        {
            slope += diff;
        }
        else
        {
            prev_slope = slope;
            slope = diff;
        }

        if (prev_slope < 0 && slope > 0)
        {
            var tempPit = Math.min(-prev_slope, slope);
            mypit = Math.max(tempPit, mypit);
        }
    }

    return mypit;

}
