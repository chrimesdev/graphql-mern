const express = require('express');
const graphqlHTTP = require('express-graphql');
const GraphQLSchema = require('./schema/schema'); 

const app = express();
const port = 4000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: GraphQLSchema,
    graphiql: true,
  }),
);

app.listen(port, () => {
  console.log(`Listening for requests at http://localhost:${port}`);
});
