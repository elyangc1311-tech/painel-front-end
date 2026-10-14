# Elesys · Painel

Tela de login estática, migrada de HTML/CSS para **React + TypeScript + Vite**. Mantém a identidade visual da Elesys, com componentes, layout responsivo e estilos próprios, sem bibliotecas visuais ou fontes externas.

## Executar

Requisito: Node.js 22.12+ (ou 20.19+).

```bash
npm install
npm run dev
```

Abra o endereço informado no terminal. Para validar os tipos e gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Organização

```text
src/
  components/    # Marca, ícones, etapas e campos reutilizáveis
  pages/         # Composição da tela de login
  styles/        # Tokens visuais, estilos e responsividade
  App.tsx        # Componente principal
  main.tsx       # Inicialização do React
```

## Escopo

Este projeto é um exercício de interface. Os campos e o checkbox usam o comportamento nativo do navegador. Enviar o formulário não navega, não armazena credenciais e não faz requisições. Os controles de recuperação e exibição de senha estão desabilitados; as etapas são apenas visuais. As credenciais exibidas são ilustrativas.

Autenticação, recuperação de senha, estados de carregamento/erro, navegação e integração com backend ficam para a próxima etapa do aprendizado. Não há serviços de API, sessão, mocks de backend ou implementação de autenticação pronta.

O ponto de entrada passa a ser `index.html`; os antigos `login.html` e `style.css` foram substituídos pela estrutura React.
