 //TODO : calculate the downward rounded average of the marks array
 function getAverage(marks){ 
    let sum = 0;
    marks.forEach(x =>{
        sum += x;
    });
    return Math.floor(sum/marks.length); 
    }

 console.log(getAverage([2,2,2,2])); 