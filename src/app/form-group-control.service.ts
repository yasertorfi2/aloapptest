import { ControlBase } from './control-base';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormGroupControlService {
  constructor() {
    console.log(1)
   }

  toFormGroup(controls: ControlBase<string>[] ) {
    console.log(controls)
    const group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
                                              : new FormControl(control.value || '');
    });
    console.log(group)
    return new FormGroup(group);
  }
}
