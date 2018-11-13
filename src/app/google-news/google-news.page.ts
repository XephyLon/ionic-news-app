import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-news',
  templateUrl: './google-news.page.html',
  styleUrls: ['./google-news.page.scss'],
})
export class GoogleNewsPage implements OnInit {

  GoogleNews: string = 'sources=google-news'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.GoogleNews).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
