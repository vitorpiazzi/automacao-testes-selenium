#language: pt
#enconding: UTF-8

@CriarCadastro
Funcionalidade: Registrar usuario

	@registrarUsuario
	Cenario: Registar Usuario
		Quando usuario clicar em registrar login
		E preencher o campo email "qamaratona@gmail.com"
		E preencher o nome "QaMaratona"
		E preencher a senha "qamaratona123"
		E confirmar a senha "qamaratona123"
		E clicar no botao Cadastrar
		Entao o sistem exibe a mensagem de conta criada
		
	@registrarUsuarioSemSaldo
	Cenario: Registar Usuario
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
		Entao o saldo em conta e igual a zero
		
	@registrarUsuarioComSaldo
	Cenario: Registar Usuario com saldo
		Quando usuario clicar em registrar login
		E preencher o campo email "qamaratona@gmail.com"
		E preencher o nome "QaMaratona"
		E preencher a senha "qamaratona123"
		E confirmar a senha "qamaratona123"
		E clicar no botao saldo
		E clicar no botao Cadastrar
		E clicar no botao fechar
		E o usuario informar o email "qamaratona@gmail.com"
		E informar a senha "qamaratona123"
		E clicar no botao acessar
		Entao o saldo em conta e igual a mil
		
	@registrarUsuarioSemNome
	Cenario: Registrar usuario sem nome
		Quando usuario clicar em registrar login
		E preencher o campo email "qamaratona@gmail.com"
		E preencher a senha "qamaratona123"
		E confirmar a senha "qamaratona123"
		E clicar no botao Cadastrar
		Entao o sistem exibe a mensagem nome nao pode ser vazio
		
	@registrarUsuarioComSenhasDiferentes
	Cenario: Registrar usuario com senhas diferentes
		Quando usuario clicar em registrar login
		E preencher o campo email "qamaratona@gmail.com"
		E preencher o nome "QaMaratona"
		E preencher a senha "qamaratona123"
		E confirmar a senha "qamaratona12"
		E clicar no botao Cadastrar
		Entao o sistem exibe a mensagem as senhas nao sao iguais