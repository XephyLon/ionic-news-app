import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-news-ksa',
  templateUrl: './google-news-ksa.page.html',
  styleUrls: ['./google-news-ksa.page.scss'],
})
export class GoogleNewsKSAPage implements OnInit {

  GoogleNewsKSA: string = 'sources=google-news-sa'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.GoogleNewsKSA).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
