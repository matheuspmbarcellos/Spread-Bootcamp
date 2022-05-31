class contaBancaria {
    constructor(nome, cpf, agencia, conta, tipo) {
        this.nome = nome;
        this.cpf = cpf;
        this.agencia = agencia;
        this.conta = conta;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return "Saldo insuficiente"
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class contaCorrente extends contaBancaria{
    constructor(nome, cpf, agencia, conta, cartaoCredito) {
        super(nome, cpf, agencia, conta)
        this.tipo = 'conta corrente'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
    
}

class contaPoupanca extends contaBancaria {
    constructor(nome, cpf, agencia, conta) {
        super(nome, cpf, agencia, conta)
        this.tipo = 'conta poupança'
        
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(nome, cpf, agencia, conta) {
        super(nome, cpf, agencia, conta)
        this.tipo = 'conta universitária'
        
    }

    sacar(valor) {
        if(valor > 500) {
            return "Operação negada, limite excedido."
        }
        this._saldo = this._saldo - valor;

        return this._saldo
    }
}