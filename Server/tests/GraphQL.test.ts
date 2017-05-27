import {deepEqual} from 'assert';
import {Server} from '../server';
import {IUserInstance} from '../Types/SequelizeTypes';
import './databases.test';
import {bookParameters, findUser, instance1, userParameters, UserQuery} from './variables.test';

const QueryQL = () => instance1.post('/graphql');
describe('testing GraphQL', () => {
    it('should query GraphQL', async (): Promise<void> => {
        const user: IUserInstance = await findUser(userParameters.userName);
        const result: any = await QueryQL()
            .send({
                query: UserQuery,
                variables: {UserID: `${user.id}`}
            });
        // extract results
        const {UserBooksGraphQueryQL} = result.body.data;
        deepEqual(UserBooksGraphQueryQL.books[0].title,
            bookParameters.title, 'should fetch a book from the db via GRAPHQL');
    });
});

Server.close();
