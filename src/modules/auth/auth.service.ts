import { UserModel } from '@modules/user/user.model';
import { AuthDTO } from './dtos/auth.dto';
import { getUserByEmail } from '@modules/user/user.service';
import { validatePassword } from '@utils/password';
import { NotFoundException } from '@exceptions/not-found-exception';

export const validateAuth = async (authDTO: AuthDTO): Promise<UserModel> => {
  const user = await getUserByEmail(authDTO.email);

  const isValidPassword = await validatePassword(authDTO.password, user.password);

  if (!isValidPassword) {
    throw new NotFoundException('User');
  }

  return user;
};
