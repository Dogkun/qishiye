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
    document.getElementById("h").innerHTML=hour;
    document.getElementById("m").innerHTML=minute;
    setTimeout(show,1000);//定时器一直调用show()函数
}
