'use strict'

// file reader
$(function(){
  function fileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push(fileInfo(f));
      fileReader(f);
    }
    $('#list').html('<ul>' + output.join('</ul><ul>') + '</ul>');
  }

  $('#files').change(fileSelect);

  var fileInfo = function(file){
    var infos = []
  infos.push(
    'File name: ' + escape(file.name),
    'File type: ' + (file.type || 'N/A'),
    'File size: ' + file.size + ' bytes,',
    'last modified: ' + file.lastModifiedDate.toLocaleDateString()
    );
    return '<li>' + infos.join('</li><li>') + '</li>';
  };

  var fileReader = function(file, parentTag) {
    var reader = new FileReader();
    reader.onload = function (evt) {
      $('#fileText').html(reader.result);
    };
    reader.readAsText(file, 'shift-jis');
  };
});
