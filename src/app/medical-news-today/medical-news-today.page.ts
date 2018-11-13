import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-news-today',
  templateUrl: './medical-news-today.page.html',
  styleUrls: ['./medical-news-today.page.scss'],
})
export class MedicalNewsTodayPage implements OnInit {

  MedicalNewsToday: string = 'sources=medical-news-today'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.MedicalNewsToday).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
