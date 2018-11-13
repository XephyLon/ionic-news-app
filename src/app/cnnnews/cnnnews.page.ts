import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cnnnews',
  templateUrl: './cnnnews.page.html',
  styleUrls: ['./cnnnews.page.scss'],
})
export class CNNNewsPage implements OnInit {

  CNNNews: string = 'sources=cnn'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.CNNNews).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
