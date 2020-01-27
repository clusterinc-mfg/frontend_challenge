import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'

import Query from './server/resolvers/Query'

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

const server = new GraphQLServer({
    typeDefs: './server/schema.graphql',
    resolvers: {
        Query
    }
})

const options = {
    port: process.env.PORT || 3010,
    endpoint: "/",
    playground: '/gql'
}


server.start( options, ()=>{
    console.log('server has started')
})