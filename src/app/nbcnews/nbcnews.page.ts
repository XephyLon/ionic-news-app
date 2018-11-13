import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbcnews',
  templateUrl: './nbcnews.page.html',
  styleUrls: ['./nbcnews.page.scss'],
})
export class NBCNewsPage implements OnInit {

  NBCNews: string = 'sources=nbc-news'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.NBCNews).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
