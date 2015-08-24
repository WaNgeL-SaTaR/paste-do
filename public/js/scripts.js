// Init editor
(function(){
  var simplemde = new SimpleMDE({ element: document.getElementById('paste-form') });
  simplemde.render();
  // Listen click
  document.getElementById('paste-save').addEventListener('click', function() {
    // создать объект для формы
    var formData = new FormData(simplemde.value());
    // отослать
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/new/");
    xhr.send(formData);
  });  
})();
