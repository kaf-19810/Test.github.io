var button = document.querySelector("#btn-upload"),
    input = document.querySelector("#ipt-file"),
    progress = document.querySelector("#progress"),
    info = document.querySelector("#info");
 
var upload = function() {
    if (input.files.length === 0) {
        console.log("未选择文件");
        return;
    }
 
    var formData = new FormData();
    formData.append("file", input.files[0]);
 
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            info.innerHTML = xhr.responseText;
        }
    };
 
    xhr.upload.addEventListener("progress", function(event) {
        if(event.lengthComputable){
            progress.style.width = Math.ceil(event.loaded * 100 / event.total) + "%";
        }
    }, false);
 
    xhr.open("POST", "./store");
    xhr.send(formData);
};
 
button.addEventListener("click", upload, false);