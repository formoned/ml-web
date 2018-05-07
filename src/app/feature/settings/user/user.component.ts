import {Component, ContentChildren, EventEmitter, OnInit, QueryList, ViewChild} from '@angular/core';
import {ApiGetService, AuthenticationService} from "../../../core/services";
import {FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule} from "@angular/forms";
import {ValidationService} from "../../../core/services/validation.service";
import {IUserLogin} from "../../../core/models";
import {MatRadioGroup, MatSidenav, MatTab, MatTabChangeEvent, MatTabGroup} from "@angular/material";
import {Router} from "@angular/router";

export interface profileForm {
  name : string;
  email : string;
  created_at : string;
  gender : string;
  about : string;
  title : string;
  country_id : number;
}
export interface countries {
  id : number;
  name : string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  profileEdit: FormGroup;
  passwordChange: FormGroup;
  selectedForm: FormGroup;
  selectedTab : string;
  FormErrorMessageBag = [];
  @ViewChild(MatTabGroup) tabgroup: MatTabGroup;
  @ViewChild(MatRadioGroup) genderButtons: MatRadioGroup;

  countries : countries[] = [];
  genders = [];
  genderSelected: string;

  user : profileForm = {
    name : '',
    email : '',
    created_at : '',
    title : '',
    about : '',
    gender : 'other',
    country_id : null
  }


  constructor(
    private authenticationService : AuthenticationService,
    private apiGetService : ApiGetService,
    private formBuilder: FormBuilder,
    private router : Router
  ) {
    this.genders.push(
      {key : 'man', value : 'Man'},
      {key : 'woman', value : 'Woman'},
      {key : 'other', value : 'Other'}
    );
  }

  ngOnInit() {
    this.buildForm();
    this.tabgroup.selectedIndex = 0;
    this.selectedTab = 'profileEdit';
    this.selectedForm = this.profileEdit;
    console.log(Array(this.passwordChange.controls['password'].errors));
  }


  buildForm() {

    this.profileEdit = this.formBuilder.group({
      name: ['', [ Validators.required]],
      title: ['', [ ]],
      gender: ['', [ Validators.required ]],
      about: ['', [ ]],
      country: ['', [ ]]
    });

    this.passwordChange = this.formBuilder.group({
      password_old: ['', [ Validators.required, ValidationService.passwordValidator ]],
      password: ['', [ Validators.required, ValidationService.passwordValidator ]],
      password_confirmation: ['', [ Validators.required, ValidationService.passwordValidator ]]
    });

    this.fillForms();
  }

  fillForms() {
    this.authenticationService.getUser()
      .subscribe(response => {
          // this.profileEdit.controls['name'].setValue(response.json().name);
          this.user.name = response.json().name;
          this.user.email = response.json().email;
          this.user.created_at = response.json().created_at;
          this.user.gender = response.json().gender;
          this.user.title = response.json().title;
          this.user.about = response.json().about;
          this.user.country_id = response.json().country_id;


          this.profileEdit.controls['name'].setValue(response.json().name);
          this.profileEdit.controls['gender'].setValue(response.json().gender);
          this.profileEdit.controls['title'].setValue(response.json().title);
          this.profileEdit.controls['about'].setValue(response.json().about);
        },
        error => {
          alert((JSON.parse(error.text())).message);
          console.log(error.text());
        });

    this.apiGetService.getCountriesList()
      .subscribe(response => {
        this.countries = response.json().list;
        },
        error => {
          alert((JSON.parse(error.text())).message);
          console.log(error.text());
        });

  }

  tabChanged(event) {
    this.selectedTab = event.tab.textLabel;
    switch (event.tab.textLabel) {
      case 'profileEdit' : {
        this.selectedForm = this.profileEdit;
        break;
      }
      case 'passwordChange' : {
        this.selectedForm = this.passwordChange;
        break;
      }

    }

  }

  OnSubmitProfileEdit({ value, valid }: { value: any, valid: boolean }) {
    this.authenticationService.changeProfileInfo(value)
      .subscribe(response => {
          if(response.json().success === true) {
            this.FormErrorMessageBag = [];
            this.fillForms();
          } else {
            this.setFormControlErrors(this.selectedForm, response.json().error);
          }
        },
        error => {
          alert((JSON.parse(error.text())).message);
          console.log(error.text());
        });
  }

  OnSubmitProfilePasswordChange({ value, valid }: { value: any, valid: boolean }) {
    this.authenticationService.changeProfilePassword(value)
      .subscribe(response => {
          if(response.json().success === true) {
            this.selectedForm.reset();
            this.FormErrorMessageBag = [];
          } else {
            this.setFormControlErrors(this.selectedForm, response.json().error);
          }
        },
        error => {
          alert((JSON.parse(error.text())).message);
          console.log(error.text());
        });
  }

  setFormControlErrors(form : FormGroup, response) {
    this.FormErrorMessageBag = [];
    for (var v in response) {
        form.controls[v].setErrors(response[v]);
        this.FormErrorMessageBag[v] = response[v];
    }
  }

  submitTrigger() {

    switch (this.selectedTab) {
      case 'profileEdit' : {
        this.OnSubmitProfileEdit(this.selectedForm);
        break;
      }
      case 'passwordChange' : {
        this.OnSubmitProfilePasswordChange(this.selectedForm);
        break;
      }
    }
  }



}
