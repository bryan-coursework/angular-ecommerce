# Comandos úteis

Execute os comandos abaixo na raiz do projeto `angular-ecommerce`.

## Instalar as dependências

```bash
npm install
```

Esse comando instala as dependências definidas no arquivo `package.json`.

## Iniciar o projeto

```bash
npm start
```

O comando executa o servidor de desenvolvimento do Angular. Por padrão, a aplicação fica disponível em `http://localhost:4200`.

Também é possível iniciar diretamente com o Angular CLI:

```bash
ng serve
```

## Criar os módulos

```bash
ng g m products --routing
ng g m categories --routing
ng g m customers --routing
ng g m orders --routing
ng g m payments --routing
```

O parâmetro `--routing` cria também o módulo responsável pelas rotas da funcionalidade.

## Criar os componentes

```bash
ng g c products/product-list --standalone=false
ng g c categories/category-list --standalone=false
ng g c customers/customer-list --standalone=false
ng g c orders/order-list --standalone=false
ng g c orders/order-item-list --standalone=false
ng g c payments/payment-list --standalone=false
```

O parâmetro `--standalone=false` cria componentes que pertencem a um `NgModule`. Como cada componente é criado dentro da pasta do seu módulo, o Angular CLI normalmente localiza e atualiza o módulo automaticamente.

Se a CLI não localizar o módulo correto, ele pode ser informado explicitamente com `--module`:

```bash
ng g c products/product-list --standalone=false --module=products/products-module
```

## Outros comandos

Executar os testes:

```bash
npm test
```

Gerar a versão de produção:

```bash
npm run build
```
