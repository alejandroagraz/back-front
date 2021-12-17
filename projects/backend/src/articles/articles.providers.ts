import { Connection } from 'mongoose';
import { ArticleSchema } from './schemas/articles.schema';

export const articlesProviders = [
  {
    provide: 'DATA_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('articles', ArticleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
