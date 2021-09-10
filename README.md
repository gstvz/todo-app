# Todo-App
This is a simple Task Manager Application created with React.

You can create Tasks, remove them individually or remove them all, and a text on the Footer informs how many Tasks you have pending.

![Todo_App](https://user-images.githubusercontent.com/79481036/132906104-7519aa18-97b8-4e3b-9af8-9cd34fdf6a93.gif)

It was based on the design from this tutorial:
[Coding Nepal](https://www.codingnepalweb.com/todo-list-app-javascript/).

I recreated the design on Figma:
[Figma](https://www.figma.com/file/2JJk3SPFpG7byInlLjAZDk/Todo-App?node-id=0%3A1).

# 🎮 Getting started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 🧬 Clone this repo.
```bash
git clone https://github.com/gstvz/todo-app.git
```

### 📂 Move yourself to the appropriate repository.
```bash
cd todo-app
```

### 🎉 Install the package dependencies.
```bash
yarn install
```

# 🔥 Usage.
```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Project Tasks.

- [X] Feature: Criar componente Button, com variantes add, trash e Clear All;
- [X] Feature: Criar componente TaskInput, que recebe o nome da tarefa a ser criada;
- [X] Feature: Criar componente TaskLabel, que contém cada tarefa;
- [X] Feature: Criar componente TodoList, que lista as tarefas;
- [X] Feature: Criar componente Footer;
- [X] Feature: Criar componente Container, que engloba o App;
- [X] Refatorar: TaskInput para já conter o botão de adicionar;
- [X] Refatorar: estilizações dos componentes para se posicionarem corretamente;
- [X] Refatorar: TaskInput para TaskForm;
- [X] Feature: Container contém o array Tasks e passa ele como props para os componentes;
- [X] Feature: TaskForm cria uma nova Task quando submetido;
- [X] Feature: TaskList renderiza TaskLabel para cada Task no array Tasks;
- [X] Feature: Footer exibe a lenght do array Tasks;
- [X] Feature: Botão excluir remove a task do array;
- [X] Feature: Botão Clear All remove todas as tasks do array;
- [X] Fix: implementar scrolling na TaskList para não vazar do Container quando tiver muitas tasks;
- [ ] Fix: fazer o TaskLabel ajustar ao tamanho do texto sem quebrar por causa do DeleteButton;
- [ ] Feature: validar o TaskForm para exigir algum texto no TaskInput para enviar;
- [ ] Feature: focar o cursor no TaskInput;
- [ ] Fix: mudar o cursor dos botões para pointer;
