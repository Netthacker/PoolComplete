import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'


//Rotas
import { authRoutes } from './routes/auth'
import { gameRoutes } from './routes/game'
import { guessRoutes } from './routes/guess'
import { userRoutes } from './routes/user'
import { poolRoutes } from './routes/pool'


async function bootstrap(){
  const fastify = Fastify({
    logger: true,
  })

  //o origin é pra dizer quem pode consumir a aplicação, depois deve ter informando somente quem poderá consumir

  await fastify.register(cors, {
    origin:true,
  })

  //jwt precisa estar em variável de ambiente

  await fastify.register(jwt,{
    secret: 'copabolao',
  })

  //Rotas
  
  await fastify.register(authRoutes)
  await fastify.register(gameRoutes)
  await fastify.register(guessRoutes)
  await fastify.register(poolRoutes)
  await fastify.register(userRoutes)


  

  
  //o host desse jeito é para ser consumido pelo mobile

  await fastify.listen({ port:3333, host:'0.0.0.0' })

}

bootstrap()