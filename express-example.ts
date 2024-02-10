// // import { v4 as uuidv4 } from 'uuid';
// import { Request, Response } from 'express';
// import express from 'express';
// import { CommentCreatePayload, IComment } from './types';
// import { readFile, writeFile } from 'fs/promises';

// const app = express();

// const jsonMiddleware = express.json();
// app.use(jsonMiddleware);

// const loadComments = async (): Promise<IComment[]> => {
//     const rawData = await readFile('mock-comments.json', 'binary');
//     return JSON.parse(rawData.toString());
// };

// const PATH = '/api/comments';

// app.get(PATH, async (req: Request, res: Response) => {
//     //   const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Пример сайта</title><style>body {font-family: Arial, sans-serif;margin: 0;padding: 0;background-color: #f2f2f2;}header {background-color: #333;color: white;padding: 1em;text-align: center;}nav {background-color: #444;padding: 0.5em;}nav a {color: white;text-decoration: none;padding: 0.5em 1em;margin: 0 0.5em;border-radius: 5px;transition: background-color 0.3s;}nav a:hover {background-color: #555;}section {padding: 2em;}footer {background-color: #333;color: white;text-align: center;padding: 1em;position: fixed;bottom: 0;width: 100%;}</style></head><body><header><h1>Мой сайт</h1></header><nav><a href="#">Главная</a><a href="#">О нас</a><a href="#">Услуги</a><a href="#">Контакты</a></nav><section><h2>Добро пожаловать на наш сайт!</h2><p>Здесь вы можете узнать больше о нас и наших услугах.</p></section><footer>&copy; 2024 Мой сайт. Все права защищены.</footer></body></html>`;

//     const comments = await loadComments();
//     res.setHeader('Content-Type', 'application/json');
//     res.send(comments);
// });

// // Function - check uniq values
// const checkCommentUniq = (
//     payload: CommentCreatePayload,
//     comments: IComment[]
// ): boolean => {
//     return !comments.some((comment) => comment.body === payload.body);
// };

// // Function - comment validation
// const validateComment = (body: CommentCreatePayload): string | undefined => {
//     if (!body || !body.toString) {
//         return 'Comment text is too short.';
//     }
//     // Add other validation rules as needed
//     return undefined; // Indicates successful validation
// };

// // Function - save comment
// const saveComments = async (data: IComment[]): Promise<boolean> => {
//     try {
//         await writeFile('mock-comments.json', JSON.stringify(data));
//         return true;
//     } catch (e) {
//         return false;
//     }
// };

// // Function - compare value (сравнивает значения)
// const compareValues = (target: string, compare: string): boolean => {
//     return target === compare;
// };

// app.post(
//     PATH,
//     async (
//         req: Request<{}, {}, CommentCreatePayload> /* Request with types */,
//         res: Response
//     ) => {
//         const newComment = req.body as CommentCreatePayload;
//         const validationResult = validateComment(newComment);
//         if (validationResult) {
//             res.status(400);
//             res.send(validationResult);
//             return;
//         }

//         const comments = await loadComments();
//         const isUniq = checkCommentUniq(req.body, comments);

//         if (!isUniq) {
//             res.status(422);
//             console.log('Comment with the same fields already exists');
//             res.send('Comment with the same fields already exists');
//             return;
//         }

//         const id = uuidv4();
//         comments.push({ ...req.body, id });

//         const saved = await saveComments(comments);

//         if (!saved) {
//             res.status(500);
//             res.send('Server error. Comment has not been created');
//             return;
//         }

//         res.status(201);
//         res.send(`Comment id:${id} has been added!`);
//     }
// );

// const PORT = 3001;

// app.listen(PORT, () => {
//     console.log(`Express server listening on port ${PORT}`);
// });
