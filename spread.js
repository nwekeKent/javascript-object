var array1 = ['boy', 50,true];
var array2 = array1;
    console.log(array2);// it will return the values of array1

    array2[3]= 'cow' // adding a new variable to array2
        console.log(array1) // tho i made the change to array2 it also affects array1 since array2 is a ref not a copy

    // using spreading
    var array1 = ['boy', 50,true];
    var array2 = [...array1]; 
    console.log(array2);// it will return the values of array1

    
    array2[3]= 'cow' // adding a new variable to array2
    console.log(array1) // changes made to array2 wont affect array1 cos its a copy not a ref all thanks to the spread operator.




