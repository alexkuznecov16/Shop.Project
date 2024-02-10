import express, { Express } from "express";

export default function (): Express {
    const app = express();
    app.use(express.json());

    app.use("/", (_, res) => {
        const html = `<html>

        <body>
            <div>
                <ul>
                    <% items.forEach(function(product) { %>
                    <li>
                        <%= product.title %>
                    </li>
                    <% }); %>
                </ul>
            </div>
        </body>
        
        </html>`
        res.send(html);
    });

    return app;
}