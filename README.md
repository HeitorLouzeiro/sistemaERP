# 🏢 Sistema ERP

<div align="center">

Sistema completo de gerenciamento empresarial (ERP) desenvolvido com Django Rest Framework e React + TypeScript.

[![Django](https://img.shields.io/badge/Django-5.2.7-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.8.2-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Sobre o Projeto

Sistema ERP moderno e completo para gestão empresarial, oferecendo funcionalidades de gerenciamento de funcionários, tarefas, grupos de permissões e controle de acesso. Desenvolvido com as melhores práticas e tecnologias atuais do mercado.

### ✨ Principais Funcionalidades

- 🔐 **Autenticação JWT** - Sistema seguro de login com tokens de acesso e refresh
- 👥 **Gestão de Funcionários** - CRUD completo para gerenciar colaboradores
- 📝 **Gerenciamento de Tarefas** - Sistema de kanban com status personalizáveis
- 🔑 **Controle de Permissões** - Sistema robusto de grupos e permissões
- 🎨 **Interface Moderna** - Dashboard responsivo com Material-UI
- 📊 **Dashboard Analítico** - Visualização de dados e métricas importantes
- 🌍 **Internacionalização** - Interface preparada para múltiplos idiomas

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Django 5.2.7** - Framework web Python de alto nível
- **Django REST Framework 3.16.1** - Toolkit para construção de Web APIs
- **Simple JWT 5.5.1** - Autenticação JWT para Django REST Framework
- **Django CORS Headers 4.9.0** - Tratamento de Cross-Origin Resource Sharing
- **SQLite** - Banco de dados (facilmente substituível por PostgreSQL/MySQL)

### Frontend
- **React 17.0.2** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript 4.7.3** - Superset JavaScript com tipagem estática
- **Material-UI 5.8.2** - Componentes React com Material Design
- **Redux Toolkit 2.10.1** - Gerenciamento de estado global
- **React Router 6.3.0** - Roteamento para aplicações React
- **Axios 1.13.2** - Cliente HTTP para requisições à API
- **ApexCharts 3.35.3** - Biblioteca de gráficos interativos

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Python 3.8+](https://www.python.org/downloads/)
- [Node.js 14+](https://nodejs.org/)
- [Git](https://git-scm.com/)

### 🔧 Configuração do Backend

```bash
# Clone o repositório
git clone https://github.com/HeitorLouzeiro/sistemaERP.git
cd sistemaERP

# Acesse a pasta da API
cd api

# Crie um ambiente virtual
python -m venv venv

# Ative o ambiente virtual
# No Linux/Mac:
source venv/bin/activate
# No Windows:
venv\Scripts\activate

# Instale as dependências
pip install -r requirements.txt

# Execute as migrações do banco de dados
python manage.py migrate

# Crie um superusuário (admin)
python manage.py createsuperuser

# Inicie o servidor de desenvolvimento
python manage.py runserver
```

O backend estará rodando em `http://localhost:8000`

### 🎨 Configuração do Frontend

```bash
# Em outro terminal, acesse a pasta do frontend
cd erp-frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

O frontend estará rodando em `http://localhost:3000`

---

## 📡 Documentação da API

### Endpoints Principais

#### Autenticação

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/auth/signup/` | Criar novo usuário |
| POST | `/api/auth/signin/` | Realizar login |
| GET | `/api/auth/user/` | Obter usuário autenticado |

#### Funcionários

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/companies/employees` | Listar funcionários |
| POST | `/api/companies/employees` | Criar funcionário |
| GET | `/api/companies/employees/{id}` | Obter funcionário |
| PUT | `/api/companies/employees/{id}` | Atualizar funcionário |
| DELETE | `/api/companies/employees/{id}` | Deletar funcionário |

#### Grupos e Permissões

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/companies/groups` | Listar grupos |
| POST | `/api/companies/groups` | Criar grupo |
| GET | `/api/companies/groups/{id}` | Obter grupo |
| PUT | `/api/companies/groups/{id}` | Atualizar grupo |
| DELETE | `/api/companies/groups/{id}` | Deletar grupo |
| GET | `/api/companies/permissions` | Listar permissões |

#### Tarefas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/companies/tasks` | Listar tarefas |
| POST | `/api/companies/tasks` | Criar tarefa |
| GET | `/api/companies/tasks/{id}` | Obter tarefa |
| PUT | `/api/companies/tasks/{id}` | Atualizar tarefa |
| DELETE | `/api/companies/tasks/{id}` | Deletar tarefa |
| GET | `/api/companies/task-statuses` | Listar status de tarefas |

### 📮 Collection do Postman

Importe o arquivo `SistemaERP-Postman-Collection.json` no Postman para ter acesso a todos os endpoints com exemplos e testes automatizados.

**Variáveis de ambiente necessárias:**
- `base_url`: http://localhost:8000
- `access_token`: (preenchido automaticamente após login)

---

## 📁 Estrutura do Projeto

```
sistemaERP/
├── api/                          # Backend Django
│   ├── accounts/                 # App de autenticação
│   │   ├── views/               # Views de autenticação
│   │   ├── models.py            # Modelos de usuário
│   │   └── serializers.py       # Serializers
│   ├── companies/               # App de empresas
│   │   ├── views/               # Views de CRUD
│   │   │   ├── employees.py    # Gestão de funcionários
│   │   │   ├── groups.py        # Gestão de grupos
│   │   │   ├── tasks.py         # Gestão de tarefas
│   │   │   └── task_status.py  # Status de tarefas
│   │   ├── models.py            # Modelos de empresa
│   │   └── utils/               # Utilidades e permissões
│   ├── core/                    # Configurações Django
│   ├── db.sqlite3              # Banco de dados
│   └── requirements.txt        # Dependências Python
│
├── erp-frontend/               # Frontend React
│   ├── src/
│   │   ├── components/        # Componentes reutilizáveis
│   │   ├── content/          # Páginas da aplicação
│   │   │   └── pages/       # Páginas principais
│   │   │       ├── Auth/    # Páginas de autenticação
│   │   │       ├── Employees/ # Páginas de funcionários
│   │   │       ├── Groups/   # Páginas de grupos
│   │   │       └── Tasks/    # Páginas de tarefas
│   │   ├── contexts/         # Context API
│   │   ├── layouts/          # Layouts da aplicação
│   │   ├── middlewares/      # Middlewares de autenticação
│   │   ├── models/           # Tipos TypeScript
│   │   ├── theme/            # Configuração de tema
│   │   ├── utils/            # Funções utilitárias
│   │   └── router.tsx        # Configuração de rotas
│   └── package.json          # Dependências Node.js
│
├── SistemaERP-Postman-Collection.json  # Collection Postman
├── LICENSE                              # Licença MIT
└── README.md                           # Este arquivo
```

---

## 🔐 Autenticação

O sistema utiliza **JWT (JSON Web Tokens)** para autenticação. Após o login, você receberá:

- **Access Token**: Token de curta duração para acesso à API
- **Refresh Token**: Token de longa duração para renovar o access token

### Exemplo de uso:

```typescript
// Login
const response = await axios.post('/api/auth/signin/', {
  email: 'usuario@example.com',
  password: 'senha123'
});

// Usar o token nas requisições
const config = {
  headers: { Authorization: `Bearer ${response.data.access}` }
};

await axios.get('/api/companies/employees', config);
```

---

## 🎯 Funcionalidades Detalhadas

### 👥 Gestão de Funcionários
- Cadastro completo de funcionários
- Vinculação a grupos de permissões
- Controle de acesso por permissões
- Histórico de atividades

### 📝 Sistema de Tarefas
- Criação e atribuição de tarefas
- Status personalizáveis (Pendente, Em Andamento, Concluído, etc.)
- Definição de prazos e prioridades
- Acompanhamento de progresso

### 🔑 Controle de Acesso
- Sistema de grupos e permissões granular
- Permissões por módulo (funcionários, tarefas, grupos)
- Controle de proprietário da empresa
- Middleware de verificação de permissões

### 🎨 Interface do Usuário
- Design moderno e responsivo
- Tema escuro/claro
- Sidebar com navegação intuitiva
- Tabelas com paginação e filtros
- Formulários validados

---

## 🧪 Testes

### Backend
```bash
cd api
python manage.py test
```

### Frontend
```bash
cd erp-frontend
npm test
```

---

## 📦 Build para Produção

### Backend
```bash
# Configure as variáveis de ambiente
export DEBUG=False
export SECRET_KEY='sua-chave-secreta-aqui'
export ALLOWED_HOSTS='seu-dominio.com'

# Colete os arquivos estáticos
python manage.py collectstatic --noinput

# Use um servidor WSGI como Gunicorn
pip install gunicorn
gunicorn core.wsgi:application
```

### Frontend
```bash
cd erp-frontend
npm run build
```

Os arquivos otimizados estarão na pasta `build/`

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrão de Commits

Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Mudanças na documentação
- `refactor:` Refatoração de código
- `test:` Adição ou modificação de testes
- `chore:` Tarefas de manutenção

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Heitor Louzeiro**

[![GitHub](https://img.shields.io/badge/GitHub-HeitorLouzeiro-181717?style=for-the-badge&logo=github)](https://github.com/HeitorLouzeiro)

---

## 📧 Contato

Para dúvidas, sugestões ou feedbacks, abra uma [issue](https://github.com/HeitorLouzeiro/sistemaERP/issues) no GitHub.

---

<div align="center">

Desenvolvido com ❤️ por [Heitor Louzeiro](https://github.com/HeitorLouzeiro)

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>
