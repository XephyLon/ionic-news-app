import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-new-york-times',
  templateUrl: './the-new-york-times.page.html',
  styleUrls: ['./the-new-york-times.page.scss'],
})
export class TheNewYorkTimesPage implements OnInit {

  yorkTimes: string = 'sources=the-new-york-times'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.yorkTimes).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
