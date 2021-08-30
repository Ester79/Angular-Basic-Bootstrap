import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './@component/about/about.component';
import { ContactComponent } from './@component/contact/contact.component';
import { CopyrightComponent } from './@component/copyright/copyright.component';
import { FooterComponent } from './@component/footer/footer.component';
import { HeaderComponent } from './@component/header/header.component';
import { NavbarComponent } from './@component/navbar/navbar.component';
import { PortfolioComponent } from './@component/portfolio/portfolio.component';


const routes: Routes = [
  {
    path: '', component: AboutComponent, pathMatch: 'full',
    data: {
      title: 'Title for About Component',
      descrption: 'Description of About Component',
      ogTitle: 'Description of About Component for social media',
    }
  },
  {
    path: '', component: ContactComponent, pathMatch: 'full',
    data: {
      title: 'Title for Contact Component',
      descrption: 'Description of Contact Component',
      ogTitle: 'Description of Contact Component for social media',
    }
  },
  {
    path: '', component: CopyrightComponent, pathMatch: 'full',
    data: {
      title: 'Title for Copyright Component',
      descrption: 'Description of Copyright Component',
      ogTitle: 'Description of Copyright Component for social media',
    }
  },
  {
    path: '', component: FooterComponent, pathMatch: 'full',
    data: {
      title: 'Title for Footer Component',
      descrption: 'Description of Footer Component',
      ogTitle: 'Description of Footer Component for social media',
    }
  },
  {
    path: '', component: HeaderComponent, pathMatch: 'full',
    data: {
      title: 'Title for Header Component',
      descrption: 'Description of Header Component',
      ogTitle: 'Description of Header Component for social media',
    }
  },
  {
    path: '', component: NavbarComponent, pathMatch: 'full',
    data: {
      title: 'Title for Navbar Component',
      descrption: 'Description of Navbar Component',
      ogTitle: 'Description of Navbar Component for social media',
    }
  },
  {
    path: '', component: PortfolioComponent, pathMatch: 'full',
    data: {
      title: 'Title for Portfolio Component',
      descrption: 'Description of Portfolio Component',
      ogTitle: 'Description of Portfolio Component for social media',
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
