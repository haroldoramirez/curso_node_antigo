import { UserModel } from "@modules/user/user.model";
import { sign } from 'jsonwebtoken';

export const PASSWORD_JWT = 'senhadepoismudar';

export const generateToken = (user: UserModel): string => {

    return sign(

        {
            userId: user.id, // 1 - Payload
            email: user.email,
            tipo: user.typeUser,
        }, 
        PASSWORD_JWT, // 2 - Password Token variavel de ambiente
        {
            subject: String(user.id), // 3 Subject
            expiresIn: '604800000',
        }

    );

};