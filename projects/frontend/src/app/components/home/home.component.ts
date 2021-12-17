import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public sub_title: string;
  public articles = [];

  constructor(
    private _articleService: ArticleService
  ) {

    this.title = 'HN Feed';
    this.sub_title = 'We <3 hacker news!';

  }

  ngOnInit(): void {
      this.getArticles()
  }

  getArticles() {
    this._articleService.getArticles().subscribe((resp:any) => {
      if (resp.data.getArticle) {
        this.articles = resp.data.getArticle;
        console.log(this.articles)
      }
    },
      error => {
        console.log(error);
      }
    );
  }
}
