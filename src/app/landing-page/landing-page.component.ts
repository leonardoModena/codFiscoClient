import { Component, OnInit } from '@angular/core';
import { ShareService } from "../service/share/share.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  nav: boolean;

  constructor(private share: ShareService) { }

  ngOnInit(): void {
    this.share.getValue().subscribe(value =>{
      this.nav = value;
    });
  }

  vaiClick(){
    this.share.setValue(true)
  }

}
