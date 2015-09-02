(function(){
  // Init editor
  var simplemde = new SimpleMDE({
    element: document.getElementById('paste-form'),
    status: true,
    status: ['autosave', 'lines', 'words', 'cursor'],
    toolbar: ['bold', 'italic', 'heading', '|', 'unordered-list', 'numbered-list', '|', 'quote', 'code', '|', 'link', 'image', 'horizontal-rule'],
    toolbarTips: true,
    toolbarGuideIcon: false,
    autofocus: true,
    lineWrapping: true,
    indentWithTabs: false,
    tabSize: 2,
    spellChecker: false,
    autosave: {
        enabled: false,
        // unique_id: 'paste-form-save',
        // delay: 10000,
    },
  });
  simplemde.render();

  // Track changes
  simplemde.codemirror.on("change", function(){
    document.getElementById('paste-preview').innerHTML = marked(simplemde.value());
  });

  // Listen click
  // document.getElementById('paste-save').addEventListener('click', function() {
    // var formData = new FormData(simplemde.value());
    // console.log(simplemde.value());
    // Send
    // xhr.send(formData);
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "/new/");
  // });

})();
