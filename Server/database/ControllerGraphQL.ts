import * as Bluebird from 'bluebird';
import {BooksSequelize, UserSequelize} from './SequelizeTables';

const getUserBooks = (args: IUserBooksGraphQueryQL): Bluebird<any> => {
    const {UserID} = args;
    return UserSequelize.findById(UserID, {include: [BooksSequelize]})
        .then(user => user);

};

export{getUserBooks};
