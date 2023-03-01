import express from "express";
import { readFileSync } from "node:fs";
import { createSchema, createYoga } from "graphql-yoga";
import { Resolvers } from "./gql/server/resolvers-types";

const typeDefs = readFileSync("./schema.graphql", "utf8");

const resolvers: Resolvers = {
  Query: {
    posts: async () => {
      return [
        {
          id: 1,
          title: "hi",
        },
      ];
    },
  },
};

const schema = createSchema({typeDefs, resolvers});
const graphQLServer = createYoga({ schema });

const app = express();
app.use("/graphql", graphQLServer);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
