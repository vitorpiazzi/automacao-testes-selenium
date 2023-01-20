package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static utils.Utils.*;

import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.FindBy;

public class LoginPage {
	
	@FindBy(xpath = "//div[@class='card__login']//input[@name='email']")
	private WebElement campoEmailLogin;
	
	@FindBy(xpath = "//div[@class='card__login']//input[@name='password']")
	private WebElement campoSenhaLogin;
	
	@FindBy(xpath = "//div//button[@class='style__ContainerButton-sc-1wsixal-0 otUnI button__child']")
	private WebElement botaoAcessar;
	
	@FindBy(id = "btnCloseModal")
	private WebElement fechaModal;
	
		
	public void informarEmail(String email) {
		campoEmailLogin.sendKeys(email);
	}
	
	public void informarSenha(String senha) {
		campoSenhaLogin.sendKeys(senha);
	}
	
	public void clicarAcessar() {
		botaoAcessar.click();
	}
	
	public void fecharJanelaModal() {
		fechaModal.click();
	}
}
