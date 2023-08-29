import express from 'express';
import { userRouter } from './modules/user/user.controller';
import { productRouter } from './modules/products/product.controller';
import authRouter from '@modules/auth/auth.controller';

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(authRouter);
app.use(productRouter);

app.listen(8080, (): void => {
  console.log('Servidor rodando');
});
