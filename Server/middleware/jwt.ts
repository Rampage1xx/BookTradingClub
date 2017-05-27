import * as jwt from 'jsonwebtoken';

const tokenSign = async (payload: object): Promise<string> => {

    const access: string = 'starcraft';

    return await jwt.sign({payload}, access);

    //res.header(x-auth).json(token)
};
