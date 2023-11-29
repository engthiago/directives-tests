import { Directive, AfterViewInit, EventEmitter, ElementRef, Input, OnDestroy, OnInit, Output, ViewRef } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective implements OnInit, AfterViewInit, OnDestroy {

  _appBgcolor = 'red';

  @Input('appBgcolor')
  set appBgcolor(value: string) {
    this._appBgcolor = value;
    this.setBgColor(value);
  }

  constructor(private elementRef: ElementRef<any>) {
    console.log('constructed directive');
  }

  ngOnInit(): void {
    console.log('directive initialized');
  }

  ngAfterViewInit(): void {
    this.setBgColor(this._appBgcolor);
  }

  setBgColor(color: string) {
    if (!this.elementRef) return;
    if (!this.elementRef) return;

    const element = this.elementRef.nativeElement as HTMLElement;
    const child = element.children[0] as HTMLElement;
    child.style.backgroundColor = color;
  }

  ngOnDestroy(): void {
    console.log('directive destroyed');
  }

}
