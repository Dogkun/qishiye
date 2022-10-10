function search() {
    if (document.getElementById("search_input").value != "") {
        window.location.href = "https://cn.bing.com/search?q=" + document.getElementById("search_input").value;
        document.getElementById("search_input").value = "";
    }
    return false;
}
function time() {
    var now = new Date();
    var hour= now.getHours();
    var minute= now.getMinutes();
    var t =  hour + ":" + minute;
    document.getElementById("time").innerHTML = t;
}
//time()
//在第一秒时显示时间
var int=self.setInterval("time()",1000);
