import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools';
//import  {merge}  from 'lodash/merge';
import ResolutionSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionResolvers from '../../api/resolutions/resolvers';

var merge = require('deepmerge');

const testSchema = `
type Query{
    hi: String
    resolutions: [Resolution]
}
`;

const typeDefs = [
    testSchema,
    ResolutionSchema,
]

const testResolvers = {
    Query: {
        hi() {
            return 'welcome saikumar'
        },
    }
};

const resolvers = merge(testResolvers, ResolutionResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

createApolloServer({
    schema
})

