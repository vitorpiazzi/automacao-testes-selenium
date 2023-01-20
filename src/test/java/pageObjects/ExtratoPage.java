package pageObjects;

import static pageObjects.BasePage.*;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ExtratoPage {

	@FindBy(id = "textBalanceAvailable")
	private WebElement saldoDisponivel;
	
	@FindBy(id = "btnBack")
	private WebElement botaoVoltar;

	public void voltarTelaHome() {
		botaoVoltar.click();
	}
}


