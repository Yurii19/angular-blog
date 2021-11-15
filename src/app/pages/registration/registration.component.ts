import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  @Input() techsList = [{ value: 'value', viewValue: 'viewValue' }];
  @Input() educationsList = [{ value: 'value', viewValue: 'viewValue' }];

  @Output() emitFormData = new EventEmitter();
  applicantForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.applicantForm = new FormGroup({
      name: new FormControl(''),
       techs: new FormControl(),
      educations : new FormControl()
    });
  }
  submit() {
    this.emitFormData.emit(this.applicantForm.value);
  }
}
