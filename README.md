# 🔹 FRONTEND –  (Português)

# 📄 Contract Generator

Interface web para geração automatizada de contratos a partir de templates reutilizáveis.

Este frontend foi desenvolvido com Angular moderno e tem como objetivo permitir que o usuário preencha apenas os dados variáveis de um contrato (como nome, endereço e valores), enquanto o texto base permanece padronizado.

> ⚠️ Status do projeto: **v0 – em desenvolvimento**

---

## 🧠 Visão geral

A aplicação permite:

- Preenchimento de dados do contrato via formulário dinâmico
- Busca automática de endereço a partir do CEP
- Validação de campos obrigatórios
- Geração e visualização do contrato final
- Separação clara entre edição e visualização do contrato

---

## 🏗️ Arquitetura

Este projeto corresponde **apenas ao frontend** da aplicação.

- Backend (API REST – Spring Boot):  
  👉 https://github.com/gabifp/contract-generator

A comunicação é feita via HTTP com endpoints REST.

---

## 🚀 Funcionalidades atuais (v0)

- ✔️ Angular 21 com Standalone Components
- ✔️ Formulários reativos com validações
- ✔️ Integração com API de CEP (ViaCEP via backend)
- ✔️ Geração de contrato a partir de template
- ✔️ Visualização do contrato gerado
- ✔️ Estilização com Bootstrap
- ✔️ Estrutura preparada para evolução

---

## 🧪 Tecnologias utilizadas

- Angular 21
- TypeScript
- Standalone Components
- Reactive Forms
- RxJS
- Bootstrap
- SCSS

---

## 🔮 Próximas melhorias planejadas

- 📄 Exportação do contrato em PDF
- 📥 Importação de PDFs genéricos para edição dinâmica
- 🧠 Mapeamento dinâmico de campos do contrato
- 👤 Autenticação e login de usuários
- 🔐 Controle de acesso por usuário
- 📚 Listagem e histórico de contratos
- 🎨 Melhoria contínua de UX/UI

---

## ▶️ Como rodar o projeto

```bash
npm install
ng serve
```

## Aplicação disponível em :
http://localhost:4200

---

## Autora:
Gabriela Pimentel - 
Desenvolvedora Full Stack - 
Angular • Spring Boot • TypeScript • Java

---

# 🔹 FRONTEND –  (English)


# 📄 Contract Generator

Web interface for automated contract generation based on reusable templates.

This frontend was built with modern Angular and allows users to fill in only the variable data of a contract (such as name, address, and values), while keeping the base contract text standardized.

> ⚠️ Project status: **v0 – under development**

---

## 🧠 Overview

The application allows:

- Dynamic contract data input via forms
- Automatic address lookup by postal code
- Required field validation
- Contract generation and preview
- Clear separation between editing and viewing contracts

---

## 🏗️ Architecture

This repository contains **only the frontend** of the application.

- Backend (REST API – Spring Boot):  
  👉 https://github.com/gabifp/contract-generator

Communication is done via RESTful HTTP endpoints.

---

## 🚀 Current features (v0)

- ✔️ Angular 21 with Standalone Components
- ✔️ Reactive forms with validations
- ✔️ Address lookup integration (ViaCEP via backend)
- ✔️ Contract generation from templates
- ✔️ Contract preview page
- ✔️ Bootstrap-based styling
- ✔️ Scalable structure for future growth

---

## 🧪 Technologies

- Angular 21
- TypeScript
- Standalone Components
- Reactive Forms
- RxJS
- Bootstrap
- SCSS

---

## 🔮 Planned improvements

- 📄 Export contracts to PDF
- 📥 Import generic PDF templates for dynamic editing
- 🧠 Dynamic field mapping
- 👤 User authentication and login
- 🔐 User-based access control
- 📚 Contract listing and history
- 🎨 UX/UI improvements

---

## ▶️ How to run the project

```bash
npm install
ng serve
```

---

## The application will be available at: 
http://localhost:4200

---

## Author:
Gabriela Pimentel - 
Full Stack Developer - 
Angular • Spring Boot • TypeScript • Java
