
var data_array= [40,50,60,80,90,10,100]
// solution 1 
//using array method... 
search=100

var result= data_array.find(function(item){return item==search;});
console.log("we have"+ result+"at index"+ data_array.indexOf(result));

//using for loop... 
for (var val in data_array ) {
if(data_array[val]==search){
    console.log("we have"+search+" at index"+ val)
}
}
//using while loop... 
index=0
while(index<data_array.length){
    if(data_array[index]== search){
        console.log("we have"+ search+" at index"+ index)
    }
    index++
}
 //solution 2
//using linear search algorithm to find number index no. Of an element and no. of iterations. 
 element=10;
  for(let i = 0; i < data_array.length; i++){
    if(data_array[i] ==element){
        console.log( "we have "+ element+" after"+ i +"  jumps")
    }
  }

