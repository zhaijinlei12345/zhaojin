// index.js
function start() {
    var canvas = document.getElementById("main");
    // 初始化 WebGL 上下文
    var gl = initWebGL(canvas);
    // 开始渲染
}
function initWebGL(canvas) {
    // 创建全局变量
    var gl = null;

    try {
        // 尝试获取标准上下文，如果失败，回退到试验性上下文
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e) {}

    // 如果没有GL上下文，马上放弃
    if (!gl) {
        alert("WebGL初始化失败，可能是因为您的浏览器不支持。");
        gl = null;
    }
    return gl;
}
