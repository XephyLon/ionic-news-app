import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-insider',
  templateUrl: './business-insider.page.html',
  styleUrls: ['./business-insider.page.scss'],
})
export class BusinessInsiderPage implements OnInit {

  BusinessInsider: string = 'sources=business-insider'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.BusinessInsider).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
