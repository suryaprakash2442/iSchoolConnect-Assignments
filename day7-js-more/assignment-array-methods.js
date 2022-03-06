let arr1 = ["BMW","Mercedes","Honda","VW"]
let arr2 = ["pizza","burger","pasta","rice"]

function arr_concat(inp1,inp2){
    let ans = inp1.concat(inp2);
    console.log(ans);
};

function arr_pop(arr1){
    let ans = arr1.pop()
    console.log(ans);
};

function arr_push(arr,item){
    arr.push(item);
    console.log(arr);
}

function arr_unshift(arr,item){
    arr.unshift(item)
    console.log(arr);
}

function arr_shift(arr){
    arr.shift()
    console.log(arr);
}

function arr_slice(arr,start,end) {
    console.log(arr.slice(start,end)); 
}

function arr_splice(arr,start,del,value){
    arr.splice(start,del,value)
    console.log(arr);
}

function arr_reverse(arr){
    console.log(arr.reverse(arr))
}

function arr_sort(arr){
    console.log(arr.sort());
}

function arr_toString(data){
    console.log(data.toString());
}

function arr_localeString(data){
    console.log(data.toLocaleString());
}

arr_concat(arr1,arr2)
arr_pop(arr1)
arr_push(arr1,"Hyundai")
arr_unshift(arr2,"apple")
arr_shift(arr1)
arr_slice(arr1,1,3)
arr_splice(arr1,2,0,"Porche")
arr_reverse(arr1)
arr_sort(arr1)
arr_toString(12441)
arr_localeString(arr1)