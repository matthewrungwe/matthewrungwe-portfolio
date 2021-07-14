// Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: "about-me", component: AboutMeComponent },
  { path: "resume", component: ResumeComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "blog", component: BlogComponent },
  { path: "hire-me", component: HireMeComponent },
  { path: "contact", component: ContactComponent },
  { path: "", redirectTo: "about-me", pathMatch: "full"},
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
