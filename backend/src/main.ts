import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import Redis from 'ioredis';
//eslint-disable-next-line
let RedisStore = require('connect-redis')(session);

const port = process.env.PORT || 3001;
const cookie_secret = process.env.COOKIE_SECRET || 'ergh98';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const redis = new Redis();
  app.enableCors({
    origin: ['http://localhost:3000', '*'],
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
  });
  app.use(
    session({
      name: 'userId',
      store: new RedisStore({ client: redis }),
      secret: cookie_secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10 * 40,
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      },
    }),
  );
  await app.listen(port);
}
bootstrap();
