package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.LoginPage;
import pageObjects.RegistrarUsuarioPage;

import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class LoginSteps {
	
	@Quando("o usuario informar o email {string}")
	public void oUsuarioInformarOEmail(String email) {
	    Na(LoginPage.class).informarEmail(email);
	}

	@Quando("informar a senha {string}")
	public void informarASenha(String senha) {
	    Na(LoginPage.class).informarSenha(senha);
	}

	@Quando("clicar no botao acessar")
	public void clicarNoBotaoAcessar() throws InterruptedException {
		Thread.sleep(2000);
	    Na(LoginPage.class).clicarAcessar();
	}

	@Entao("o sistema exibe a mensagem de usuario invalido")
	public void oSistemaExibeAMensagemDeUsuarioInvalido() throws InterruptedException {
		Thread.sleep(2000);
	    assertTrue(driver.findElement(By.xpath("//div//p[contains(text(), 'Usuário ou senha inválido')]")).isDisplayed());
	}

	@Entao("o sistema exibe a mensagem Usuario e senha precisam ser preenchidos")
	public void oSistemaExibeAMensagemUsuarioESenhaPrecisamSerPreenchidos() throws InterruptedException {
		Thread.sleep(2000);
	    assertTrue(driver.findElement(By.xpath("//div//p[@class='input__warging']")).isDisplayed());
	}
	

	@Entao("o sistema exibe o usuario logado")
	public void oSistemaExibeOUsuarioLogado() {
	   System.out.println(driver.findElement(By.xpath("//div//p[contains(text(),'bem vindo ao BugBank :)')]")).getText());
	   assertTrue(driver.findElement(By.xpath("//div//p[contains(text(),'bem vindo ao BugBank :)')]")).isDisplayed());
	}

	
}
