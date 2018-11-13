import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cbcnews',
  templateUrl: './cbcnews.page.html',
  styleUrls: ['./cbcnews.page.scss'],
})
export class CBCNewsPage implements OnInit {

  CBCNews: string = 'sources=cbc-news'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.CBCNews).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
