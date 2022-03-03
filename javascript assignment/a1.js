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

arr_concat(arr1,arr2)
arr_pop(arr1)
arr_push(arr1,"Hyundai")
arr_unshift(arr2,"apple")
arr_shift(arr1)