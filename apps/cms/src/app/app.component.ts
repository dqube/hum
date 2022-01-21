/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { lookup, LookupService } from '@hum/core/lookup';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { UserService } from './user.service';
@Component({
  selector: 'hum-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit {
  title = 'cms';

  list: TransferItem[] = [];
  form: FormGroup;
  model: any = {};
  options: FormlyFormOptions = {
    formState :{ 
      labelWidth:'25px',
      layout:'vertical'
    }
    
  };
  fields: FormlyFieldConfig[];
  lookups: lookup[];
  constructor(private userService: UserService, private lookup: LookupService) {}
  
  ngOnInit(): void {
    this.userService.getFieldsMultiple();
    this.getFields();
    
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        disabled: i % 3 < 1,
      });
    }
    // console.log('get lookups')
    // this.getlookups(this.fields);
    // console.log(this.lookups);
  }

  getlookups(fields :FormlyFieldConfig[]) {
    this.lookup._getCodeLookup(fields);
  }

  getFields(): void {
    this.userService.getUserData().subscribe(([model, fields]) => {
      this.form = new FormGroup({});
      this.model = model;
      this.fields = this.mapFields(fields);

    });
    // this.userService.getUserData().subscribe(([model, fields]) => {
    //   this.form = new FormGroup({});
    //   this.model = model;
    //  //this.userService.bindEvents(fields);
    //   this.fields = this.mapFields(fields);
    //   //this.fields=fields;

    // });
    
  }
  /**
   * Adjust the JSON fields loaded from the server.
   */
  mapFields(fields: FormlyFieldConfig[]) {
    return fields.map((f) => {
      // if (f.fieldGroup) {
      //   f.fieldGroup
      //     .filter((f) => f?.fieldGroup && f.key)
      //     .forEach((f) => this.bindEvents(f));
      // } 
  
     if(f.fieldGroup) {
      f.fieldGroup.forEach((f) => this.bindEvents(f));
     }
      this.bindEvents(f);    
      return f;
    })
    
    ;    
  }

 
  private bindEvents(f: FormlyFieldConfig) {
    if (f.type === 'number' && f.templateOptions['number']) {

      f.templateOptions['number']['parser'] = (value: string): string => {
        return value.replace(' %', '');
      };
      f.templateOptions['number']['modelChange'] = (value: string | number): string | number => {
        return value;
      };
    }
    if (f.type === 'tree-select' && f.templateOptions['treeSelect']) {
      f.templateOptions['treeSelect']['nodes'] = this.userService.getNodes();
    }
    if (f.type === 'radio' && f.templateOptions) {
      f.templateOptions['options'] = this.userService.getRadioOptions();
    }
    if (f.key === 'city' && f.type === 'autoComplete' && f.templateOptions['autoComplete']) {
      f.templateOptions['autoComplete']['dataSource'] = this.userService.getCitities();
    }
    if (f.key === 'cascader' && f.type === 'cascader' && f.templateOptions) {
      f.templateOptions['options'] = this.userService.getoptions();
      f.templateOptions['cascader']['modelChange'] = (value: any[]) => {
        console.log(value);
      };
      f.templateOptions['cascader']['visibleChange'] = (visible) => {
        console.log(visible);
      };
      f.templateOptions['cascader']['selectionChange'] = (value) => {
        console.log(value);
      };

    }
    if (f.key === 'checkbox' && f.type === 'checkbox' && f.templateOptions) {
      f.templateOptions['options'] = this.userService.getCheckboxOptions();
    }
    if (f.key === 'fruit' && f.type === 'select' && f.templateOptions) {
      f.templateOptions['options'] = this.userService.getFruits();
    }
    if (f.key === 'transfer' && f.type === 'transfer' && f.templateOptions['transfer']) {
      f.templateOptions['transfer']['dataSource'] = this.list;
      f.templateOptions['transfer']['resutlMap'] = (items: TransferItem[]) => {
        return items.map((x) => x['key']);
      };
    }
    if (f.type === 'date' && f.templateOptions['date']) {
      
     // f.templateOptions['date']['onOpenChange'] = "this.bindDate(true)";
      f.templateOptions['date']['onOpenChange'] = (value: boolean) => {this.bindDate(value);};
      f.templateOptions['date']['onOk'] = (value: boolean) => {
        console.log(value);
      };
    }
    if (f.type === 'rangeDate' && f.templateOptions['range']) {
      f.templateOptions['range']['onOpenChange'] = (value: boolean) => {
        console.log(value);
      };
      f.templateOptions['range']['onOk'] = (value: boolean) => {
        console.log(value);
      };
    }
    if (f.type === 'time' && f.templateOptions['time']) {
      // f.templateOptions['time']['onOpenChange'] = (value: boolean) => {
      //   console.log(value);
      // }
      // f.templateOptions['time']['onOk'] = (value: boolean) => {
      //   console.log(value);
      // }
    }
    if (f.type === 'checkbox2' && f.templateOptions['checkbox']) {
      '// Not working need to check';
      // f.templateOptions.change: (value: boolean) => {
      //   console.log(value);
      // };
    }
    // console.log('Bind events')
    // console.log(f.key);
    // console.log(f);
  }

  bindDate(value:boolean){
  console.log(value);
  }
  
  onSubmit(evt) {
  
      console.log(JSON.stringify(this.model, null, 2));
  
  }
//   onSubmit() {  
//     console.log(JSON.stringify(this.model));

// }
}
