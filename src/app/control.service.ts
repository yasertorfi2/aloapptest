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
          key: '2008firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 1,
        }),
        new TextBoxControl({
          key: '2008lastName',
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
          key: '2009dropdown1',
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
          key: '2009dropdown2',
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
          key: '2009firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 3,
        }),
        new TextBoxControl({
          key: '2009lastName',
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
          key: '2010dropdown1',
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
          key: '2010dropdown2',
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
          key: '2010dropdown3',
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
          key: '2010firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 4,
        }),

        new TextBoxControl({
          key: '2010lastName',
          label: 'Last Name',
          value: 'test',
          order: 5,
        }),

        new TextBoxControl({
          key: '2010email',
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
          key: '2011dropdown1',
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
          key: '2011dropdown2',
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
          key: '2011dropdown3',
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

        new TextBoxControl({
          key: '2011firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 1,
        }),

        new TextBoxControl({
          key: '2011lastName',
          label: 'Last Name',
          value: 'test',
          order: 2,
        }),

        new TextBoxControl({
          key: '2011email',
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

        new DropDownControl({
          key: '2012dropdown1',
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
          key: '2012dropdown2',
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
          key: '2012dropdown3',
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



        new TextBoxControl({
          key: '2012firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 1,
        }),

        new TextBoxControl({
          key: '2012lastName',
          label: 'Last Name',
          value: 'test',
          order: 2,
        }),

        new TextBoxControl({
          key: '2012email',
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
        new DropDownControl({
          key: '2013dropdown1',
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
          key: '2013dropdown2',
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
          key: '2013dropdown3',
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


        new TextBoxControl({
          key: '2013firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 4,
        }),

        new TextBoxControl({
          key: '2013lastName',
          label: 'Last Name',
          value: 'test',
          order: 5,
        }),

        new TextBoxControl({
          key: '2013email',
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

        new DropDownControl({
          key: '2014dropdown1',
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
          key: '2014dropdown2',
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
          key: '2014dropdown3',
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


        new TextBoxControl({
          key: '2014firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 4,
        }),

        new TextBoxControl({
          key: '2014lastName',
          label: 'Last Name',
          value: 'test',
          order: 5,
        }),
      ],
    },
    {
      year: 2015,
      controls: [

        new DropDownControl({
          key: '2015dropdown1',
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
          key: '2015firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 4,
        }),

        new TextBoxControl({
          key: '2015lastName',
          label: 'Last Name',
          value: 'test',
          order: 5,
        }),

        new TextBoxControl({
          key: '2015email',
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

        new DropDownControl({
          key: '2016dropdown1',
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
          key: '2016firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 4,
        }),

        new TextBoxControl({
          key: '2016lastName',
          label: 'Last Name',
          value: 'test',
          order: 5,
        }),

        new TextBoxControl({
          key: '2016email',
          label: 'Email',
          value: 'test',
          required: true,
          order: 6,
        }),
      ],
    },
    {
      year: 2017,
      controls: [

        new DropDownControl({
          key: '2017dropdown1',
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
          key: '2017lastName',
          label: 'Last Name',
          value: 'test',
          order: 5,
        }),

        new TextBoxControl({
          key: '2017email',
          label: 'Email',
          value: 'test',
          required: true,
          order: 6,
        }),
      ],
    },
    {
      year: 2018,
      controls: [
        new DropDownControl({
          key: '2018dropdown1',
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
          key: '2018firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 4,
        }),

        new TextBoxControl({
          key: '2018lastName',
          label: 'Last Name',
          value: 'test',
          order: 5,
        }),

        new TextBoxControl({
          key: '2018email',
          label: 'Email',
          value: 'test',
          required: true,
          order: 6,
        }),
      ],
    },
    {
      year: 2019,
      controls: [
        new DropDownControl({
          key: '2019dropdown1',
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
          key: '2019firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 1,
        }),

        new TextBoxControl({
          key: '2019lastName',
          label: 'Last Name',
          value: 'test',
          order: 2,
        }),

        new TextBoxControl({
          key: '2019email',
          label: 'Email',
          value: 'test',
          required: true,
          order: 3,
        }),
      ],
    },
    {
      year: 2020,
      controls: [
        new DropDownControl({
          key: '2020dropdown1',
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
          key: '2020firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 1,
        }),

        new TextBoxControl({
          key: '2020lastName',
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
          key: '2021dropdown1',
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
          key: '2021dropdown2',
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
          key: '2021firstName',
          label: 'First name',
          value: 'test',
          required: true,
          order: 1,
        }),

        new TextBoxControl({
          key: '2021lastName',
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
