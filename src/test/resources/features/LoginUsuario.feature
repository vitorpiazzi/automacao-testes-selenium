#language: pt
#enconding: UTF-8

@login
Funcionalidade: Logar usuario

	@loginInvalido
	Cenario: usuario invalido
		Quando o usuario informar o email "inexistente@gmail.com"
		E informar a senha "errada"
		E clicar no botao acessar
		Entao o sistema exibe a mensagem de usuario invalido
		
	@loginNaoPreenchido
	Cenario: campos nao preenchidos
		Quando clicar no botao acessar
		Entao o sistema exibe a mensagem Usuario e senha precisam ser preenchidos
		
	@loginSucesso
	Cenario: Realizar login
		Quando usuario clicar em registrar login
		E preencher o campo email "qamaratona@gmail.com"
		E preencher o nome "QaMaratona"
		E preencher a senha "qamaratona123"
		E confirmar a senha "qamaratona123"
		E clicar no botao Cadastrar
		E clicar no botao fechar
		E o usuario informar o email "qamaratona@gmail.com"
		E informar a senha "qamaratona123"
		E clicar no botao acessar
		Entao o sistema exibe o usuario logado