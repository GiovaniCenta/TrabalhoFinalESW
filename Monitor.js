class Monitor extends Pulseira {
    constructor( pressaoSanguinea,nivelOxigenio,localizacaoPaciente) {
      this.Mediabatimento = Mediabatimento;
      this.MediapressaoSanguinea = MediapressaoSanguinea;
      this.MedianivelOxigenio = MedianivelOxigenio;
      this.MedialocalizacaoPaciente = MedialocalizacaoPaciente;
    }


    
    CalculaMedias(a, b) {
        Date.now = batimento();
      }

 GetMediasBatimento(){
        return this.batimento()
    }

    MediaPressaoSanguinea(){
        return this.pressaoSanguinea()

    }

  


    


  }