[EN](./README.md)  |  [PT](./README.pt.md)

[![Licença](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Manutenção](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/EconObs/profitability-api-ts)

# Profitability API — Typescript Backend

## :dart: Sobre o Projeto
Este repositório contém o código-fonte da API RESTful desenvolvida em **TypeScript** sobre o *runtime* **Deno** para o **Projeto Integrador**. O serviço atua como o motor de processamento financeiro e económico da aplicação, fornecendo os cálculos de rentabilidade líquida e a consulta a índices oficiais.

Para consultar a interface de utilizador correspondente, visite o [repositório do frontend](https://github.com/econobs/profitability).

## :hammer_and_wrench: Arquitetura, Segurança e Tecnologias
A API adota práticas modernas de arquitetura e segurança para atender às exigências do mercado financeiro e garantir alta disponibilidade:
- **Deno Runtime:** Ambiente de execução seguro por omissão, com suporte nativo a TypeScript e controlo restrito de permissões de rede.
- **oakCors:** Middleware para gestão e permissão de requisições de origem cruzada (CORS).
- **Controlo de Conexões (`max-conn`):** Gestão otimizada do número máximo de conexões simultâneas.
- **Strict-Transport-Security (HSTS):** Política rígida de transporte seguro para forçar conexões cifradas.

## :plug: Endpoints da API (Padrão OpenAPI)
A arquitetura e os recursos disponibilizados pela API seguem a especificação oficial **OpenAPI**, garantindo a padronização dos contratos de comunicação:

- **`GET /api/taxas`** — Retorna as taxas de juros de referência (SELIC e IPCA) utilizadas nos cálculos.
- **`GET /api/prop`** — Processa cálculos baseados em taxas proporcionais ou customizadas.
- **`GET /api/pre`** — Simula o rendimento de títulos com taxa fixa acordada.
- **`GET /api/pos`** — Calcula o rendimento atrelado a indicadores de mercado (como o CDI ou SELIC).
- **`GET /api/ipca`** — Simula a rentabilidade de títulos híbridos corrigidos pela inflação (IPCA + taxa fixa).

> **Nota Técnica:** A especificação detalhada de parâmetros, cabeçalhos e esquemas de resposta segue integralmente o contrato descritivo do padrão OpenAPI.

## :rocket: Execução Local
Para executar a API localmente na sua máquina, siga os passos abaixo:

1. **Instalar o Deno:** Certifique-se de ter o Deno instalado no seu sistema. Pode consultar o guia oficial em [deno.land](https://deno.land/).
2. **Clonar o Repositório:** Clone este repositório para o seu ambiente local.
3. **Executar o Servidor:** Navegue até ao diretório raiz da aplicação e execute o comando:

```bash
deno run --allow-net app.ts
```

*Este comando iniciará o servidor Deno na porta padrão (8000).*

---

<div align="center">
  <a href="https://gitlab.com/econobs"><img src="https://img.shields.io/badge/Gitlab--_.svg?style=social&logo=gitlab" alt="GitLab"></a>
  <a href="https://github.com/EconObs/profitability-api-ts"><img src="https://img.shields.io/badge/Github--_.svg?style=social&logo=github" alt="GitHub"></a>
  <a href="https://www.youtube.com/@EconObs"><img src="https://img.shields.io/badge/YouTube--_.svg?style=social&logo=youtube" alt="YouTube"></a>
</div>
