import { RadioButtonControl } from './control-radiobutton';
import { TextBoxControl } from './control-textbox';
import { DropDownControl } from './control-dropdown';
import { Observable, of } from 'rxjs';

export class ControlService {
  private years = [
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
  ];
  private controls = [
    {
      year: 2008,
      controls: [
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
    },
    {
      year: 2009,
      controls: [
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
    },
    {
      year: 2010,
      controls: [
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
    },
    {
      year: 2011,
      controls: [
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
    },
    {
      year: 2012,
      controls: [
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
    {
      year: 2013,
      controls: [
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
          order: 2,
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
    },
    {
      year: 2014,
      controls: [
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
          order: 2,
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
          order: 4,
        }),

        new TextBoxControl({
          key: 'lastName',
          label: 'Last Name',
          value: 'test',
          order: 5,
        }),
      ],
    },
    {
      year: 2015,
      controls: [
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
          order: 3,
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
    },
    {
      year: 2016,
      controls: [
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
          order: 3,
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

        new TextBoxControl({
          key: 'phone',
          label: 'Phone',
          value: 'test',
          required: true,
          order: 2,
        }),
      ],
    },
    {
      year: 2017,
      controls: [
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
          order: 3,
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

        new TextBoxControl({
          key: 'phone',
          label: 'Phone',
          value: 'test',
          required: true,
          order: 2,
        }),
      ],
    },
    {
      year: 2018,
      controls: [
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

        new RadioButtonControl({
          key: 'radioButton2',
          label: 'Radio Button 2',
          options: [
            { key: 'test1', value: 'Test1' },
            { key: 'test2', value: 'Test2' },
            { key: 'test3', value: 'Test3' },
            { key: 'test4', value: 'Test4' },
          ],
          order: 7,
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

        new TextBoxControl({
          key: 'phone',
          label: 'Phone',
          value: 'test',
          required: true,
          order: 2,
        }),
      ],
    },
    {
      year: 2019,
      controls: [
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

        new TextBoxControl({
          key: 'phone',
          label: 'Phone',
          value: 'test',
          order: 4,
        }),
      ],
    },
    {
      year: 2020,
      controls: [
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
      ],
    },

    {
      year: 2021,
      controls: [
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

        new TextBoxControl({
          key: 'lastName',
          label: 'Last Name',
          value: 'test',
          order: 2,
        }),
      ],
    },
  ];

  constructor() {
    this.controls.forEach((item) =>
      item.controls.sort((a, b) => a.order - b.order)
    );
  }

  getAllYears() {
    return this.years;
  }

  getControlsForCustomYear(year) {
    return this.controls.filter((control) => control.year == year);
  }
}
