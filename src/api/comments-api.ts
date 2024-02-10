import { Request, Response, Router } from 'express';
import express from 'express';
import { CommentCreatePayload, IComment } from '../../Shared/types'; // types of data
import { readFile, writeFile } from 'fs/promises';
import { createServer, IncomingMessage, ServerResponse } from 'http';

// import { createServer, IncomingMessage, ServerResponse } from 'http'; // for requests
// import { IComment } from './types'; // types of data
// import { readFile } from 'fs/promises'; // for files reading

// // function - open file and return it data
// const loadComments = async (): Promise<IComment[]> => {
//   const rawData = await readFile('mock-comments.json', 'binary');
//   return JSON.parse(rawData.toString());
// }

export const commentsRouter = Router();

commentsRouter.get('/', async (req: Request, res: Response) => {
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

const validateComment = (body: CommentCreatePayload): string | undefined => {
    if (!body || !body.toString) {
        return 'Comment text is too short.';
    }
    // Add other validation rules as needed
    return undefined; // Indicates successful validation
};

const saveComments = async (data: IComment[]): Promise<void> => {
    await writeFile('mock-comments.json', JSON.stringify(data));
};

const compareValues = (target: string, compare: string): boolean => {
    return target.toLowerCase() === compare.toLowerCase();
};

// export const checkCommentUniq = (payload: CommentCreatePayload, comments: IComment[]): boolean => {
//   const byEmail = comments.find(({ email }) => compareValues(payload.email, email));

//   if (!byEmail) {
//       return true;
//   }

//   const { body, name, postId } = byEmail;
//   return !(
//       compareValues(payload.body, body) &&
//       compareValues(payload.name, name) &&
//       compareValues(payload.postId.toString(), postId.toString())
//   );
// }

// const PATH = "/admin"; // endpoint

// app.get(`${PATH}/:id`, async (req: Request<{ id: string }>, res: Response) => {
//   const comments = await loadComments();
//   const id = req.params.id;

//   const targetComment = comments.find(comment => id === comment.id.toString());

//   if (!targetComment) {
//     res.status(404);
//     res.send(`Comment with id ${id} is not found`);
//     return;
//   }

//   res.setHeader('Content-Type', 'application/json');
//   res.send(targetComment);
// });

// app.post(PATH, async (req: Request<{}, {}, CommentCreatePayload>, res: Response) => {
//   const validationResult = validateComment(req.body);

//   if (validationResult) {
//       res.status(400);
//       res.send(validationResult);
//       return;
//   }

//   const comments = await loadComments();
//   const isUniq = checkCommentUniq(req.body, comments);

//   if (!isUniq) {
//       res.status(422);
//       res.send("Comment with the same fields already exists");
//       return;
//   }

//   const id = uuidv4();
//   comments.push({ ...req.body, id } as IComment);
//   await saveComments(comments);

//   res.status(201);
//   console.log(comments[comments.length - 1]);
//   res.send(`Comment id:${id} has been added!`);
// });

// const PORT = 8080;

// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });
