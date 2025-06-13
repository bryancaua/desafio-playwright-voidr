# Desafio de Testes Automatizados com Playwright

Este projeto é parte de um desafio técnico proposto pela Voidr, com o objetivo de testar habilidades de automação de testes utilizando o Playwright com JavaScript.

# Sobre mim:

Desenvolvido por Bryan Cauã Arruda Santos como parte do processo teste da Voidr.
Sou apaixonado por tecnologia e aprendizado rápido — comecei a estudar Playwright do zero para este desafio e entreguei 13 testes funcionais com qualidade e organização.

## Funcionalidades testadas

Foram desenvolvidos **13 testes funcionais**, cobrindo diferentes fluxos do sistema:

### Autenticação
- Login com credenciais válidas
- Login com credenciais inválidas
- Login com usuário bloqueado
- Logout e tentativa de acesso à página protegida

### Carrinho e Produtos
- Adicionar item ao carrinho
- Remover item do carrinho
- Verificar item no carrinho após adicionar
- Acessar detalhes de um produto
- Voltar para listagem após abrir um produto

### Checkout
- Finalizar compra com sucesso
- Erro ao deixar campo obrigatório em branco
- Erro ao preencher checkout com dados inválidos
- Erro ao tentar finalizar com todos os campos vazios

## Tecnologias utilizadas
- [Playwright](https://playwright.dev/)
- JavaScript (Node.js)
- Page Object Model (POM) para organização dos testes

## 🚀 Como executar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/bryancaua/desafio-playwright-voidr.git
cd desafio-playwright-voidr
