//require.js
// require(["sorti"],function (sort) {//一开始就要引入js文件，
//        var arr=[4,1,5,7,2,11];
//       console.log(sort(arr));
// });

//sea,js//require.js2.0以后允许sea.js这样的写法;
define(function (require) {
    var arr=[4,1,5,7,2,11];
    //sea是当需要时才引入js文件
    var sort = require("sorti");
    console.log (sort(arr));
});

/*
require.js:
AMD(Asynchronization Module Definition)(异步模块规范)
 依赖前置
sea.js:
CMD(Common Module Definition) (通用模块规范)
依赖就近

 */
