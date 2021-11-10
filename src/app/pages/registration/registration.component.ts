import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Level {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})

export class RegistrationComponent implements OnInit {
  applicantForm!: FormGroup;

  eduction: Level[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor() {}

  ngOnInit(): void {
    this.applicantForm = new FormGroup({
      name: new FormControl(''),
      techs: new FormControl()
    });
  }
  submit() {
    console.log('submit >>> ', this.applicantForm);
  }
}
