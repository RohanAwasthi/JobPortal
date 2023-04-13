import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
   
  }
  display:boolean=false;

onclick(){
    this.display=!this.display;
  }
  constructor(){

  }

}

