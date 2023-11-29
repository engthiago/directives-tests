import { AfterViewInit, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppearAfter]'
})
export class AppearAfterDirective implements AfterViewInit {

  @Input()
  appAppearAfter = 2000;

  @Input('appAppearAfterDissolveAfter')
  dissolveAfter = 2000;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);

      setTimeout(() => {
        this.viewContainer.clear();
      }, this.dissolveAfter);

    }, this.appAppearAfter);
  }

}
