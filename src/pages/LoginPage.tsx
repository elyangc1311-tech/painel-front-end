import { AuthSteps } from '../components/AuthSteps';
import { Brand } from '../components/Brand';
import { FormField } from '../components/FormField';
import { Icon } from '../components/Icon';

export function LoginPage() {
  return (
    <div className="login-page">
      <header className="page-header">
        <span className="workspace-label">PLATAFORMA DE GESTÃO</span>
        <span className="prototype-badge"><span /> Protótipo estático</span>
      </header>

      <main className="auth-layout">
        <AuthSteps />
        <p className="screen-label"><span>TELA 01</span><span aria-hidden="true">/</span>LOGIN</p>

        <section className="login-card" aria-labelledby="login-title">
          <Brand />
          <div className="form-heading">
            <p className="eyebrow"><span /> SEU ESPAÇO DE TRABALHO</p>
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

          <aside className="demo-section" aria-label="Credenciais ilustrativas">
            <div className="demo-title"><span /> AMBIENTE DEMONSTRATIVO <span /></div>
            <div className="demo-credentials"><code>admin@elesys.com</code><span aria-hidden="true">·</span><code>Elesys123</code></div>
          </aside>
        </section>

        <p className="access-note"><Icon name="shield" size={16} /> Tudo começa com uma gestão mais simples.</p>
      </main>

      <footer className="page-footer"><span>© {new Date().getFullYear()} Elesys</span><span>Mais clareza. Mais controle.</span></footer>
    </div>
  );
}
