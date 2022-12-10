import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//define data set
const users = [
  {
    name: "aaa bbbb",
    id: "0001",
    t_number: "0123456789",
  },
  {
    name: "ccc dddd",
    id: "0002",
    t_number: "0123456780",
  },
  {
    name: "eeee ffff",
    id: "0003",
    t_number: "0123456781",
  },
];

//define Gql schema
const typeDefs = `
  type User {
    name: String
    id: String
    t_number: String
  }

  type Query {
    users: [User]
  }
`;

//define resolvers
const resolvers = {
  Query: {
    users: () => users,
  },
};

// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
