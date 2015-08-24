(function(){
  // Init editor
  var simplemde = new SimpleMDE({
    element: document.getElementById('paste-form'),
    status: true,
    status: ['autosave', 'lines', 'words', 'cursor'], // Optional usage
    // toolbar: true,
    toolbarTips: true,
    toolbarGuideIcon: false,
    autofocus: true,
    lineWrapping: true,
    indentWithTabs: false,
    tabSize: 2,
    spellChecker: false,
    autosave: {
        enabled: true,
        unique_id: 'paste-form-save',
        delay: 10000,
    },
  });
  simplemde.render();

  // // Listen click
  // document.getElementById('paste-save').addEventListener('click', function() {
  //   var formData = new FormData(simplemde.value());
  //   // Send
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("POST", "/new/");
  //   xhr.send(formData);
  // });

})();
