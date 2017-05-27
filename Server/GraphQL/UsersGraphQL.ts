import {
    GraphQLFieldConfigMap, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLScalarType, GraphQLString
} from 'graphql';
import {BooksGraphQL} from './BooksGraphQL';
import {getUserBooks} from '../database/ControllerGraphQL';


const UsersGraphQL = new GraphQLObjectType({
    name: 'users',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        contact: {type: GraphQLString},
        books: {type: new GraphQLList(BooksGraphQL)},
        userName: { type: GraphQLString}
    })
});



const UserBooksGraphQueryQL = {
    type: UsersGraphQL,
    args: {
        //RetrieveBooks: {type: GraphQLInt},
        UserID: {type: GraphQLString}
    },
    resolve: (parentValue, args: IUserBooksGraphQueryQL, req) => {
        return getUserBooks(args)
    }
};

export {UsersGraphQL, BooksGraphQL, UserBooksGraphQueryQL};
