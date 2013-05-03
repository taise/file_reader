'use strict'

// file reader
function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // files is a FileList of File objects.
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('File name: ' + escape(f.name));
    output.push('File type: ' + (f.type || 'N/A'));
    output.push('File size: ' + f.size + ' bytes,');
    output.push('last modified: ' + f.lastModifiedDate.toLocaleDateString());
    fileReader(f);
  }
  document.getElementById('list').innerHTML = '<ul><li>' + output.join('</li><li>') + '</li></ul>';
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);


var fileReader = function(file, parentTag) {
  var reader = new FileReader();
   reader.onload = function (evt) {
     var pre = document.getElementById('fileText');
     pre.innerHTML = reader.result;
   };
   reader.readAsText(file, 'shift-jis');
}

