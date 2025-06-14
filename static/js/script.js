

function setupImagePreview(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);

  input.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        preview.innerHTML = ''; 
        const img = document.createElement('img');
        img.src = e.target.result;
        preview.appendChild(img);
      };

      reader.readAsDataURL(file);
    } else {
      preview.innerHTML = '<span>Sem imagem</span>';
    }
  });
}


setupImagePreview('foto', 'preview');
setupImagePreview('foto_parentesco', 'preview_parentesco');
