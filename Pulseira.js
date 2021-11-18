let Pulseira = class Pulseira {
    constructor(batimento, pressaoSanguinea,nivelOxigenio,localizacaoPaciente) {
      this.batimento = batimento;
      this.pressaoSanguinea = pressaoSanguinea;
      this.nivelOxigenio = nivelOxigenio;
      this.localizacaoPaciente = localizacaoPaciente;
    }

    get nivelOxigenio() {
        return this.nivelOxigenio()
    }

    get batimento(){
        return this.batimento()
    }

    get pressaoSanguinea(){
        return this.pressaoSanguinea()

    }

    get localizacaoPaciente(){
        return this.localizacaoPaciente()

    }



    


  }