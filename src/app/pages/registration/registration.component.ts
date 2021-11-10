import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectOfEducations } from '../pages.selectors';

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

  education: any = [];

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store
      .select(selectOfEducations)
      .subscribe((data) => (this.education = data));

    this.applicantForm = new FormGroup({
      name: new FormControl(''),
      techs: new FormControl(),
    });
  }
  submit() {
    console.log('submit >>> ', this.applicantForm);
  }
}
