import { AfterViewInit, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

let globalGuid = 1235;

export class AppearAfterContext {
  get $implicit() {
    return this.appAppearAfter;
  }
  appAppearAfter = 2000;
  dissolveAfter = 2000;
  guid = ++globalGuid;
}

@Directive({
  selector: '[appAppearAfter]'
})
export class AppearAfterDirective implements AfterViewInit {

  @Input()
  set appAppearAfter(value: number) {
    this.context.appAppearAfter = value;
  };

  @Input('appAppearAfterDissolveAfter')
  set dissolveAfter(value: number) {
    this.context.dissolveAfter = value;
  }

  private readonly context = new AppearAfterContext();

  constructor(
    private templateRef: TemplateRef<AppearAfterContext>,
    private viewContainer: ViewContainerRef
    ) {
    }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef, this.context);

      setTimeout(() => {
        this.viewContainer.clear();
      }, this.context.dissolveAfter);

    }, this.context.appAppearAfter);
  }



  static ngTemplateContextGuard(
    directive: AppearAfterDirective,
    context: unknown
  ): context is AppearAfterContext {
    return true;
  }

}
