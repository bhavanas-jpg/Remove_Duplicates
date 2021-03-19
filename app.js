//define an array with duplicate elements
var arr = ["banana", "mango", "apple", "orange", "mango", "apple"];

function removeDuplicates(data) {
    let unique = []; //create an empty array

    //iterating through array elements
    data.forEach(element => {
        if (!unique.includes(element)) //check an unique array  not contains element
        {
            unique.push(element); //push the element to array
        }
    });
    return unique; //return array
}

console.log(removeDuplicates(arr));
//printing the output , invoking the removeDuplicates function