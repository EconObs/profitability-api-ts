[EN](./README.md)  |  [PT](./README.pt.md)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/EconObs/profitability-api-ts)

# Profitability API — TypeScript Backend (Capstone Project)

## :dart: About the Project
This repository contains the source code for the RESTful API developed in **TypeScript** using the **Deno** runtime for the **Capstone Project** (*Projeto Integrador*). The service acts as the financial and economic processing engine of the application, providing net profitability calculations and queries for official economic indices.

To view the corresponding user interface, please visit the [frontend repository](https://github.com/econobs/profitability).

## :hammer_and_wrench: Architecture, Security, and Technologies
The API adopts modern architecture and security practices to meet financial market demands and ensure high availability:
- **Deno Runtime:** Secure-by-default execution environment with native TypeScript support and strict control over network permissions.
- **oakCors:** Middleware for managing and permitting Cross-Origin Resource Sharing (CORS).
- **Connection Control (`max-conn`):** Optimized management of the maximum number of simultaneous connections.
- **Strict-Transport-Security (HSTS):** A strict transport security policy enforcing encrypted connections.

## :plug: API Endpoints (OpenAPI Standard)
The architecture and resources provided by the API follow the official **OpenAPI** specification, ensuring standardized communication contracts:

- **`GET /api/taxas`** — Returns the benchmark interest rates (SELIC and IPCA) used in the calculations.
- **`GET /api/prop`** — Processes calculations based on proportional or custom rates.
- **`GET /api/pre`** — Simulates the yield of fixed-rate securities.
- **`GET /api/pos`** — Calculates returns pegged to market indicators (such as CDI or SELIC).
- **`GET /api/ipca`** — Simulates the profitability of hybrid securities adjusted for inflation (IPCA + fixed rate).

> **Technical Note:** The detailed specification of parameters, headers, and response schemas fully complies with the descriptive contract of the OpenAPI standard.

## :rocket: Local Execution
To run the API locally on your machine, follow the steps below:

1. **Install Deno:** Ensure that Deno is installed on your system. You can check the official guide at [deno.land](https://deno.land/).
2. **Clone the Repository:** Clone this repository to your local environment.
3. **Run the Server:** Navigate to the root directory of the application and execute the command:

```bash
deno run --allow-net app.ts
```

*This command will start the Deno server on the default port (8000).*

---

<div align="center">
  <a href="https://gitlab.com/econobs"><img src="https://img.shields.io/badge/Gitlab--_.svg?style=social&logo=gitlab" alt="GitLab"></a>
  <a href="https://github.com/EconObs/profitability-api-ts"><img src="https://img.shields.io/badge/Github--_.svg?style=social&logo=github" alt="GitHub"></a>
  <a href="https://www.youtube.com/@EconObs"><img src="https://img.shields.io/badge/YouTube--_.svg?style=social&logo=youtube" alt="YouTube"></a>
</div>
