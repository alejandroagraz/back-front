import { Document } from 'mongoose';

export interface Article extends Document {
  readonly _id: string;
  readonly story_title: string;
  readonly title: string;
  readonly story_url: string;
  readonly author: string;
  readonly deleted: number;
  readonly created_at: Date;
}
