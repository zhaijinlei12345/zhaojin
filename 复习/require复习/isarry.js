define([],function () {
    function  isarry(arr) {
        if(arr instanceof Array){
            return true;
        }
            return false;
    }
    return isarry;//调回声明延长作用域;
    // 为什么延长作用域？因为isarry是这边function局部的方法，局部方法在外面不能被调用;（将局部函数，传给外部调用的一方）

    // isarry():这是函数调用
    // isarry:只是把声明调回去
});
