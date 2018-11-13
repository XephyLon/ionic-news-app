import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-radar',
  templateUrl: './tech-radar.page.html',
  styleUrls: ['./tech-radar.page.scss'],
})
export class TechRadarPage implements OnInit {

  techRadar: string = 'sources=techradar'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.techRadar).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
