import express from 'express';
import cors from 'cors';
import {createExpressMiddleware} from '@trpc/server/adapters/express';
import appRouter from './routers/appRouter';
import { connectWithSequelize } from './sequelize/connectionToDB';

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/trpc', createExpressMiddleware({router: appRouter}));

connectWithSequelize();
app.listen(3000, () => {
    console.log('server start');
});

console.log('shlomtzion');

export type AppRouter = typeof appRouter;
