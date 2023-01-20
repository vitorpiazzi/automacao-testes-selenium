package stepsDefinitions;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.BasePage;
import pageObjects.LoginPage;
import pageObjects.RegistrarUsuarioPage;
import pageObjects.TransferenciaPage;

import static pageObjects.LoginPage.*;
import static pageObjects.TransferenciaPage.*;
import static pageObjects.RegistrarUsuarioPage.*;
import static org.junit.Assert.assertTrue;
import static pageObjects.BasePage.*;

import static utils.Utils.*;

import org.openqa.selenium.By;

public class TransferenciaSteps {
	
	@Quando("salvar o numero da conta")
	public void salvarONumeroDaConta() throws InterruptedException {
	    Na(RegistrarUsuarioPage.class).salvarNumeroConta();
	}

	@Quando("clicar no botao de transferencia")
	public void clicarNoBotaoDeTransferencia() {
	    Na(BasePage.class).acionarTranferencia();
	}

	@Quando("informar o numero da conta1")
	public void informarONumeroDaConta() {
	    Na(TransferenciaPage.class).preencherCampoConta();
	}

	@Quando("informar o digito1")
	public void informarODigito() {
	    Na(TransferenciaPage.class).preencherCampoDigito();
	}

	@Quando("informar o valor {string}")
	public void informarOValor(String valor) {
	    Na(TransferenciaPage.class).preencherValor(valor);
	}

	@Quando("informar a descricao {string}")
	public void informarADescricao(String descricao) {
	    Na(TransferenciaPage.class).preencherDescricao(descricao);
	}
	
	@E("^clicar no botao transferir$")
	public void clicarNoBotaoTransferir() throws Throwable {
		Thread.sleep(1000);
		Na(TransferenciaPage.class).acionarBotaoTransferir();
	}
	
	@Entao("valida a transferencia")
	public void validaATransferencia() throws InterruptedException {
		Thread.sleep(1000);
	    assertTrue(driver.findElement(By.xpath("//div//p[contains(text(), 'Transferencia realizada com sucesso')]")).isDisplayed());
	}

	@Entao("o sistema exibe saldo insuficiente")
	public void oSistemaExibeSaldoInsuficiente() throws InterruptedException {
		Thread.sleep(1000);
		assertTrue(driver.findElement(By.xpath("//div//p[contains(text(),'Você não tem saldo suficiente para essa transação')]")).isDisplayed());
	}

	@Quando("informar o numero da conta {string}")
	public void informarONumeroDaConta(String conta) {
	    Na(TransferenciaPage.class).informarNumeroConta(conta);
	}

	@Quando("informar o digito {string}")
	public void informarODigito(String digito) {
	    Na(TransferenciaPage.class).informarDigitoConta(digito);
	}

	@Entao("o sistema exibe conta invalida")
	public void oSistemaExibeContaInvalida() throws InterruptedException {
		Thread.sleep(1000);
		assertTrue(driver.findElement(By.xpath("//div//p[contains(text(),'Conta inválida ou inexistente')]")).isDisplayed());
	}
	
	@Entao("o sistema exibe o erro")
	public void oSistemaExibeOErro() throws InterruptedException {
		Thread.sleep(1000);
	    assertTrue(driver.findElement(By.xpath("//div//p[contains(text(),'Valor da transferência não pode ser 0 ou negativo')]")).isDisplayed());
	}

}
