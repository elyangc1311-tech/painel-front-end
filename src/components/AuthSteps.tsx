import { Icon, type IconName } from './Icon';

const steps: { label: string; icon: IconName }[] = [
  { label: 'Login', icon: 'key' },
  { label: 'Recuperação', icon: 'mail' },
  { label: 'E-mail enviado', icon: 'check' },
];

export function AuthSteps() {
  return (
    <nav className="auth-steps" aria-label="Etapas de acesso">
      <ol>
        {steps.map((step, index) => (
          <li key={step.label} className={index === 0 ? 'step active' : 'step'} aria-current={index === 0 ? 'step' : undefined}>
            <span className="step-icon"><Icon name={step.icon} size={17} /></span>
            <span>{step.label}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
