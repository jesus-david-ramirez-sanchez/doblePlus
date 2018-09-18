import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    function scrollToDownload() {

      if ($('.section-download').length !== 0) {
        $('html, body').animate({
          scrollTop: $('.section-download').offset().top
        }, 1000);
      }
    }
  }

  public CloseMenu(){
    $(".navbar-toggler").trigger("click");
  }
}
