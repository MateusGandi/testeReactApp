
import java.util.Scanner;

class LoginInvalidoException extends Exception {
    public LoginInvalidoException(String message) {
        super(message);
    }
}

class Login {
    private String usuario;
    private String senha;

    public Login(String usuario, String senha) {
        this.usuario = usuario;
        this.senha = senha;
    }

    public boolean fazerLogin(String usuario, String senha) throws LoginInvalidoException{
        if (this.usuario == usuario && this.senha == senha) {
            return true;
        } else {
            throw new LoginInvalidoException("Usuário ou senha inválidos!");
        }
    }
}



public class Main {
    public static void main(String[] args) {
        Login login = new Login("mateus", "1234");
        
        Scanner scanner = new Scanner(System.in);
        System.out.print("Usuário: ");
        String usuario = scanner.nextLine();
        System.out.print("Senha: ");
        String senha = scanner.nextLine();

        try {
            if (login.fazerLogin(usuario, senha)) {
                System.out.println("Autenticação bem sucedidada!");
            }
        } catch (LoginInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }
        scanner.close(); 
        
    }
}


