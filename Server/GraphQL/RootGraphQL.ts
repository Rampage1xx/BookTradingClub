import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import {UserBooksGraphQueryQL} from './UsersGraphQL';

const QueryGroup = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        UserBooksGraphQueryQL
    })
});

const RootSchema = new GraphQLSchema({
    query: QueryGroup
});

export {RootSchema};
