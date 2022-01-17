import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of, delay } from 'rxjs';
import {  FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyhelperService } from '@hum/form'

@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export class UserService {
  constructor(private http: HttpClient,private helpr : FormlyhelperService) {}

  getUserData(): Observable<any> {
    
    return forkJoin([this.getUser(), this.getFields()]);
  }

  getUser()  {
    return this.http.get<{ firstName: string, lastName: string }>('assets/data/user.json');
  }

  getFields() {      
    return this.http.get<FormlyFieldConfig[]>('assets/data/form.json');
  }
  bindEvents(fields:FormlyFieldConfig[]) {
    fields.map((f) => {
      if (f.type=== 'number') {
       // const numbr :NumberFormly=f.templateOptions?.['number'];
       const numbr =this.helpr.bindFields(f);
        console.log(numbr);
       // f.templateOptions['number'] =numbr;
        
       console.log();
      }
      console.log(f);
      return f;
    });
    
  }
  getCitities() {
    return [
      {
        "value": 1,
        "label": "chennai"
      },
      {
        "value": 2,
        "label": "madurai"
      }
    ]
  }
  getoptions() {
    return [
    {
      "value": "zhejiang",
      "label": "Zhejiang",
      "children": [
        {
          "value": "hangzhou",
          "label": "Hangzhou",
          "children": [
            {
              "value": "xihu",
              "label": "West Lake",
              "isLeaf": true
            }
          ]
        },
        {
          "value": "ningbo",
          "label": "Ningbo",
          "isLeaf": true
        }
      ]
    },
    {
      "value": "jiangsu",
      "label": "Jiangsu",
      "children": [
        {
          "value": "nanjing",
          "label": "Nanjing",
          "children": [
            {
              "value": "zhonghuamen",
              "label": "Zhong Hua Men",
              "isLeaf": true
            }
          ]
        }
      ]
    }
  ]
}
  getNodes() {
    return [
      {
        title: 'parent 1',
        key: '100',
        children: [
          {
            title: 'parent 1-0',
            key: '1001',
            children: [
              { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
              { title: 'leaf 1-0-1', key: '10011', isLeaf: true },
            ],
          },
          {
            title: 'parent 1-1',
            key: '1002',
            children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }],
          },
        ],
      },
    ]; 
  }
  getCheckboxOptions() {
    return [
      {
        "label": "Apple",
        "value": "Apple",
        "disabled": true,
        "checked": true
      },
      {
        "label": "Pear",
        "value": "Pear",
        "disabled": true
      },
      {
        "label": "Orange",
        "value": "Orange"
      }
    ]
  }
  getRadioOptions() {
    return of([
      { label: 'Apple', value: 'Apple', disabled: false },
      { label: 'Pear', value: 'Pear', disabled: false },
      { label: 'Orange', value: 'Orange' },
    ]).pipe(delay(100))
  }
  getFruits() {
    return [
      {
        "label": "Apple",
        "value": "Apple",
        "disabled": true
      },
      {
        "label": "Apple2",
        "value": "Apple2",
        "disabled": true,
        "hide": true
      },
      {
        "label": "Pear",
        "value": "Pear",
        "disabled": false
      },
      {
        "label": "Orange",
        "value": "Orange"
      }
    ]
  }
}