import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../control-base';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.css']
})
export class DynamicFormControlComponent {
  @Input() control: ControlBase<string>;

  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.control.key].valid; }

  get dirtyOrTouched() { return this.form.controls[this.control.key].dirty || this.form.controls[this.control.key].touched}

}
