import {deepEqual} from 'assert';
import {BooksSequelize, bookTradingConnection, TradeSequelize, UserSequelize} from '../database/SequelizeTables';
import {IBookAttribute, IBookInstance, ITradeAttributes, IUserInstance} from '../Types/SequelizeTypes';
import {bookParameters, bookParameters2, findUser, userParameters, userParameters2} from './variables.test';

const includeParameter: { include: IBookAttribute[] } = {
    include: [BooksSequelize]
};

before('clear databases', async () => {

    await  bookTradingConnection.sync({force: true})
        .then(r => console.log('postgres cleared'))
        .catch(e => e);

});

describe('testing database functionality', (): void => {

    it('should create an user', async (): Promise<void> => {

        const user: IUserInstance = await  UserSequelize.create({
            ...userParameters
        });

        const user2: IUserInstance = await UserSequelize.create({
            ...userParameters2
        });

        deepEqual(user.userName, userParameters.userName);
        deepEqual(user2.userName, userParameters2.userName);
    });

    it('should create a book and link it to a user', async () => {
        const user: IUserInstance = await findUser(userParameters.userName);
        const user2: IUserInstance = await findUser(userParameters2.userName);
        const book: IBookInstance = await BooksSequelize.create({
            ...bookParameters,
            owner: user.userName,
            user_id: user.id
        });

        const book2: IBookInstance = await BooksSequelize.create({
            ...bookParameters2,
            owner: user2.userName,
            user_id: user2.id
        });

        deepEqual(book2.description, bookParameters2.description);
        deepEqual(user2.id, book2.user_id);

        deepEqual(book.description, bookParameters.description);
        deepEqual(user.id, book.user_id);

    });

    it('should retrieve user books', async () => {

        const user: IUserInstance = await findUser(userParameters.userName, includeParameter);
        //  console.log(Object.getOwnPropertyNames(user.books[0].dataValues));
        deepEqual(user.books[0].dataValues.title, bookParameters.title);
    });

    xit(' should create a trade', async () => {
        const user1: IUserInstance = await findUser(userParameters.userName);
        const user2: IUserInstance = await findUser(userParameters2.userName);
        const book1: IBookInstance = await BooksSequelize.find({
            where: {
                title: bookParameters.title
            }
        });
        const book2: IBookInstance = await BooksSequelize.find({
            where: {
                title: bookParameters2.title
            }
        });

        const trade: ITradeAttributes = await  TradeSequelize.create({
            item_offered: book1.id,
            item_wanted: book2.id
        });

        deepEqual(trade.item_wanted, book2.id);
        deepEqual(trade.item_offered, book1.id);
    });

    xit('should decline the offer', async () => {
        const book: IBookInstance = await BooksSequelize.find({
            where: {
                title: bookParameters.title
            },
            include: [TradeSequelize, UserSequelize]
        });

        console.log(book);

        const user: IUserInstance = await UserSequelize.find({
            where: {
                userName: userParameters.userName
            },
            include: [BooksSequelize]
        });

      //  console.log(user, 'aa')
    });

});
