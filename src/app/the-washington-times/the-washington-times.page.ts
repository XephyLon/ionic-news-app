import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-washington-times',
  templateUrl: './the-washington-times.page.html',
  styleUrls: ['./the-washington-times.page.scss'],
})
export class TheWashingtonTimesPage implements OnInit {

  washingtonTimes: string = 'sources=the-washington-times'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.washingtonTimes).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
