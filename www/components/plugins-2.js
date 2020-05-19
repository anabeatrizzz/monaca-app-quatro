$(function(){
  $("#camera").click(function(){
    navigator.camera.getPicture(deuBom, deuRuim, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      correctOrientation: true,
      saveToPhotoAlbum: true
    });

    function deuBom(URIDaImagem) {
        $("#minhaImagem").attr("src", URIDaImagem)
    }

    function deuRuim(msg) {
        alert(`Deu ruim pode causa disso: ${msg}`);
    }
  })
})