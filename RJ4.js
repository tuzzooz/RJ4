import { Cliente, Telefone, Endereco, Empresa } from './index.js';

let empresa = new Empresa('ABC LTDA', 'Mercado Online', '22.222.222/2221-22', new Endereco('SP', 'São Paulo', 'Av. Paulista', '1000'));
empresa.adicionarTelefone(new Telefone('12', '9999-9999'));
empresa.adicionarTelefone(new Telefone('12', '9999-8888'));

let clientes = [
    new Cliente("Gustavo", "123.456.789-00", new Endereco("SP", "São José dos Campos", "Esplanada", 123)),
    new Cliente("Gabriel", "987.654.321-00", new Endereco("SP", "São José dos Campos", "Aquarius", 423)),
    new Cliente("Marcelo", "111.222.333-44", new Endereco("SP", "São José dos Campos", "Av São João", 543)),
    new Cliente("Rafael", "555.666.777-88", new Endereco("SP", "São José dos Campos", "Av Andrômeda", 532))
];

clientes[0].telefones.push(new Telefone('11', '9999-1111'));
clientes[0].telefones.push(new Telefone('11', '9999-2222'));

clientes[1].telefones.push(new Telefone('11', '9999-3333'));
clientes[1].telefones.push(new Telefone('11', '9999-4444'));

clientes[2].telefones.push(new Telefone('11', '9999-5555'));
clientes[2].telefones.push(new Telefone('11', '9999-6666'));

clientes[3].telefones.push(new Telefone('11', '9999-7777'));
clientes[3].telefones.push(new Telefone('11', '9999-8001'));

clientes.forEach(cliente => empresa.adicionarCliente(cliente));
console.log(empresa.detalhe());
