import { Component, OnInit } from '@angular/core';
import { BaccnService } from '../../service/baccn.service';
import { StringifyOptions } from 'querystring';
import { RouterModule, Routes, Router  } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  title: string;
  fname: String;
  position: string;
  email: string;
  land: string;
  num1: string;
  num2: string;

  cmpcn: string;
  cmpen: string;
  taxid: string;
  bustype:string;
  busnature:string;
  cmpbil:string;
  cmpadr:string;

  cmppostal: string;
  bilreason: string;
  biladr: string;
  bilpostal: string;
  shipadr: string;
  shippostal: string;

  bankname: string;
  banknum: string;
  emailid1: string;
  emailid2: string;
  needs: string;

  radioBilling:string;
  radioBilNo:string;


  constructor(private baccnService: BaccnService, private router: Router) {

   }
  public data;
  ngOnInit() {
    // contact
    this.title = this.baccnService.detailModel.titleField;
    this.fname = this.baccnService.detailModel.userName;
    this.position = this.baccnService.detailModel.position;
    this.email = this.baccnService.detailModel.email;
    this.num1 = this.baccnService.detailModel.mobileNumber1;
    this.land = this.baccnService.detailModel.landLine;
    this.num2 = this.baccnService.detailModel.mobileNumber2;
// company

    this.cmpcn = this.baccnService.detailModel.cNameCn;
    this.cmpen = this.baccnService.detailModel.cNameEn;
    this.taxid = this.baccnService.detailModel.taxId;
    this.bustype = this.baccnService.detailModel.businessType;
    this.busnature = this.baccnService.detailModel.businessNature;
    this.cmpbil = this.baccnService.detailModel.cmpBilling;
    this.cmpadr = this.baccnService.detailModel.companyAdr;
    this.cmppostal = this.baccnService.detailModel.postCode1;
    this.bilreason = this.baccnService.detailModel.entReason;
    this.biladr = this.baccnService.detailModel.billingAdr;
    this.bilpostal = this.baccnService.detailModel.postCode2;
    this.shipadr = this.baccnService.detailModel.shipAdr;
    this.shippostal = this.baccnService.detailModel.postCode3;

    // this.radioBilling = this.baccnService.detailModel.radioBilling;
    // this.radioBilNo = this.baccnService.detailModel.radioBilNo;


// Billing
    this.bankname = this.baccnService.detailModel.bankName;
    this.banknum = this.baccnService.detailModel.bankNum;

    this.needs = this.baccnService.detailModel.needs;

    


    
    // this.baccnService.titleMessage.subscribe(message => this.title = message)
    // this.baccnService.fnameMessage.subscribe(message => this.fname = message)
    // this.baccnService.positionMessage.subscribe(message => this.position = message)
    // this.baccnService.emailMessage.subscribe(message => this.email = message)
    // this.baccnService.num1Message.subscribe(message => this.num1 = message)

    // this.baccnService.landMessage.subscribe(message => this.land = message)
    // this.baccnService.num2Message.subscribe(message => this.num2 = message)
    // this.baccnService.cmpcnMessage.subscribe(message => this.cmpcn = message)
    // this.baccnService.cmpenMessage.subscribe(message => this.cmpen = message)
    // this.baccnService.taxidMessage.subscribe(message => this.taxid = message)

    // this.baccnService.postalMessage.subscribe(message => this.postal = message)
    // this.baccnService.bilreasonMessage.subscribe(message => this.bilreason = message)
    // this.baccnService.biladrMessage.subscribe(message => this.biladr = message)
    // this.baccnService.bilpostalMessage.subscribe(message => this.bilpostal = message)
    // // this.baccnService.shipadrMessage.subscribe(message => this.shipadr = message)


    // this.baccnService.shippostalMessage.subscribe(message => this.shippostal = message)
    // this.baccnService.banknameMessage.subscribe(message => this.bankname = message)
    // this.baccnService.banknumMessage.subscribe(message => this.banknum = message)
    // this.baccnService.emailid1Message.subscribe(message => this.emailid1 = message)
    // this.baccnService.emailid2Message.subscribe(message => this.emailid2 = message)
    // this.baccnService.needsMessage.subscribe(message => this.needs = message)

  }

  contactEdit(){
    this.router.navigate(['/details']);
  }
  // companyEdit(){
  //   this.router.navigate(['/company']);
  // }
  // billingEdit(){
  //   this.router.navigate(['/contact']);
  // }
 
gotoCompletion(){
  this.router.navigate(['/completion']);
}

}
