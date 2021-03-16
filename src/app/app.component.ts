import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { fader} from "./route-animation";
import { ShareService } from './service/share/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader,
  ]
})
export class AppComponent implements OnInit {
  nav: boolean;

  constructor(private shareService: ShareService) {}

  ngOnInit(){
    this.shareService.getValue().subscribe(value => {
      this.nav = value;
    });
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  back(){
    this.shareService.setValue(false);
  }
}
