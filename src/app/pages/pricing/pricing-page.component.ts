import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector:'page-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // if(isPlatformBrowser(this.platform)){
    //   document.title = 'Pricing page';
    // }


    this.title.setTitle('Pricing Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Este es mi Pricing Page',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing Page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hola,mundo,Patricia,Fernandez,Curso,Angular,Pro',
    });
  }
 }
