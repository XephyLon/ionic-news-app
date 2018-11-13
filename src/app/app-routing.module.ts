import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-single', loadChildren: './news-single/news-single.module#NewsSinglePageModule' },
  { path: 'ABCNews', loadChildren: './abcnews/abcnews.module#ABCNewsPageModule' },
  { path: 'AlJazeeraEnglish', loadChildren: './al-jazeera-english/al-jazeera-english.module#AlJazeeraEnglishPageModule' },
  { path: 'BBCNews', loadChildren: './bbcnews/bbcnews.module#BBCNewsPageModule' },
  { path: 'BusinessInsider', loadChildren: './business-insider/business-insider.module#BusinessInsiderPageModule' },
  { path: 'CBCNews', loadChildren: './cbcnews/cbcnews.module#CBCNewsPageModule' },
  { path: 'CNNNews', loadChildren: './cnnnews/cnnnews.module#CNNNewsPageModule' },
  { path: 'FoxNews', loadChildren: './fox-news/fox-news.module#FoxNewsPageModule' },
  { path: 'GoogleNews', loadChildren: './google-news/google-news.module#GoogleNewsPageModule' },
  { path: 'GoogleNewsKSA', loadChildren: './google-news-ksa/google-news-ksa.module#GoogleNewsKSAPageModule' },
  { path: 'HackerNews', loadChildren: './hacker-news/hacker-news.module#HackerNewsPageModule' },
  { path: 'IGN', loadChildren: './ign/ign.module#IGNPageModule' },
  { path: 'Independent', loadChildren: './independent/independent.module#IndependentPageModule' },
  { path: 'Mashable', loadChildren: './mashable/mashable.module#MashablePageModule' },
  { path: 'MedicalNewsToday', loadChildren: './medical-news-today/medical-news-today.module#MedicalNewsTodayPageModule' },
  { path: 'Metro', loadChildren: './metro/metro.module#MetroPageModule' },
  { path: 'MTVNews', loadChildren: './mtvnews/mtvnews.module#MTVNewsPageModule' },
  { path: 'NationalGeographic', loadChildren: './national-geographic/national-geographic.module#NationalGeographicPageModule' },
  { path: 'NBCNews', loadChildren: './nbcnews/nbcnews.module#NBCNewsPageModule' },
  { path: 'News24', loadChildren: './news24/news24.module#News24PageModule' },
  { path: 'NewYorkMagazine', loadChildren: './new-york-magazine/new-york-magazine.module#NewYorkMagazinePageModule' },
  { path: 'RT', loadChildren: './rt/rt.module#RTPageModule' },
  { path: 'TechCrunch', loadChildren: './tech-crunch/tech-crunch.module#TechCrunchPageModule' },
  { path: 'TechRadar', loadChildren: './tech-radar/tech-radar.module#TechRadarPageModule' },
  { path: 'TheNewYorkTimes', loadChildren: './the-new-york-times/the-new-york-times.module#TheNewYorkTimesPageModule' },
  { path: 'TheNextWeb', loadChildren: './the-next-web/the-next-web.module#TheNextWebPageModule' },
  { path: 'TheWashingtonTimes', loadChildren: './the-washington-times/the-washington-times.module#TheWashingtonTimesPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
