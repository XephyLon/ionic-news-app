import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bbcnews',
  templateUrl: './bbcnews.page.html',
  styleUrls: ['./bbcnews.page.scss'],
})
export class BBCNewsPage implements OnInit {

  BBCNews: string = 'sources=bbc-news'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.BBCNews).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
