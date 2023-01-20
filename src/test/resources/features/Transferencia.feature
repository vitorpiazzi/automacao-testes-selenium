#language: pt
#enconding: UTF-8

@Transferencia
Funcionalidade: transferencia

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

	@transferenciaComSaldo
	Cenario: realizar uma transferencia 
		E clicar no botao de transferencia
		E informar o numero da conta1
		E informar o digito1
		E informar o valor "350"
		E informar a descricao "Dividendos"
		E clicar no botao transferir
		Entao valida a transferencia

	@transferenciaSemSaldo 
	Cenario: realizar transferencia sem saldo
		E clicar no botao de transferencia
		E informar o numero da conta1
		E informar o digito1 
		E informar o valor "1050"
		E informar a descricao "Dividendos"
		E clicar no botao transferir
		Entao o sistema exibe saldo insuficiente

	@transferenciaContaInvalida
	Cenario: transferencia para conta invalida
		E clicar no botao de transferencia
		E informar o numero da conta "741"
		E informar o digito "8"
		E informar o valor "850"
		E informar a descricao "Dividendos"
		E clicar no botao transferir
		Entao o sistema exibe conta invalida

	@transferenciaIgualAZero
	Cenario: tranferir valor zero
		E clicar no botao de transferencia
		E informar o numero da conta "741"
		E informar o digito "8"
		E informar o valor "0"
		E informar a descricao "Dividendos"
		E clicar no botao transferir
		Entao o sistema exibe o erro
		
	@transferenciaContaEDigitoLetras
	Cenario: realizar uma transferencia 
		E clicar no botao de transferencia
		E informar o numero da conta "conta"
		E informar o digito "digito"
		E informar o valor "350"
		E informar a descricao "Dividendos"
		E clicar no botao transferir
		Entao o sistema exibe conta invalida
		
	@transferenciaSemDescricao
	Cenario: realizar uma transferencia 
		E clicar no botao de transferencia
		E informar o numero da conta1
		E informar o digito1
		E informar o valor "350"
		E clicar no botao transferir
		Entao valida a transferencia
		E clicar no botao fechar