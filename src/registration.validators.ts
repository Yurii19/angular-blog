import { FormControl } from '@angular/forms';

export class RegistrationValidators {
  static checkName(control: FormControl): { [key: string]: boolean } | null {
    if (!control.value || control.value.trim() === '') {
      return { checkName: true };
    }
    return null;
  }
}
