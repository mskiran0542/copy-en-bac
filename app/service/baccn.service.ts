import { Injectable,EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../../../node_modules/@angular/router';
import { DetailModel } from '../model/detail.model';

@Injectable()
export class BaccnService {

  isCompanyFormValid = new EventEmitter<boolean>();
  isContactFormValid = new EventEmitter <boolean>();
  isBillingFormValid = new EventEmitter <boolean>();
  contactFormDeatils = new EventEmitter<boolean>();
  // isShippingFormValid = new EventEmitter <boolean>();

  detailModel:DetailModel;
  public data:Data;
  // public myName:string;
  // public myName2:string;
  // public myName3:string;
  // public myName4:string;
  // public myName5:string;
  // public myName6:string;
  // public myName7:string;

  // public myName8:string;
  // public myName9:string;
  // public myName10:string;
  // public myName11:string;
  // public myName12:string;
  // public myName13:string;
  // public myName14:string;
  // public myName15:string;
  // public myName16:string;
  
  // public myName17:string;
  // public myName18:string;
  // public myName19:string;
  // public myName20:string;
  // public myName21:string;
  // public myName22:string;
  // public myName25:string;

  // public myName:string;
  // public myName:string;
  // public myName:string;
  // public myName:string;
  // public myName:string;
  // public myName:string;
  // public myName:string;
  // public myName:string;

  checkCompanyAndContactForms = new EventEmitter <boolean>();
  checkBillingAndShippingForms = new EventEmitter <boolean>();

  private titleSource = new BehaviorSubject('default message');
  private fnameSource = new BehaviorSubject('default message');
  private positionSource = new BehaviorSubject('default message');
  private emailSource = new BehaviorSubject('default message');
  private num1Source = new BehaviorSubject('default message');
  private landSource = new BehaviorSubject('default message');
  private num2Source = new BehaviorSubject('default message');
  private cmpcnSource = new BehaviorSubject('default message');
  private cmpenSource = new BehaviorSubject('default message');
  private taxidSource = new BehaviorSubject('default message'); 
  private postalSource = new BehaviorSubject('default message');
  private bilreasonSource = new BehaviorSubject('default message');
  private biladrSource = new BehaviorSubject('default message');
  private bilpostalSource = new BehaviorSubject('default message');
  private shipadrSource = new BehaviorSubject('not default message');
  private shippostalSource = new BehaviorSubject('default message');
  private banknameSource = new BehaviorSubject('default message');
  private banknumSource = new BehaviorSubject('default message');
  private emailid1Source = new BehaviorSubject('default message');
  private emailid2Source = new BehaviorSubject('default message');
  private needsSource = new BehaviorSubject('default message');



  titleMessage = this.titleSource.asObservable();
  fnameMessage = this.fnameSource.asObservable();
  positionMessage = this.positionSource.asObservable();
  emailMessage = this.emailSource.asObservable();
  num1Message = this.num1Source.asObservable();

  landMessage = this.landSource.asObservable();
  num2Message = this.num2Source.asObservable();
  cmpcnMessage = this.cmpcnSource.asObservable();
  cmpenMessage = this.cmpenSource.asObservable();
  taxidMessage = this.taxidSource.asObservable();

  postalMessage = this.postalSource.asObservable();
  bilreasonMessage = this.bilreasonSource.asObservable();
  biladrMessage = this.biladrSource.asObservable();
  bilpostalMessage = this.bilpostalSource.asObservable();
  shipadrMessage = this.shipadrSource.asObservable();

  shippostalMessage = this.shippostalSource.asObservable();
  banknameMessage = this.banknameSource.asObservable();
  banknumMessage = this.banknumSource.asObservable();
  emailid1Message = this.emailid1Source.asObservable();
  emailid2Message = this.emailid2Source.asObservable();
  needsMessage = this.needsSource.asObservable();

  constructor() {
     this.detailModel=new DetailModel();
   }
   changeTitle(message: string) {
    this.titleSource.next(message)
}
changeFname(message: string) {
 this.fnameSource.next(message)
}
changePosition(message: string) {
  this.positionSource.next(message)
 }
 changeEmail(message: string) {
  this.emailSource.next(message)
}
changeNum1(message: string) {
  this.num1Source.next(message)
}
changeLand(message: string) {
  this.landSource.next(message)
}
changeNum2(message: string) {
  this.titleSource.next(message)
}
changeCmpcn(message: string) {
  this.cmpcnSource.next(message)
}
changeCmpen(message: string) {
  this.cmpenSource.next(message)
}
changeTaxid(message: string) {
  this.titleSource.next(message)
}
changePostal(message: string) {
  this.postalSource.next(message)
}
changeBilreason(message: string) {
  this.bilreasonSource.next(message)
}
changeBiladr(message: string) {
  this.biladrSource.next(message)
}
changeBilpostal(message: string) {
  this.bilpostalSource.next(message)
}
changeShipadr(message: string) {
  this.shipadrSource.next(message)
}
changeShippostal(message: string) {
  this.shippostalSource.next(message)
}
changebankname(message: string) {
  this.banknameSource.next(message)
}
changeBanknum(message: string) {
  this.banknumSource.next(message)
}
changeEmailid1(message: string) {
  this.emailid1Source.next(message)
}
changeEmailid2(message: string) {
  this.emailid2Source.next(message)
}
changeNeeds(message: string) {
  this.needsSource.next(message)
}


}