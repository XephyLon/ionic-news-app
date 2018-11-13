import { Router } from '@angular/router';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-al-jazeera-english',
  templateUrl: './al-jazeera-english.page.html',
  styleUrls: ['./al-jazeera-english.page.scss'],
})
export class AlJazeeraEnglishPage implements OnInit {

  AlJazeeraEnglish: string = 'sources=al-jazeera-english'
  data?: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData(this.AlJazeeraEnglish).subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
