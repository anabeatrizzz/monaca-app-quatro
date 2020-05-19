$(function(){
    function verificaConexao() {
      var estadoDaRede = navigator.connection.type;

      var estados = {};
      estados[Connection.UNKNOWN] = 'Conexao desconhecida';
      estados[Connection.ETHERNET] = 'Conexao Ethernet';
      estados[Connection.WIFI] = 'Conexao WiFi';
      estados[Connection.CELL_2G] = 'Conexao de celular 2G';
      estados[Connection.CELL_3G] = 'Conexao de celular 3G';
      estados[Connection.CELL_4G] = 'Conexao de celular 4G';
      estados[Connection.CELL] = 'Conexao de celular generico';
      estados[Connection.NONE] = 'Sem conexao';

      alert(`Tipo da conexao: ${estados[estadoDaRede]}`);
  }

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

  $("#cdb").click(function(){
    cordova.plugins.barcodeScanner.scan(
      function (resultado) {
          alert("Temos um código de barras\n" +
                "Resultado: " + resultado.text + "\n" +
                "Formato: " + resultado.format + "\n" +
                "Cancelado: " + resultado.cancelled);
      },
      function (erro) {
          alert(`Escaneamento falhou por causa disso: ${erro}`);
      },
      {
          preferFrontCamera: false,
          showFlipCameraButton: true,
          showTorchButton: true,
          torchOn: false, // Lanterna ligada por padrão
          saveHistory: true, // Android, salvar o historico de escaneamento (o padrão é false)
          prompt: "Coloque um código de barras dentro da área de escaneamento",
          resultDisplayDuration: 500, // Android, mostre o texto escaneado or x milisegundos, o padrão é 1500
          formats: "QR_CODE, CODE_39",
          orientation: "landscape",
          disableAnimations: true,
          disableSuccessBeep: false
      }
   );
  })

  $("#internet").click(function(){
    verificaConexao();
  })
})