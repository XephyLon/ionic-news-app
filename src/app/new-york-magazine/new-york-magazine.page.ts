import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-york-magazine',
  templateUrl: './new-york-magazine.page.html',
  styleUrls: ['./new-york-magazine.page.scss'],
})
export class NewYorkMagazinePage implements OnInit {

  NewYorkMagazine: string = 'sources=new-york-magazine'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.NewYorkMagazine).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
