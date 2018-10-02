import { Component, OnInit, EventEmitter, ViewChild  } from '@angular/core';
import { RouterModule, Routes, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {BaccnService} from '../../service/baccn.service';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @ViewChild(ContactComponent) public _contactComponent: ContactComponent; 

  // public clickedEvent: Event;

  // childEventClicked(event: Event) {
  //   this.clickedEvent = event;
  // }
  detailsForm:FormGroup;
  isContactFormValidFlag:boolean;
  isBillingFormValidFlag:boolean;
  // myForm: FormGroup;
  // validForm: boolean = false;
  // buttonName: string = "SUBMIT";

  constructor(private router: Router, private fb: FormBuilder, private baccnService: BaccnService){
    this.detailsForm = fb.group(
      {
      });

    this.baccnService.isContactFormValid.subscribe((flag)=>{
      this.isContactFormValidFlag = (flag)? true:false;
    });
    this.baccnService.isBillingFormValid.subscribe((flag)=>{
      this.isBillingFormValidFlag = (flag)? true:false;
    });

  }
    // this.detailsForm = this._contactComponent.contactForm;
  ngOnInit() {
  }
  // gotoReviews(){
  // this.router.navigate(['/review']);
  // }
  // onSubmit() {
  //   if (this.myForm.status == "VALID")
  //     this.validForm = true;
  //   alert(this.validForm);
  // }
}
