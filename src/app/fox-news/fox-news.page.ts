import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fox-news',
  templateUrl: './fox-news.page.html',
  styleUrls: ['./fox-news.page.scss'],
})
export class FoxNewsPage implements OnInit {

  FoxNews: string = 'sources=fox-news'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.FoxNews).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
