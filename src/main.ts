import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Application, RouterContext } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';
import { taxasController } from './controllers/taxasController.ts';
import { propController } from './controllers/propController.ts';
import { preController } from './controllers/preController.ts';
import { posController } from './controllers/posController.ts';
import { ipcaController } from './controllers/ipcaController.ts';
import * as TaxasService from './services/taxasService.ts';

const app = new Application();

app.use(oakCors({
	origin: "*"
}));

app.use(async (ctx, next) => {
	ctx.response.headers.set("max-conn", "100"); 
	await next();
});

app.use(async (ctx, next) => {
	ctx.response.headers.set("Strict-Transport-Security", "max-age=31536000");
	await next();
});

// inicializa taxas no cache
await TaxasService.fetchTaxas();

app.use(taxasController.routes());
app.use(propController.routes());
app.use(preController.routes());
app.use(posController.routes());
app.use(ipcaController.routes());


app.use(async (ctx: RouterContext) => {
	
	ctx.response.headers.set('Content-Type', 'text/html');
	
	ctx.response.body = `
		<!DOCTYPE HTML>
		<html lang="pt-BR">
		<head>
		    <meta charset="UTF-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <title>Profitability API | EconObs</title>
		    <style>
		        :root {
		            --bg-color: #0f172a;
		            --card-bg: #1e293b;
		            --text-color: #e2e8f0;
		            --text-muted: #94a3b8;
		            --accent-color: #38bdf8;
		            --accent-hover: #0ea5e9;
		            --border-color: #334155;
		        }
		
		        body {
		            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
		            background-color: var(--bg-color);
		            color: var(--text-color);
		            margin: 0;
		            padding: 0;
		            display: flex;
		            justify-content: center;
		            align-items: center;
		            min-height: 100vh;
		        }
		
		        .container {
		            background-color: var(--card-bg);
		            border: 1px solid var(--border-color);
		            border-radius: 12px;
		            padding: 2.5rem;
		            max-width: 600px;
		            width: 90%;
		            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
		        }
		
		        .badge {
		            display: inline-block;
		            background-color: rgba(56, 189, 248, 0.1);
		            color: var(--accent-color);
		            font-size: 0.85rem;
		            font-weight: 600;
		            padding: 0.25rem 0.75rem;
		            border-radius: 9999px;
		            margin-bottom: 1rem;
		            border: 1px solid rgba(56, 189, 248, 0.2);
		        }
		
		        h1 {
		            margin-top: 0;
		            font-size: 1.8rem;
		            color: #f8fafc;
		        }
		
		        p {
		            color: var(--text-muted);
		            line-height: 1.6;
		            margin-bottom: 1.5rem;
		        }
		
		        .links-grid {
		            display: grid;
		            gap: 1rem;
		            margin-top: 1.5rem;
		        }
		
		        .link-card {
		            display: flex;
		            align-items: center;
		            justify-content: space-between;
		            background-color: rgba(15, 23, 42, 0.6);
		            border: 1px solid var(--border-color);
		            padding: 1rem;
		            border-radius: 8px;
		            text-decoration: none;
		            color: var(--text-color);
		            transition: all 0.2s ease;
		        }
		
		        .link-card:hover {
		            border-color: var(--accent-color);
		            transform: translateY(-2px);
		        }
		
		        .link-info strong {
		            display: block;
		            color: #f8fafc;
		            margin-bottom: 0.2rem;
		        }
		
		        .link-info span {
		            font-size: 0.85rem;
		            color: var(--text-muted);
		        }
		
		        .arrow {
		            color: var(--accent-color);
		            font-weight: bold;
		        }
		
		        .footer {
		            margin-top: 2rem;
		            font-size: 0.8rem;
		            text-align: center;
		            color: var(--text-muted);
		            border-top: 1px solid var(--border-color);
		            padding-top: 1rem;
		        }
		
		        .footer a {
		            color: var(--accent-color);
		            text-decoration: none;
		        }
		
		        .footer a:hover {
		            text-decoration: underline;
		        }
		    </style>
		</head>
		<body>
		
		    <div class="container">
		        <div class="badge">Projeto Integrador • EconObs</div>
		        <h1>Profitability API</h1>
		        <p>API backend especializada em cálculos de rentabilidade em Renda Fixa. Desenvolvida para processamento de dados financeiros e integração com aplicações de mercado.</p>
		
		        <div class="links-grid">
		            <!-- Front-end -->
		            <a href="https://econobs.github.io/profitability/" target="_blank" class="link-card">
		                <div class="link-info">
		                    <strong>Aplicação Front-end</strong>
		                    <span>Interface de usuário (Client)</span>
		                </div>
		                <div class="arrow">&rarr;</div>
		            </a>
		
		            <!-- Organization -->
		            <a href="https://github.com/EconObs" target="_blank" class="link-card">
		                <div class="link-info">
		                    <strong>GitHub Organization</strong>
		                    <span>Conheça a EconObs e outros repositórios</span>
		                </div>
		                <div class="arrow">&rarr;</div>
		            </a>
		        </div>
		
		        <div class="footer">
		            Mantido por <a href="https://github.com/EconObs" target="_blank">EconObs</a> &bull; Todos os direitos reservados.
		        </div>
		    </div>
		
		</body>
		</html>
	`;
});


const PORT = Deno.env.get('PORT') || '8000';

console.log(`Server running on http://localhost:${PORT}`);

await app.listen({ port: parseInt(PORT) });
