package stepsDefinitions;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.LoginPage;
import pageObjects.RegistrarUsuarioPage;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class RegistrarUsuarioSteps {
	
	@Quando("usuario clicar em registrar login")
	public void usuarioClicarEmRegistrarLogin() {
	    Na(RegistrarUsuarioPage.class).clicarRegistrar();
	}

	@Quando("preencher o campo email {string}")
	public void preencherOCampoEmail(String emailRegistrar) {
	    Na(RegistrarUsuarioPage.class).informarEmailRegistrar(emailRegistrar);
	}

	@Quando("preencher o nome {string}")
	public void preencherONome(String nomeRegistrar) {
	    Na(RegistrarUsuarioPage.class).informarNomeRegistrar(nomeRegistrar);
	}

	@Quando("preencher a senha {string}")
	public void preencherASenha(String senhaRegistrar) {
	    Na(RegistrarUsuarioPage.class).informarSenhaRegistrar(senhaRegistrar);
	}

	@Quando("confirmar a senha {string}")
	public void confirmarASenha(String confirmaSenhaRegistrar) {
	    Na(RegistrarUsuarioPage.class).confirmarSenhaRegistrar(confirmaSenhaRegistrar);
	}

	@Quando("clicar no botao Cadastrar")
	public void clicarNoBotaoCadastrar() throws InterruptedException {
		Thread.sleep(2000);
	    Na(RegistrarUsuarioPage.class).confirmarRegistrar();
	}

	@Entao("^o sistem exibe a mensagem de conta criada$")
	public void oSistemExibeAMensagemDeContaCriada() throws Throwable {
		Thread.sleep(2000);
		assertTrue(driver.findElement(By.xpath("//div//p[contains(text(),'criada com sucesso')]")).isDisplayed());
	}
	
	@Quando("clicar no botao fechar")
	public void clicarNoBotaoFechar() throws InterruptedException {
		Thread.sleep(1000);
	    Na(LoginPage.class).fecharJanelaModal();    
	}

	@Entao("^o saldo em conta e igual a zero$")
	public void oSaldoEmContaEIgualAZero() throws Throwable {
		Thread.sleep(2000);
		assertEquals("R$ 0,00", driver.findElement(By.xpath("//div//p[@id='textBalance']//span")).getText());
	}

	@Entao("^o saldo em conta e igual a mil$")
	public void oSaldoEmContaEIgualAMil() throws Throwable {
		Thread.sleep(2000);
		assertEquals("R$ 1.000,00", driver.findElement(By.xpath("//div//p[@id='textBalance']//span")).getText());
	}

	@E("^clicar no botao saldo$")
	public void clicarNoBotaoSaldo() throws Throwable {
		Na(RegistrarUsuarioPage.class).adicionarSaldoConta();
	}

	@Entao("^o sistem exibe a mensagem nome nao pode ser vazio$")
	public void oSistemExibeAMensagemNomeNaoPodeSerVazio() throws Throwable {
		Thread.sleep(2000);
	    assertTrue(driver.findElement(By.xpath("//div//p[contains(text(), 'Nome não pode ser vazio.')]")).isDisplayed());
	}

	@Entao("^o sistem exibe a mensagem as senhas nao sao iguais$")
	public void oSistemExibeAMensagemAsSenhasNaoSaoIguais() throws Throwable {
		Thread.sleep(2000);
		assertTrue(driver.findElement(By.xpath("//div//p[contains(text(), 'As senhas não são iguais.')]")).isDisplayed());
	}
	
}
