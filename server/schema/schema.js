const graphql = require("graphql")

const { GraphQLObjectType } = graphql

//　インスタンスの生成->動画の情報
const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString}
    genre: {type: GraphQLString}
  })
})
// 外部からの読込
const RootQuery = new RootQuery({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: {id:{type:GraphQLString}},
      resolve(parents, args){

      }
    }
  }

})