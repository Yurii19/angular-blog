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

  @Output() sendFormData = new EventEmitter();
  applicantForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.applicantForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(),
      technology: new FormControl(),
      education: new FormControl(),
    });
  }
  submit() {
    this.sendFormData.emit(this.applicantForm.value);
  }
}
