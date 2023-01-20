#language: pt
#enconding: UTF-8
Funcionalidade: Extrato

Contexto: registrar duas contas de usuario
	Quando usuario clicar em registrar login
	E preencher o campo email "qamaratona@gmail.com"
	E preencher o nome "QaMaratona"
	E preencher a senha "qamaratona123"
	E confirmar a senha "qamaratona123"
	E clicar no botao saldo
	E clicar no botao Cadastrar
	E salvar o numero da conta
	E clicar no botao fechar
	E usuario clicar em registrar login
	E preencher o campo email "qamaratona2@gmail.com"
	E preencher o nome "QaMaratona2"
	E preencher a senha "qamaratona123"
	E confirmar a senha "qamaratona123"
	E clicar no botao Cadastrar
	E clicar no botao fechar
	E o usuario informar o email "qamaratona2@gmail.com"
	E informar a senha "qamaratona123"
	E clicar no botao acessar
	E acionar a tela extrato
	
  @consultarSaldoDisponivel
  Cenario: consultar saldo conta
    Entao o sistema deve exibir o saldo
    
  @consultarTransacaoSemDescricao
  Cenario: consultar transacao sem descricao
  	Quando clicar no botao voltar
  	E clicar no botao de transferencia
  	E informar o numero da conta1
		E informar o digito1
		E informar o valor "350"
		E clicar no botao transferir
		E clicar no botao fechar
		E clicar no botao voltar
		E acionar a tela extrato
		Entao o sistema exibe o tipo de transacao
		
	@consultarDataDaTransacao
  Cenario: consultar data
  	Quando clicar no botao voltar
  	E clicar no botao de transferencia
  	E informar o numero da conta1
		E informar o digito1
		E informar o valor "350"
		E clicar no botao transferir
		E clicar no botao fechar
		E clicar no botao voltar
		E acionar a tela extrato
		Entao o sistema exibe a data da transacao
	
	@consultarExtratoEntrada
	Cenario: consultar extrato de entrada de dinheiro
	Quando clicar no botao voltar
  	E clicar no botao de transferencia
  	E informar o numero da conta1
		E informar o digito1
		E informar o valor "350"
		E clicar no botao transferir
		E clicar no botao fechar
		E clicar no botao voltar
		E acionar a tela extrato
		Entao o sistema deve mostrar a transacao verde
		
	@consultarExtratoSaida
	Cenario: consultar extrato de saida de dinheiro
	Quando clicar no botao voltar
  	E clicar no botao de transferencia
  	E informar o numero da conta1
		E informar o digito1
		E informar o valor "350"
		E clicar no botao transferir
		E clicar no botao fechar
		E clicar no botao voltar
		E acionar a tela extrato
		Entao o sistema deve mostrar a transacao vermelha