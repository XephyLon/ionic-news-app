import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ign',
  templateUrl: './ign.page.html',
  styleUrls: ['./ign.page.scss'],
})
export class IGNPage implements OnInit {

  IGN: string = 'sources=ign'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.IGN).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
