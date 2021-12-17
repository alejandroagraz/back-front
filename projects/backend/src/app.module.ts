import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
import { AuthsModule } from './auths/auths.module';
import { UsersModule } from './users/users.module';
import { ArticleModule } from './articles/articles.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './commands/tasks/tasks.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './graphql/schema.gql',
      context: ({ req }) => ({ req }),
    }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    AuthsModule,
    UsersModule,
    ArticleModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
