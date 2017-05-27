import {agent} from 'supertest';
import {UserSequelize} from '../database/SequelizeTables';
import {app} from '../server';

const instance1 = agent(app);

const userParameters2= {
    userName: 'Conker',
    password: 'Reloaded'
};

const userParameters = {
    userName: 'BattleToads',
    password: 'BestGameEver'
};

interface IBookParameters {
    title: string;
    description: string;
}

const bookParameters: IBookParameters = {
    title: 'Node.js',
    description: 'is'
};

const bookParameters2: IBookParameters = {
    title: 'Scala',
    description: 'is'
}

const findUser = (userName: string, parameters?) => UserSequelize.find({
    where: {
        userName
    }, ...parameters
});

const UserQuery = `
query UserData($UserID: String!) {
  UserBooksGraphQueryQL(UserID: $UserID) {
    id
    name
    userName
    books {
      id
      title
      description
      owner
    }
    city
    state
    contact
  }
}

`;

export {userParameters, bookParameters, findUser, instance1, UserQuery, userParameters2, bookParameters2};
