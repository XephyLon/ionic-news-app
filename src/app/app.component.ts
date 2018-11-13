import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Latest News',
      url: '',
      icon: 'http://icon-park.com/imagefiles/new_circle_icon_light_blue.png'
    },
    {
      title: 'ABC News',
      url: '/ABCNews',
      icon: 'https://icon-locator.herokuapp.com/icon?url=https://abcnews.go.com&size=70..120..200'
    },
    {
      title: 'Al Jazeera English',
      url: '/AlJazeeraEnglish',
      icon: 'https://yt3.ggpht.com/a-/AN66SAzO9WeVbO4uP4svBLZ9TOSfSL7xE0-weyWDDA=s900-mo-c-c0xffffffff-rj-k-no'
    },
    {
      title: 'BBC News',
      url: '/BBCNews',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.bbc.co.uk/news&size=70..120..200'
    },
    {
      title: 'Business Insider',
      url: '/BusinessInsider',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.businessinsider.com&size=70..120..200'
    },
    {
      title: 'CBC News',
      url: '/CBCNews',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.cbc.ca/news&size=70..120..200'
    },
    {
      title: 'CNN News',
      url: '/CNNNews',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://us.cnn.com&size=70..120..200'
    },
    {
      title: 'Fox News',
      url: '/FoxNews',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.foxnews.com&size=70..120..200'
    },
    {
      title: 'Google News',
      url: '/GoogleNews',
      icon: 'https://icon-locator.herokuapp.com/icon?url=https://news.google.com&size=70..120..200'
    },
    {
      title: 'Google News KSA',
      url: '/GoogleNewsKSA',
      icon: 'https://icon-locator.herokuapp.com/icon?url=https://news.google.com&size=70..120..200'
    },
    {
      title: 'Hacker News',
      url: '/HackerNews',
      icon: 'https://icon-locator.herokuapp.com/icon?url=https://news.ycombinator.com&size=70..120..200'
    },
    {
      title: 'IGN',
      url: '/IGN',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.ign.com&size=70..120..200'
    },
    {
      title: 'Independent',
      url: '/Independent',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.independent.co.uk&size=70..120..200'
    },
    {
      title: 'Mashable',
      url: '/Mashable',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://mashable.com&size=70..120..200'
    },
    {
      title: 'Medical News Today',
      url: '/MedicalNewsToday',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.medicalnewstoday.com&size=70..120..200'
    },
    {
      title: 'Metro',
      url: '/Metro',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://metro.co.uk&size=70..120..200'
    },
    {
      title: 'MTV News',
      url: '/MTVNews',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.mtv.com/news&size=70..120..200'
    },
    {
      title: 'National Geographic',
      url: '/NationalGeographic',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://news.nationalgeographic.com&size=70..120..200'
    },
    {
      title: 'NBC News',
      url: '/NBCNews',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.nbcnews.com&size=70..120..200'
    },
    {
      title: 'News24',
      url: '/News24',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.news24.com&size=70..120..200'
    },
    {
      title: 'New York Magazine',
      url: '/NewYorkMagazine',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://nymag.com&size=70..120..200'
    },
    {
      title: 'RT',
      url: '/RT',
      icon: 'https://icon-locator.herokuapp.com/icon?url=https://russian.rt.com&size=70..120..200'
    },
    {
      title: 'TechCrunch',
      url: '/TechCrunch',
      icon: 'https://icon-locator.herokuapp.com/icon?url=https://techcrunch.com&size=70..120..200'
    },
    {
      title: 'TechRadar',
      url: '/TechRadar',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.techradar.com&size=70..120..200'
    },
    {
      title: 'The New York Times',
      url: '/TheNewYorkTimes',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://www.nytimes.com&size=70..120..200'
    },
    {
      title: 'The Next Web',
      url: '/TheNextWeb',
      icon: 'https://icon-locator.herokuapp.com/icon?url=http://thenextweb.com&size=70..120..200'
    },
    {
      title: 'The Washington Times',
      url: '/TheWashingtonTimes',
      icon: 'https://icon-locator.herokuapp.com/icon?url=https://www.washingtontimes.com/&size=70..120..200'
    },
  ]
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
