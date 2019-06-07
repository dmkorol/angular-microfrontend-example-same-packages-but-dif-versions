import { AfterContentInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iframe',
  template: `
    <iframe src="" style="border: 0; width: 100%; height: 100vh">Your browser doesn't support iFrames.</iframe>
  `,
  styles: []
})
export class IframeComponent implements AfterContentInit {

  constructor(private route: ActivatedRoute,
              private elementRef: ElementRef) {
  }

  ngAfterContentInit(): void {
    const iframe = this.elementRef.nativeElement.getElementsByTagName('iframe')[0];
    iframe.src = (this.route.snapshot.data && this.route.snapshot.data.url) ? this.route.snapshot.data.url : '';
    console.log(this.route.snapshot.data.url);
  }

}
