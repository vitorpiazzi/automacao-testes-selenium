package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static pageObjects.RegistrarUsuarioPage.*;

public class TransferenciaPage {

	@FindBy(name = "accountNumber")
	private WebElement campoConta;

	@FindBy(name = "digit")
	private WebElement campoDigito;

	@FindBy(name = "transferValue")
	private WebElement campoValor;

	@FindBy(name = "description")
	private WebElement campoDescricao;

	@FindBy(xpath = "//div//button[@class='style__ContainerButton-sc-1wsixal-0 CMabB button__child']")
	private WebElement botaoTrasnferir;
	

	public void preencherCampoConta() {
		campoConta.sendKeys(numConta);
	}
	
	public void preencherCampoDigito() {
		campoDigito.sendKeys(digConta);
	}
	
	public void preencherValor(String valor) {
		campoValor.sendKeys(valor);
	}
	
	public void preencherDescricao(String descricao) {
		campoDescricao.sendKeys(descricao);
	}
	
	public void acionarBotaoTransferir() {
		botaoTrasnferir.click();
	}
	
	public void informarNumeroConta(String conta) {
		campoConta.sendKeys(conta);
	}
	
	public void informarDigitoConta(String digito) {
		campoDigito.sendKeys(digito);
	}
}
