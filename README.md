# Projeto Angular com Angular Material, NgRx e JSON Server

Este projeto utiliza Angular Material para estilização, NgRx para gerenciamento de estado e JSON Server para simulação de uma API REST.

## Passo a Passo

1. **Instale o Angular Material**:
```bash
   ng add @angular/material
```

2. **Instale o Angular Material**:
```bash
ng add @ngrx/store
ng add @ngrx/effects
```

3. **Configuração do JSON Server: Adicione o seguinte script ao seu package.json para iniciar o JSON Server**:

```json
"start:json-server": "json-server --watch ./data/db.json --port 3001"
```
- Crie o arquivo db.json na pasta data para armazenar os dados simulados da API.


4. **Configuração do Ambiente de Desenvolvimento: Crie os arquivos de ambiente para separar as configurações de produção e desenvolvimento**:

- src/environments/environment.ts

- src/environments/environment.prod.ts

- Adapte o angular.json para incluir as configurações de ambiente de desenvolvimento:
```json
"development": {
  "optimization": false,
  "extractLicenses": false,
  "sourceMap": true,
  "fileReplacements": [
    {
      "replace": "src/environments/environment.prod.ts",
      "with": "src/environments/environment.ts"
    }
  ]
}
```

5. **Geração dos Módulos e Componentes: Gere os módulos e componentes necessários para o projeto:**

```bash
ng g m features/inicio/components/card-saldo
ng g c features/inicio/components/card-saldo
ng g m features/inicio/components/nova-transacao
ng g c features/inicio/components/nova-transacao
```

6. **Iniciando o Projeto: Inicie o JSON Server:**

```bash
npm run start:json-server
ng serve --open

```
