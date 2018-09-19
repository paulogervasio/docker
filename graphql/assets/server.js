var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');


var app = express();
var MyGraphQLSchema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`);


var root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  },
};


app.use('/graphql', graphqlHTTP({
  	schema: MyGraphQLSchema,
  	rootValue: root,
	graphiql: true

}));

app.listen(4000);
console.log("listening 4000... try localhost:4000/graphql")
