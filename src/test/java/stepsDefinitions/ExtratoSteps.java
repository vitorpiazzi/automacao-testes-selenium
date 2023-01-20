package stepsDefinitions;

import static utils.Utils.*;

import org.openqa.selenium.By;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.BasePage;
import pageObjects.ExtratoPage;

import static org.junit.Assert.assertTrue;
import static pageObjects.BasePage.*;

public class ExtratoSteps {

	@E("^acionar a tela extrato$")
	public void acionarATelaExtrato() throws Throwable {
		Na(BasePage.class).acionarExtrato();
	}
	
	@Entao("o sistema deve exibir o saldo")
	public void oSistemaDeveExibirOSaldo() {
	    assertTrue(driver.findElement(By.id("textBalanceAvailable")).isDisplayed());
	}

	@Quando("^clicar no botao voltar$")
	public void clicarNoBotaoVoltar() throws Throwable {
		Na(ExtratoPage.class).voltarTelaHome();
	}

	@Entao("^o sistema exibe o tipo de transacao$")
	public void oSistemaExibeOTipoDeTransacao() throws Throwable {
		assertTrue(driver.findElement(By.xpath("//p[@class='bank-statement__Description-sc-7n8vh8-18 kdvgrb'][contains(text(),'-')]")).isDisplayed());
	}

	@Entao("^o sistema exibe a data da transacao$")
	public void oSistemaExibeADataDaTransacao() throws Throwable {
		assertTrue(driver.findElement(By.id("textDateTransaction")).isDisplayed());
	}

	@Entao("^o sistema deve mostrar a transacao verde$")
	public void oSistemaDeveMostrarATransacaoVerde() throws Throwable {
		assertTrue(driver.findElement(By.xpath("//p[@class='bank-statement__Value-sc-7n8vh8-17 bbfCaL']")).isDisplayed());
	}

	@Entao("^o sistema deve mostrar a transacao vermelha$")
	public void oSistemaDeveMostrarATransacaoVermelha() throws Throwable {
		assertTrue(driver.findElement(By.xpath("//p[@class='bank-statement__Value-sc-7n8vh8-17 gvXfbP']")).isDisplayed());
	}

}
