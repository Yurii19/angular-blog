import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationValidators } from 'src/registration.validators';

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
      name: new FormControl('', [Validators.required, RegistrationValidators.checkName, Validators.pattern(/^[a-zA-Z]+-?[a-zA-Z]+$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      technology: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
    });
    
  }
  submit() {
    if (this.applicantForm.valid) {
      this.sendFormData.emit(this.applicantForm.value);
      this.applicantForm.reset();
      this.applicantForm.markAsUntouched()
      this.applicantForm.markAsPristine();
    }
  }
}
