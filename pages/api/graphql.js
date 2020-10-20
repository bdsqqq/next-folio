import { ApolloServer, gql } from "apollo-server-micro";
import { makeExecutableSchema } from "graphql-tools";
import { connectToDatabase } from "../../util/mongodb";

const typeDefs = gql`
  type Project {
    id: ID!
    description: String
    img: String
    height: String
    demo: String
    name: String!
    order: String!
    role: String
    source: String
    tools: [String]
    year: String
  }

  type Query {
    projects: [Project]!
  }
`;

const resolvers = {
  Query: {
    projects: async (_parent, _args, _context, _info) => {
      return await _context.db
        .collection("projects")
        .find({})
        .limit(20)
        .toArray();
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    return await connectToDatabase();
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
