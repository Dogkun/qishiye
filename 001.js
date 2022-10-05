function search() {
    if (document.getElementById("search_input").value != "") {
        window.location.href = "https://cn.bing.com/search?q=" + document.getElementById("search_input").value;
        document.getElementById("search_input").value = "";
    }
    return false;
}
function time() {
    var now = new Date();
    var hour= now.getHours();//得到小时数
    var minute= now.getMinutes();//得到分钟数
    var time =  hour + ":" + minute;
    document.getElementById("time").innerHTML=time;
}
var int=self.setInterval("time()",1000);//相对于重复执行，感谢某乎带佬和菜鸟教程[doge]
