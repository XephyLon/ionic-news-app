import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-independent',
  templateUrl: './independent.page.html',
  styleUrls: ['./independent.page.scss'],
})
export class IndependentPage implements OnInit {

  Independent: string = 'sources=independant'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.Independent).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
