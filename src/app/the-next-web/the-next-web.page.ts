import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-next-web',
  templateUrl: './the-next-web.page.html',
  styleUrls: ['./the-next-web.page.scss'],
})
export class TheNextWebPage implements OnInit {

  nextWeb: string = 'sources=the-next-web'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.nextWeb).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
