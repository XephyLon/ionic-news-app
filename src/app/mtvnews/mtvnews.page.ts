import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtvnews',
  templateUrl: './mtvnews.page.html',
  styleUrls: ['./mtvnews.page.scss'],
})
export class MTVNewsPage implements OnInit {

  MTVNews: string = 'sources=mtv-news'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.MTVNews).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
