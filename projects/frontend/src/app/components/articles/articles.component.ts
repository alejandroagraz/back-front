import { Component, OnInit, Input} from '@angular/core';
import {ArticleService} from "../../services/articles.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {

  @Input() articles: any;
  public response: [];

  constructor(private _articleService: ArticleService, private router: Router){
    this.articles = [];
    this.response = [];
  }

  ngOnInit() {
  }

  newTab(url: string){
    window.open(url, "_blank");
  }

  removeArticle(data: any) {
    this._articleService.removeArticle(data._id).subscribe(async (resp: any) => {
        if (resp.data.removeArticle) {
          this.response = resp.data.removeArticle;
          if (this.response) {
            this.articles = this.response
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
