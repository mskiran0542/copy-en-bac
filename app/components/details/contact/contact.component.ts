import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import {MatButtonModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup,FormBuilder } from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { RouterModule, Routes, Router  } from '@angular/router';
import {BaccnService} from '../../../service/baccn.service';





@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  @Output() isContactFormValid: EventEmitter<any> = new EventEmitter <any>();
  @Output() isBillingFormValid: EventEmitter<any> = new EventEmitter <any>();




  showhide:boolean;
  submitted: boolean;
  selected = 'Guangdong';
  contactForm:FormGroup;
  emailPattern:RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
  mobilePattern:RegExp=/^((1){1}){1}[1-9]{1}[0-9]{9}$/;
  // landLinepattern:RegExp=/[0-9]{3}[-][0-9]{8}[-][0-9]{3}/;
  validForm:boolean=false;
  billingForm:FormGroup;
  bothvalidForms:boolean=false;
  buttonName:string;
  billingOption: string = "";
  disableBillingShipping: boolean;
  showBillingShipping: boolean;
  isContactFormValidFlag: boolean;
  private formsChecked: boolean;
  isBillingFormValidFlag: boolean;
  showbillingOption:string='yes';
  showpickupOption:string='yes';
  showEmailField:string='yes';

  selected1 = 'Guangdong Province';

  selectOption = [
    'Yes',
    'No (Please specify the reason)',
  ];

  // matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder, private router: Router, private baccnService: BaccnService) { 

    this.contactForm=fb.group (
      {
        'titleField':[this.baccnService.detailModel.titleField, Validators.required],
        'userName': [this.baccnService.detailModel.userName, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        'mobileNumber1': [this.baccnService.detailModel.mobileNumber1,  [Validators.required, Validators.pattern(this.mobilePattern)]],
        'mobileNumber2': [this.baccnService.detailModel.mobileNumber2],
        'email': [this.baccnService.detailModel.email, [Validators.required, Validators.pattern(this.emailPattern)]],
        'landLine': [this.baccnService.detailModel.landLine],
        'position': [this.baccnService.detailModel.position, Validators.required],

        'cNameCn': [this.baccnService.detailModel.cNameCn, [Validators.required]],
        'cNameEn': [this.baccnService.detailModel.cNameEn, [Validators.required]],
        'taxId': [this.baccnService.detailModel.taxId, Validators.required],
        'businessType': [this.baccnService.detailModel.businessType, Validators.required],
        'businessNature': [this.baccnService.detailModel.businessNature, Validators.required],
        'cmpBilling': [this.baccnService.detailModel.cmpBilling],

        'companyAdr': [this.baccnService.detailModel.companyAdr, Validators.required],
        'postCode1': [this.baccnService.detailModel.postCode1, Validators.required],

        //add dynamic validation 
        // 'radioBilYes':[this.baccnService.detailModel.radioBilYes],
        // 'radioBilNo':[this.baccnService.detailModel.radioBilNo],
        // 'radioPickYes':[this.baccnService.detailModel.radioPickYes],
        // 'radioPickNo':[this.baccnService.detailModel.radioPickNo],

        'entReason': [this.baccnService.detailModel.entReason, Validators.maxLength(6)],
        'billingAdr': [this.baccnService.detailModel.billingAdr],
        'postCode2': [this.baccnService.detailModel.postCode2, Validators.maxLength(6)],
        'shipAdr' : [this.baccnService.detailModel.shipAdr],
        'postCode3': [this.baccnService.detailModel.postCode3, Validators.maxLength(6)],
      });

      this.baccnService.checkCompanyAndContactForms.subscribe((check)=>{
        if(check){
          this.validateContactForm(true);
         
        }
      });
    
      
      this.billingForm=fb.group({

        // 'radioEmailNo':[this.baccnService.detailModel.radioEmailNo],
        // 'radioPostalYes':[this.baccnService.detailModel.radioPostalYes],
        'needs': [this.baccnService.detailModel.needs],
        'bankName': [this.baccnService.detailModel.bankName, Validators.required],
        'bankNum': [this.baccnService.detailModel.bankNum, Validators.required ],
        'emailB1': [this.baccnService.detailModel.emailB1, [ Validators.required,  Validators.pattern(this.emailPattern)]],
        'emailB2': [this.baccnService.detailModel.emailB2, [ Validators.pattern(this.emailPattern)]],
    
      }
    );
    
    
    this.baccnService.checkBillingAndShippingForms.subscribe((check)=>{
      if(check){
        this.validateBillingForm(true);
      }
    });

  }
  setShowbillingOption(input: string) {
    if(input=='no')
    {
      this.contactForm.controls['entReason'].setValidators([Validators.required]);
      this.contactForm.controls['billingAdr'].setValidators([Validators.required]);
      this.contactForm.controls['postCode2'].setValidators([Validators.required]);
      
    //this.contactForm.controls['entReason'].updateValueAndValidity();
    }else{
    
      this.contactForm.controls['shipAdr'].invalid;
      this.contactForm.controls['postCode3'].invalid;

    }
    this.showbillingOption = input;
  }

  setShowEmailField(input:string)
  {
    if(input=='no')
    {
      this.billingForm.controls['emailB1'].setValidators([Validators.required]);
      // this.billingForm.controls['emailB2'].setValidators([Validators.required]);
    }else{
    this.billingForm.controls['emailB1'].invalid;
    }
   this.showEmailField= input;
  }
  setShowpickupOption(input:string){
    if(input=='no')
    {
      this.contactForm.controls['shipAdr'].setValidators([Validators.required]);
      this.contactForm.controls['postCode3'].setValidators([Validators.required]);

    }else{
     
      this.contactForm.controls['shipAdr'].invalid;
      this.contactForm.controls['postCode3'].invalid;

    }
    this.showpickupOption = input;
  }
  
  // onContinue()
  // {
  //   if(this.contactForm.status == "VALID")
  //   this.validForm=true;
  //   alert(this.validForm);
  // }
  validateContinue(){
    if(this.contactForm.invalid){
    this.validForm=false;
      this.showBillingShipping = true;


      this.disableBillingShipping = false;
  }else{

    this.validForm=true;
      this.disableBillingShipping = true;
      this.showBillingShipping = false;
  }
  //  this.bothvalidForms=true;
      this.submitted = true;
      const cntFrm = this.validateContactForm(true);
      // this.detailsForm = this.contactForm;
      if (cntFrm == true)
        this.bothvalidForms = true;
      else
        this.bothvalidForms = false;

      if (!cntFrm) {

        document.getElementById('errorModal_ID').click();
      }

      console.log('contact ', this.validateContactForm(true));
      // console.log('company ', this._companyComponen.validateCompanyForm(true));

  
  }
  validBillForm: boolean = false;

  validateReview(){
    this.submitted = true;
    const bilFrm = this.validateBillingForm(true);
    if (!bilFrm) {

      document.getElementById('errorModal_ID').click();
    }
    if (bilFrm == true && this.contactForm){
      this.validBillForm = true;
    console.log('bilform ', this.validBillForm = true);
      this.router.navigate(['/review']);
    // }else
    //   this.validBillForm = false;
    // console.log('billing ', this.validateBillingForm(true));
    }

    // Issue here
    if (!this.isBillingFormValidFlag && !this.isContactFormValidFlag) {
      this.formsChecked = false;
      console.log('complete ', this.formsChecked = false);
      return;
    } else {
      this.formsChecked = true;
      this.router.navigate(['/review']);
    }
  //   if(this.billingForm.status=="INVALID"){
  //   this.validForm=false;
  // }else
  //   this.validForm=true;
  //   this.router.navigate(['/review']);
  // }
  }

  validateContactForm(data: any) {
    if (data === true) {
      if (this.contactForm.valid === true) {
        this.baccnService.isContactFormValid.emit(true);
    
        this.baccnService.detailModel.titleField= this.contactForm.get('titleField').value;
        this.baccnService.detailModel.userName = this.contactForm.get('userName').value;
        this.baccnService.detailModel.mobileNumber1 = this.contactForm.get('mobileNumber1').value;
        this.baccnService.detailModel.mobileNumber2= this.contactForm.get('mobileNumber2').value;
        this.baccnService.detailModel.email = this.contactForm.get('email').value;
        this.baccnService.detailModel.position = this.contactForm.get('position').value;
        this.baccnService.detailModel.landLine= this.contactForm.get('landLine').value;


        this.baccnService.detailModel.cNameCn = this.contactForm.get('cNameCn').value;
        this.baccnService.detailModel.cNameEn = this.contactForm.get('cNameEn').value;
        this.baccnService.detailModel.taxId = this.contactForm.get('taxId').value;
        this.baccnService.detailModel.businessType = this.contactForm.get('businessType').value;
        this.baccnService.detailModel.businessNature = this.contactForm.get('businessNature').value;
        this.baccnService.detailModel.cmpBilling = this.contactForm.get('cmpBilling').value;
        this.baccnService.detailModel.companyAdr = this.contactForm.get('companyAdr').value;
        this.baccnService.detailModel.postCode1 = this.contactForm.get('postCode1').value;

        this.baccnService.detailModel.entReason = this.contactForm.get('entReason').value;
        this.baccnService.detailModel.billingAdr = this.contactForm.get('billingAdr').value;

        this.baccnService.detailModel.postCode2 = this.contactForm.get('postCode2').value;
        this.baccnService.detailModel.shipAdr = this.contactForm.get('shipAdr').value;

        this.baccnService.detailModel.postCode3 = this.contactForm.get('postCode3').value;

        // this.baccnService.detailModel.radioBilYes = this.contactForm.get('radioBilYes').value;
        // this.baccnService.detailModel.radioBilNo = this.contactForm.get('radioBilNo').value;
        // this.baccnService.detailModel.radioPickYes = this.contactForm.get('radioPickYes').value;
        // this.baccnService.detailModel.radioPickNo = this.contactForm.get('radioPickNo').value;


      } else {
        this.baccnService.isContactFormValid.emit(false);
      }
    }
    return this.contactForm.valid;
  }



  validateBillingForm(data: any) {
    if (data === true) {
      if (this.billingForm.valid === true) {
        this.baccnService.isBillingFormValid.emit(true);
        this.baccnService.detailModel.bankName = this.billingForm.get('bankName').value;
        this.baccnService.detailModel.bankNum = this.billingForm.get('bankNum').value;
        this.baccnService.detailModel.emailB1 = this.billingForm.get('emailB1').value;
        this.baccnService.detailModel.needs = this.billingForm.get('needs').value;

        // this.baccnService.detailModel.radioEmailNo = this.billingForm.get('radioEmailNo').value;
        // this.baccnService.detailModel.radioPostalYes = this.billingForm.get('radioPostalYes').value;
        


        // this.emailB1 = this.billingForm.get('emailB1').value;
      } else {
        this.baccnService.isBillingFormValid.emit(false);
      }
    }
    return this.billingForm.valid;
  }





  gotoReviews(){
    this.router.navigate(['/review']);
    }
  onSubmit() {
    if (this.contactForm.status == "VALID")
      this.validForm = true;
    this.router.navigate(['/review']);
  } 
    ngOnInit() {
      this.showhide=false;
    }
  
}
