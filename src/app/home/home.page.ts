import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  @Input() public mySearch: string;

  generalNews: string = `q=-ش&language=en&sortBy=publishedAt`
  data?: any;
  articles: Array<Object> = []
  autocomplete: Array<Object> = []
  query: Array<any> = []

  constructor(private newsService: NewsService, private router: Router) {
    this.InitializeItems()
  }

  ngOnInit() {
    this.newsService.getData(this.generalNews).subscribe(data => {
      this.data = data;
      this.articles = [...data["articles"]]
      for( let article of this.articles) {
        this.autocomplete.push(article)
      }
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }
  InitializeItems() {
    this.autocomplete
  }

  getItems(event) {
    this.query = this.autocomplete

    const val = event.target.value
    if (val && val.trim() != '') {
      this.query = this.query.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

    } else {
      this.query = []
    }
  }
}
