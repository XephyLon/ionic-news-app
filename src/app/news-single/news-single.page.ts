import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  currentArticle: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.currentArticle = this.newsService.currentArticle;
  }

}
