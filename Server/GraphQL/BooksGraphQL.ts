import {GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import {UsersGraphQL} from './UsersGraphQL';

const BooksGraphQL = new GraphQLObjectType({
    name: 'books',
    fields: () => ({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        user: {type: new GraphQLList(UsersGraphQL)},
        owner: {type: GraphQLString}
    })
});



export { BooksGraphQL }
