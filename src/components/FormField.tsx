import type { InputHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  icon: IconName;
};

export function FormField({ id, label, icon, type, ...props }: FormFieldProps) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <div className="input-shell">
        <Icon name={icon} size={19} />
        <input id={id} type={type} {...props} />
        {type === 'password' && (
          <button className="password-toggle" type="button" disabled aria-label="Mostrar senha (não implementado)" title="Disponível em uma próxima etapa">
            <Icon name="eye" size={19} />
          </button>
        )}
      </div>
    </div>
  );
}
