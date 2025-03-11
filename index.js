class Cliente {
    #cpf;
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = [];
    }
    get cpf() {
        return this.#cpf;
    }
    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }

    getNomeMaiusculo() {
        return this.nome.toUpperCase();
    }

    getNomeMinusculo() {
        return this.nome.toLowerCase();
    }


    toString() {
        return `Nome: ${this.nome}\n${this.endereco}\n${this.telefones.map(t => t.toString()).join('\n')}`;
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    toString() {
        return `ddd: ${this.ddd} numero: ${this.numero}`;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    toString() {
        return `Estado: ${this.estado} cidade: ${this.cidade} rua: ${this.rua} numero: ${this.numero}`;
    }
}

class Empresa {
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.telefones = [];
        this.clientes = [];
    }
    get cnpj() {
        return this.#cnpj;
    }
    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }
    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }
    detalhe() {
        return `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n----------------\n${this.clientes.map(c => c.toString()).join('\n\n')}`;
    }
}

export {Cliente, Telefone, Endereco, Empresa}