import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { createConnection } from "typeorm";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
createConnection;
server.start(() => console.log("Server is running on localhost:4000"));