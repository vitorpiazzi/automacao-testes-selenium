$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CriarCadastro.feature");
formatter.feature({
  "name": "Registrar usuario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@CriarCadastro"
    }
  ]
});
formatter.scenario({
  "name": "Registar Usuario",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CriarCadastro"
    },
    {
      "name": "@registrarUsuario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistem exibe a mensagem de conta criada",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.oSistemExibeAMensagemDeContaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Registar Usuario",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CriarCadastro"
    },
    {
      "name": "@registrarUsuarioSemSaldo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o saldo em conta e igual a zero",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.oSaldoEmContaEIgualAZero()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Registar Usuario com saldo",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CriarCadastro"
    },
    {
      "name": "@registrarUsuarioComSaldo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o saldo em conta e igual a mil",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.oSaldoEmContaEIgualAMil()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Registrar usuario sem nome",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CriarCadastro"
    },
    {
      "name": "@registrarUsuarioSemNome"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistem exibe a mensagem nome nao pode ser vazio",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.oSistemExibeAMensagemNomeNaoPodeSerVazio()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Registrar usuario com senhas diferentes",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CriarCadastro"
    },
    {
      "name": "@registrarUsuarioComSenhasDiferentes"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona12\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistem exibe a mensagem as senhas nao sao iguais",
  "keyword": "Entao "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.oSistemExibeAMensagemAsSenhasNaoSaoIguais()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Extrato.feature");
formatter.feature({
  "name": "Extrato",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.background({
  "name": "registrar duas contas de usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar o numero da conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.salvarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona2\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar a tela extrato",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.acionarATelaExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "consultar saldo conta",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@consultarSaldoDisponivel"
    }
  ]
});
formatter.step({
  "name": "o sistema deve exibir o saldo",
  "keyword": "Entao "
});
formatter.match({
  "location": "ExtratoSteps.oSistemaDeveExibirOSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "registrar duas contas de usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar o numero da conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.salvarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona2\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar a tela extrato",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.acionarATelaExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "consultar transacao sem descricao",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@consultarTransacaoSemDescricao"
    }
  ]
});
formatter.step({
  "name": "clicar no botao voltar",
  "keyword": "Quando "
});
formatter.match({
  "location": "ExtratoSteps.clicarNoBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao de transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoDeTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarODigito()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor \"350\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.clicarNoBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar a tela extrato",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.acionarATelaExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe o tipo de transacao",
  "keyword": "Entao "
});
formatter.match({
  "location": "ExtratoSteps.oSistemaExibeOTipoDeTransacao()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "registrar duas contas de usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar o numero da conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.salvarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona2\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar a tela extrato",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.acionarATelaExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "consultar data",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@consultarDataDaTransacao"
    }
  ]
});
formatter.step({
  "name": "clicar no botao voltar",
  "keyword": "Quando "
});
formatter.match({
  "location": "ExtratoSteps.clicarNoBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao de transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoDeTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarODigito()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor \"350\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.clicarNoBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar a tela extrato",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.acionarATelaExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a data da transacao",
  "keyword": "Entao "
});
formatter.match({
  "location": "ExtratoSteps.oSistemaExibeADataDaTransacao()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "registrar duas contas de usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar o numero da conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.salvarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona2\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar a tela extrato",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.acionarATelaExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "consultar extrato de entrada de dinheiro",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@consultarExtratoEntrada"
    }
  ]
});
formatter.step({
  "name": "clicar no botao voltar",
  "keyword": "Quando "
});
formatter.match({
  "location": "ExtratoSteps.clicarNoBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao de transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoDeTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarODigito()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor \"350\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.clicarNoBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar a tela extrato",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.acionarATelaExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve mostrar a transacao verde",
  "keyword": "Entao "
});
formatter.match({
  "location": "ExtratoSteps.oSistemaDeveMostrarATransacaoVerde()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "registrar duas contas de usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar o numero da conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.salvarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona2\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar a tela extrato",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.acionarATelaExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "consultar extrato de saida de dinheiro",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@consultarExtratoSaida"
    }
  ]
});
formatter.step({
  "name": "clicar no botao voltar",
  "keyword": "Quando "
});
formatter.match({
  "location": "ExtratoSteps.clicarNoBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao de transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoDeTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarODigito()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor \"350\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.clicarNoBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar a tela extrato",
  "keyword": "E "
});
formatter.match({
  "location": "ExtratoSteps.acionarATelaExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve mostrar a transacao vermelha",
  "keyword": "Entao "
});
formatter.match({
  "location": "ExtratoSteps.oSistemaDeveMostrarATransacaoVermelha()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/LoginUsuario.feature");
formatter.feature({
  "name": "Logar usuario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "usuario invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"inexistente@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"errada\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem de usuario invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeAMensagemDeUsuarioInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "campos nao preenchidos",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginNaoPreenchido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem Usuario e senha precisam ser preenchidos",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeAMensagemUsuarioESenhaPrecisamSerPreenchidos()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Realizar login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginSucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe o usuario logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeOUsuarioLogado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Transferencia.feature");
formatter.feature({
  "name": "transferencia",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Transferencia"
    }
  ]
});
formatter.background({
  "name": "registrar duas contas de usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar o numero da conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.salvarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona2\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "realizar uma transferencia",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia"
    },
    {
      "name": "@transferenciaComSaldo"
    }
  ]
});
formatter.step({
  "name": "clicar no botao de transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoDeTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarODigito()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor \"350\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a descricao \"Dividendos\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarADescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valida a transferencia",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciaSteps.validaATransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "registrar duas contas de usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar o numero da conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.salvarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona2\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "realizar transferencia sem saldo",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia"
    },
    {
      "name": "@transferenciaSemSaldo"
    }
  ]
});
formatter.step({
  "name": "clicar no botao de transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoDeTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarODigito()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor \"1050\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a descricao \"Dividendos\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarADescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe saldo insuficiente",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciaSteps.oSistemaExibeSaldoInsuficiente()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "registrar duas contas de usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar o numero da conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.salvarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona2\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "transferencia para conta invalida",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia"
    },
    {
      "name": "@transferenciaContaInvalida"
    }
  ]
});
formatter.step({
  "name": "clicar no botao de transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoDeTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta \"741\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarONumeroDaConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito \"8\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarODigito(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor \"850\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a descricao \"Dividendos\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarADescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe conta invalida",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciaSteps.oSistemaExibeContaInvalida()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "registrar duas contas de usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar o numero da conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.salvarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona2\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tranferir valor zero",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia"
    },
    {
      "name": "@transferenciaIgualAZero"
    }
  ]
});
formatter.step({
  "name": "clicar no botao de transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoDeTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta \"741\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarONumeroDaConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito \"8\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarODigito(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor \"0\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a descricao \"Dividendos\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarADescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe o erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciaSteps.oSistemaExibeOErro()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "registrar duas contas de usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar o numero da conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.salvarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona2\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "realizar uma transferencia",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia"
    },
    {
      "name": "@transferenciaContaEDigitoLetras"
    }
  ]
});
formatter.step({
  "name": "clicar no botao de transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoDeTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta \"conta\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarONumeroDaConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito \"digito\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarODigito(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor \"350\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a descricao \"Dividendos\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarADescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe conta invalida",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciaSteps.oSistemaExibeContaInvalida()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "registrar duas contas de usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "Quando "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao saldo",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "salvar o numero da conta",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.salvarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario clicar em registrar login",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.usuarioClicarEmRegistrarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherOCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o nome \"QaMaratona2\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.preencherASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.confirmarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario informar o email \"qamaratona2@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.oUsuarioInformarOEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"qamaratona123\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoAcessar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "realizar uma transferencia",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Transferencia"
    },
    {
      "name": "@transferenciaSemDescricao"
    }
  ]
});
formatter.step({
  "name": "clicar no botao de transferencia",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoDeTransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarONumeroDaConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o digito1",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarODigito()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor \"350\"",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.informarOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TransferenciaSteps.clicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valida a transferencia",
  "keyword": "Entao "
});
formatter.match({
  "location": "TransferenciaSteps.validaATransferencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao fechar",
  "keyword": "E "
});
formatter.match({
  "location": "RegistrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png", null);
formatter.after({
  "status": "passed"
});
});