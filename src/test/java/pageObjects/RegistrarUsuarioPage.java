package pageObjects;

import static utils.Utils.driver;

import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegistrarUsuarioPage {

	@FindBy(xpath = "//div//button[contains(text(), 'Registrar')]")
	private WebElement botaoRegistrar;

	@FindBy(xpath = "//div[@class='card__register']//input[@name='email']")
	private WebElement campoEmailRegistrar;

	@FindBy(xpath = "//div[@class='card__register']//input[@name='name']")
	private WebElement campoNomeRegistrar;

	@FindBy(xpath = "//div[@class='card__register']//input[@name='password']")
	private WebElement campoSenhaRegistrar;

	@FindBy(xpath = "//div[@class='card__register']//input[@name='passwordConfirmation']")
	private WebElement campoConfirmarSenhaRegistrar;

	@FindBy(id = "toggleAddBalance")
	private WebElement botaoSaldo;

	@FindBy(xpath = "//div//button[@class='style__ContainerButton-sc-1wsixal-0 CMabB button__child']")
	private WebElement botaoCadastrar;

	@FindBy(id = "btnCloseModal")
	private WebElement confirmaUsuarioRegistrado;
	
	public static String numConta;
	public static String digConta;
	
	public void salvarNumeroConta() throws InterruptedException {
		String textoSucesso;
		WebElement textoModal = driver.findElement(By.xpath("//p[@class='styles__Text-sc-8zteav-4 gpcLtj']"));
		Thread.sleep(2000);
		textoSucesso = textoModal.getText();
		textoSucesso = textoSucesso.replace("A conta ", "");
		textoSucesso = textoSucesso.replace(" foi criada com sucesso", "");
		String[] textoSplit = new String[1];
		textoSplit = textoSucesso.split("-");
		numConta = textoSplit[0];
		digConta = textoSplit[1];
	}

	public void euClicarNoBotaoDeSaldo() throws InterruptedException {
		Thread.sleep(500);

		try {
			driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
			if (driver.findElement(By.xpath("//label[@class='styles__Container-sc-1pngcbh-0 kIwoPV']")).isDisplayed()) {
				botaoSaldo.click();
			}

		} catch (NoSuchElementException e) {
			System.out.println(e);
		}

	}

	public void clicarRegistrar() {
		botaoRegistrar.click();
	}

	public void informarEmailRegistrar(String emailRegistrar) {
		campoEmailRegistrar.clear();
		campoEmailRegistrar.sendKeys(emailRegistrar);
	}

	public void informarNomeRegistrar(String nomeRegistrar) {
		campoNomeRegistrar.clear();
		campoNomeRegistrar.sendKeys(nomeRegistrar);
	}

	public void informarSenhaRegistrar(String senhaRegistrar) {
		campoSenhaRegistrar.clear();
		campoSenhaRegistrar.sendKeys(senhaRegistrar);
	}

	public void confirmarSenhaRegistrar(String confirmaSenhaRegistrar) {
		campoConfirmarSenhaRegistrar.clear();
		campoConfirmarSenhaRegistrar.sendKeys(confirmaSenhaRegistrar);
	}

	public void adicionarSaldoConta() throws InterruptedException {
		Thread.sleep(2000);
		botaoSaldo.click();
	}

	public void confirmarRegistrar() {
		botaoCadastrar.click();
	}

}
