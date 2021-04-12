import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../control-base';
import { FormGroupControlService } from '../form-group-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [FormGroupControlService]
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() controls: ControlBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private fgc: FormGroupControlService) {  }

  ngOnChanges(changes: SimpleChanges): void {
    this.controls = changes.controls.currentValue
    this.ngOnInit()
  }

  ngOnInit() {
    this.form = this.fgc.toFormGroup(this.controls);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
