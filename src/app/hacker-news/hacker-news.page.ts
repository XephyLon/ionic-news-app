import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.page.html',
  styleUrls: ['./hacker-news.page.scss'],
})
export class HackerNewsPage implements OnInit {

  HackerNews: string = 'sources=hacker-news'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.HackerNews).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
