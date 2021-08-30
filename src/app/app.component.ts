import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'freelancer';


  constructor(private metaService: Meta, private router: Router, private activatedRouter: ActivatedRoute, private titleService: Title)
  {
    this.addTag();
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
    .subscribe(() => {
      var rt = this.getChild(this.activatedRouter)
      rt.data.subscribe((data: any) =>{
        console.log(data);
        this.titleService.setTitle(data.title)

        if (data.descrption) {
          this.metaService.updateTag({ name: 'description', content: data.descrption })
        } else {
          this.metaService.removeTag("name='description'")
        }
        if (data.robots) {
          this.metaService.updateTag({ name: 'robots', content: data.robots })
        } else {
          this.metaService.updateTag({ name: 'robots', content: "follow,index" })
        }


      })
    })
  }
  getChild(activatedRouter: ActivatedRoute):ActivatedRoute {
    if (activatedRouter.firstChild) {
      return this.getChild(activatedRouter.firstChild);
    } else {
      return activatedRouter;
    }
  }

  addTag() {
    this.metaService.addTag({ name: 'description', content: 'Article Description' });
    this.metaService.addTag({ name: 'robots', content: 'index,follow' });
    this.metaService.addTag({ property: 'og:title', content: 'Content Title for social media' });
  }
}

















