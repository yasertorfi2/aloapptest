import { RadioButtonControl } from './control-radiobutton';
import { TextBoxControl } from './control-textbox';
import { DropDownControl } from './control-dropdown';
import { ControlBase } from './control-base';
export class ControlService {
  getControls() {
    const controls = [
      {
        2008: [
          new DropDownControl({
            key: 'dropdown1',
            label: 'DropDown 1',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 3,
          }),

          new DropDownControl({
            key: 'dropdown2',
            label: 'DropDown 2',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 4,
          }),

          new TextBoxControl({
            key: 'firstName',
            label: 'First name',
            value: 'test',
            required: true,
            order: 1,
          }),
          ,
          new TextBoxControl({
            key: 'lastName',
            label: 'Last Name',
            value: 'test',
            required: true,
            order: 2,
          }),
        ],
        2009: [
          new DropDownControl({
            key: 'dropdown1',
            label: 'DropDown 1',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 2,
          }),

          new DropDownControl({
            key: 'dropdown2',
            label: 'DropDown 2',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 1,
          }),

          new TextBoxControl({
            key: 'firstName',
            label: 'First name',
            value: 'test',
            required: true,
            order: 3,
          }),
          ,
          new TextBoxControl({
            key: 'lastName',
            label: 'Last Name',
            value: 'test',
            required: true,
            order: 4,
          }),
        ],

        2010: [
          new DropDownControl({
            key: 'dropdown1',
            label: 'DropDown 1',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 2,
          }),

          new DropDownControl({
            key: 'dropdown2',
            label: 'DropDown 2',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 1,
          }),

          new DropDownControl({
            key: 'dropdown3',
            label: 'DropDown 3',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 3,
          }),

          new TextBoxControl({
            key: 'firstName',
            label: 'First name',
            value: 'test',
            required: true,
            order: 4,
          }),

          new TextBoxControl({
            key: 'lastName',
            label: 'Last Name',
            value: 'test',
            order: 5,
          }),

          new TextBoxControl({
            key: 'email',
            label: 'Email',
            value: 'test',
            required: true,
            order: 6,
          }),
        ],

        2011: [
          new DropDownControl({
            key: 'dropdown1',
            label: 'DropDown 1',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 4,
          }),

          new DropDownControl({
            key: 'dropdown2',
            label: 'DropDown 2',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 5,
          }),

          new DropDownControl({
            key: 'dropdown3',
            label: 'DropDown 3',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 6,
            required: true,
          }),

          new RadioButtonControl({
            key: 'radioButton1',
            label: 'Radio Button 1',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 7,
          }),

          new TextBoxControl({
            key: 'firstName',
            label: 'First name',
            value: 'test',
            required: true,
            order: 1,
          }),

          new TextBoxControl({
            key: 'lastName',
            label: 'Last Name',
            value: 'test',
            order: 2,
          }),

          new TextBoxControl({
            key: 'email',
            label: 'Email',
            value: 'test',
            required: true,
            order: 3,
          }),
        ],

        2012: [
          new RadioButtonControl({
            key: 'radioButton1',
            label: 'Radio Button 1',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 1,
          }),

          new DropDownControl({
            key: 'dropdown1',
            label: 'DropDown 1',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 4,
          }),

          new DropDownControl({
            key: 'dropdown2',
            label: 'DropDown 2',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 5,
          }),

          new DropDownControl({
            key: 'dropdown3',
            label: 'DropDown 3',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 8,
            required: true,
          }),

          new RadioButtonControl({
            key: 'radioButton 2',
            label: 'Radio Button 2',
            options: [
              { key: 'test1', value: 'Test1' },
              { key: 'test2', value: 'Test2' },
              { key: 'test3', value: 'Test3' },
              { key: 'test4', value: 'Test4' },
            ],
            order: 7,
          }),

          new TextBoxControl({
            key: 'firstName',
            label: 'First name',
            value: 'test',
            required: true,
            order: 1,
          }),

          new TextBoxControl({
            key: 'lastName',
            label: 'Last Name',
            value: 'test',
            order: 2,
          }),

          new TextBoxControl({
            key: 'email',
            label: 'Email',
            value: 'test',
            required: true,
            order: 3,
          }),
        ],
      },
    ];
  }
}
