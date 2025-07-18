import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProjectsComponent } from './projects/projects.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ResquestquoteComponent } from './resquestquote/resquestquote.component';
import { ServiceComponent } from './service/service.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-homelayout',
  standalone: true,
  imports: [CarouselModule,AboutComponent, ServiceComponent, FeedbackComponent, ProjectsComponent, ResquestquoteComponent, ProtfolioComponent, BlogComponent],
  templateUrl: './homelayout.component.html',
  styleUrl: './homelayout.component.scss'
})
export class HomelayoutComponent {
 

}
