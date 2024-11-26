var fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file', file);
     
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'url', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log('upload success');
      }
    };
    xhr.send(formData);
});

