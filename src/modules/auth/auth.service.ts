import { UserModel } from '@modules/user/user.model';
import { AuthDTO } from './dtos/auth.dto';
import { getUserByEmail } from '@modules/user/user.service';

export const validateAuth = async (authDTO: AuthDTO): Promise<UserModel> => {
  const user = getUserByEmail(authDTO.email);

  return user;
};
