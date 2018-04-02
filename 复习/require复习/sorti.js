define(["isarry"],function (isarry) {//isarry是isarry.js传过来的参数，所以要接收，可以用其他
    //这个形参的名字随意，但是通常与原文件中的一致
    function sort(arr) {
        if(isarry(arr)){
           return arr.sort(function (a,b) {
                return a-b;
            });
        }else {
            console.log("不是数组");
        }
    }
    return sort;
});
