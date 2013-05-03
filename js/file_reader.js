'use strict'

// file reader
$(function(){
  //function fileSelect(evt) {
    var fileSelect = function(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push(fileInfo(f));
      fileReader(f);
    }
    $('#list').html('<ul>' + output.join('</ul><ul>') + '</ul>');
  };

  $('#files').change(function(evt){
   fileSelect(evt);
   extractData(evt);
 });

  var fileInfo = function(file){
    var infos = [];
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
      $('#csvData').append("<pre>" + reader.result + "</pre>");
    };
    reader.readAsText(file, 'shift-jis');
  };

  // data extraction
  var extractData = function(evt){
    var csv = evt.target;
    console.log(csv);
  };

});
