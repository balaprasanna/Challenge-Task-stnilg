// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A, B) {    
    var total = 0;
    var l = 0;
    var leftPtr = 0, rightPtr = A.length -1;
    var maxVal = 1000000000, fraction = 1000000;

    // Recursive Module to -
    (function f(leftPtr , rightPtr){
        if (leftPtr > rightPtr) return ;
        
         l = A[leftPtr] * fraction + B[leftPtr];
        if( l >= fraction )
        {
            var temp = A[rightPtr] * fraction + B[rightPtr];            
            if( l * temp  >= (l + temp) * fraction )
            {
                total += rightPtr-leftPtr;
                rightPtr--;
            }else{
                leftPtr++;
            }
        }
        else{  leftPtr++; }
    
        return f(leftPtr , rightPtr);
        
    })(leftPtr , rightPtr);
 
    if (total > maxVal)    return maxVal;
    else                 return total;
}