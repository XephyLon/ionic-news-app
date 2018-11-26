import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: any;

  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http.get(API_URL + "everything?" + url + '&apiKey=' + API_KEY);
  }

  getTitle(articles: Array<Object>): Promise<Object[]> {
    return Promise.resolve(articles)
  }
}
