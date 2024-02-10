import { Request, Response, Router } from 'express';
import express from 'express';
import { CommentCreatePayload, IComment } from '../../Shared/types'; // types of data
import { readFile, writeFile } from 'fs/promises';
import { createServer, IncomingMessage, ServerResponse } from 'http';

export const productsRouter = Router();

productsRouter.get('/', async (req: Request, res: Response) => {
  const comments = await loadComments();
  res.setHeader('Content-type', 'application/json');
  res.send(comments);
})

// // function - server return data
const server = createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
      if (req.url === '/admin' && req.method === 'GET') {
          const comments = await loadComments();

          res.setHeader('Content-Type', 'application/json');
          res.write(JSON.stringify(comments));
          res.end();
      } else if (req.url === '/admin' && req.method === 'POST') {
          let rawBody = '';
          req.on('data', (chunk) => {
              rawBody += chunk.toString();
          });

          req.on('end', () => {
              console.log(JSON.parse(rawBody));
              res.end('OK');
          });
      } else {
          res.statusCode = 404;
          res.end('Not found');
      }
  }
);

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// const app = express();

const jsonMiddleware = express.json(); // middleware — промежуточный обработчик, который позволит нам удобно работать с body POST-запроса.
// app.use(jsonMiddleware);

const loadComments = async (): Promise<IComment[]> => {
  const rawData = await readFile('mock-comments.json', 'binary');
  return JSON.parse(rawData.toString());
};