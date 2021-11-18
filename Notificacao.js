class Notificacao {
    constructor(nome,cpf,data_nascimento,telefone,peso,altura,descricao) {
      this.nome = nome;
      this.cpf = cpf;
      this.data_nascimento = data_nascimento;
      this.telefone = telefone;
      this.peso = peso;
      this.altura = altura;
      this.descricao = descricao;



    }

    get altura(){
        return this.altura();

    }

    get descricao(){
        return this.descricao();
    }

    get nome() {
        return this.nome();
    }

    get cpf(){
        return this.cpf();
    }

    get data_nascimento(){
        return this.data_nascimento();

    }

    get peso(){
        return this.peso();

    }
}