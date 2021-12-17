import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";

const ARTICLES = gql`
    query getArticle {
      getArticle {
        _id
        story_title
        title
        story_url
        author
        created_at
      }
    }
`;

const REMOVE = gql`
  mutation removeArticle($input: RemoveInput!) {
    removeArticle(input: $input) {
      _id
      story_title
      title
      story_url
      author
      created_at
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private apollo: Apollo) { }

  getArticles(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: ARTICLES,
    }).valueChanges;
  };

  removeArticle(_id: string): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: REMOVE,
      variables: {
        input: {
          _id: _id,
        },
      },
    });
  };
}
