import { Request, Response, Router } from 'express';
import { createUser, getUsers } from './user.service';
import { UserInsertDTO } from './dtos/user-insert.dto';
import { NotFoundException } from '@exceptions/not-found-exception';
import { ReturnError } from '@exceptions/dtos/return-error-dto';
import { verifyToken } from '@utils/auth';

export const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/', async (req: Request, res: Response): Promise<void> => {
  const authorization = req.headers.authorization;

  verifyToken(authorization).catch((error) => {
    new ReturnError(res, error);
  });

  const users = await getUsers().catch((error) => {
    if (error instanceof NotFoundException) {
      res.status(204); // No Content
    } else {
      new ReturnError(res, error);
    }
  });

  res.send(users);
});

router.post(
  '/',
  async (req: Request<undefined, undefined, UserInsertDTO>, res: Response): Promise<void> => {
    const user = await createUser(req.body).catch((error) => {
      new ReturnError(res, error);
    });

    res.send(user);
  },
);
