import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-crunch',
  templateUrl: './tech-crunch.page.html',
  styleUrls: ['./tech-crunch.page.scss'],
})
export class TechCrunchPage implements OnInit {

  techCrunch: string = 'sources=techcrunch'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.techCrunch).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
