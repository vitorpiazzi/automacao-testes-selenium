package pageObjects;

import static utils.Utils.*;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BasePage {
	
	@FindBy(id = "btn-TRANSFERÊNCIA")
	private WebElement opcaoTransferencia;
	
	@FindBy(id = "btn-EXTRATO")
	private WebElement opcaoExtrato;

	public void acionarTranferencia() {
		opcaoTransferencia.click();
	}
	
	public void acionarExtrato() {
		opcaoExtrato.click();
	}
}
