import { Component } from '@angular/core';
import {  } from "module";
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoR';
  M:any[] = [];

  constructor(private demo:DemoService) {
    this.soloActivos();
  }

  soloActivos(){
    this.demo.consumirModulos().subscribe((mod:any)=>{
      this.M = mod.data;
    });
  }
}
