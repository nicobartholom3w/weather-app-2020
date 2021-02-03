import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { weatherIcons } from './weather-icons';

@Component({
  selector: 'weather-icons',
  template: `
    <ng-content></ng-content>
  `,
  styles: [':host::ng-deep svg{}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherIconsComponent {
  
  @Input()
  set name(iconName: string) {
    this.element.nativeElement.innerHTML = weatherIcons [iconName] || null;
  }
  constructor(private element: ElementRef) { }

}
