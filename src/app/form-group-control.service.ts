import { ControlBase } from './control-base';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormGroupControlService {
  constructor() { }

  toFormGroup(controls: ControlBase<string>[] ) {
    const group: any = {};

    controls.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
