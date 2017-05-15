import { Component, OnInit , ViewChild} from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {Http} from '@angular/http';
import {HTTPTestService} from "./http-test.service"
import {error} from "util";
import {computeMsgId} from "@angular/compiler/src/i18n/digest";
import {until} from "selenium-webdriver";
import titleContains = until.titleContains;
import {Popup} from 'ng2-opd-popup';

//import { ConfirmComponent } from '.confirm/confirm.component';
@Component({
  selector: 'app',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
  providers:[HTTPTestService]
})
export class NewsfeedComponent {

  public data;
  public news;
  public com;
  public com_title;
  public comment1;

  constructor(public _httpService:HTTPTestService) {

    this._httpService.getjsondata()
      .subscribe(data => this.data = data,
        error=>alert(error),
        ()=>console.log("Finished")

      );
    this._httpService.getcommdata()
      .subscribe(com=>this.com=com,
      error=>alert(error),
        ()=>console.log("Finished2"));
    //console.log(this.com);

  }
  @ViewChild('popup5') popup5: Popup;
  ontheData(){
    console.log(this.data);
    alert(this.data);

  }
  add(){
    var tit=(<HTMLInputElement>document.getElementById("tit")).value;
    var post=(<HTMLInputElement>document.getElementById("post")).value;
    var obj={
      title: tit,
        post:post
    };
    var obj1={
      title:tit,
        comment:[]
    }
    this.com.push(obj1);
    this.data.push(obj);
    this.clear();
  }
  dis(name){
    this.comment1=[];
    this.com_title=name;
    //alert(name);
    for(let co=0;co<this.com.length;co++){
      //console.log(this.com[co].comment);
      if(this.com[co].title===name){
        for(let j=0;j<this.com[co].comment.length;j++){
          this.comment1.push(this.com[co].comment[j])
         // console.log(this.comment1);
        }

      }
    }

  }
  clear(){
    (<HTMLInputElement>document.getElementById("tit")).value="";
    (<HTMLInputElement>document.getElementById("post")).value="";
    (<HTMLInputElement>document.getElementById("com_com")).value="";
  }
  add_com(dc){
    for(let co=0;co<this.com.length;co++){
      if(this.com[co].title===dc){
        let new_comment=(<HTMLInputElement>document.getElementById("com_com")).value
        this.com[co].comment.push(new_comment);
      }
    }
    this.clear();

  }

  showPopup5(){
    this.popup5.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-mbe-attack ",
      color: "#A0DE4F",
      header: "Login...",
      widthProsentage:50,
      animation: "bounceInDown",
      confirmBtnContent: "Login",
    }
    this.popup5.show(this.popup5.options);
  }
  add_name(){
    alert("Name")
  }
  login(){
    alert('Email: ' +'  Password: ' );
    this.popup5.hide();
  }

}
