import { Brand } from '../components/Brand';
import { FormField } from '../components/FormField';
import { Icon } from '../components/Icon';

export function LoginPage() {
  return (
    <div className="login-page">
      <main className="auth-layout">
        <section className="login-card" aria-labelledby="login-title">
          <Brand />
          <div className="form-heading">
            <h1 id="login-title">Boas-vindas de volta<span>.</span></h1>
            <p>Acesse o painel para acompanhar sua operação.</p>
          </div>

          {/* Protótipo visual: a autenticação será implementada em uma etapa futura. */}
          <form className="login-form" onSubmit={(event) => event.preventDefault()} aria-describedby="prototype-note">
            <FormField id="email" name="email" label="E-mail" icon="mail" type="email" autoComplete="username" placeholder="nome@empresa.com" required />
            <FormField id="password" name="password" label="Senha" icon="lock" type="password" autoComplete="current-password" placeholder="Digite sua senha" required />
            <div className="form-options">
              <label className="remember-option"><input type="checkbox" name="remember" defaultChecked /><span>Lembrar de mim</span></label>
              <button className="text-button" type="button" disabled title="Disponível em uma próxima etapa">Esqueci minha senha</button>
            </div>
            <button className="submit-button" type="submit"><span>Entrar no painel</span><Icon name="arrow" size={19} /></button>
            <p id="prototype-note" className="prototype-note">Tela demonstrativa. O acesso ainda não está conectado.</p>
          </form>

        </section>

        <details className="demo-section">
          <summary>Credenciais de demonstração</summary>
          <div className="demo-credentials"><code>admin@elesys.com</code><span aria-hidden="true">·</span><code>Elesys123</code></div>
          <p>Dados ilustrativos, sem autenticação ativa.</p>
        </details>
      </main>

      <footer className="page-footer"><span>© {new Date().getFullYear()} Elesys</span></footer>
    </div>
  );
}
