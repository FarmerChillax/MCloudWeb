var files = [], dirs = [];

var fileList = new Vue({
    el: '#file-list',
    data: {
        url: "http://www.farmer233.xyz:5000/",
        files: files,
        dirs: dirs
    },
    methods: {
        test(){
            console.log(this.dirs["name"]);
        }
    }
})

var format_time = function (TIME) {
    
    let my_time = new Date(TIME * 1000);
    let china_date_num = {
        0: "星期日",
        1: '星期一',
        2: '星期二',
        3: '星期三',
        4: '星期四',
        5: '星期五',
        6: '星期六'
    };
    var re = /[0-9][0-9]:[0-9][0-9]/
    target_time = re.exec(my_time);
    console.log(my_time);
    console.log(target_time);
    return my_time.toLocaleDateString().split('/').join("-") + " " + target_time[0];
}

$.get("http://192.168.2.200:5000/", function (data) {
    console.log(data["fileList"]["files"]);
    fileList.dirs = data["fileList"]["dirs"];
    fileList.files = data["fileList"]["files"];
});
