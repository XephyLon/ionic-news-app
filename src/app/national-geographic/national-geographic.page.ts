import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-national-geographic',
  templateUrl: './national-geographic.page.html',
  styleUrls: ['./national-geographic.page.scss'],
})
export class NationalGeographicPage implements OnInit {

  NatGeo: string = 'sources=national-geographic'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.NatGeo).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
