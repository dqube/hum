import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { lookup } from './lookup.model';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor() { }

  public _getCodeLookup(fields: FormlyFieldConfig[]) : lookup[] {
    let codeLookups : lookup[];
   const look:lookup =   this.extractlookups(fields);
   if(look){
     codeLookups.push(look);
   }
    return codeLookups;
  }

  private extractlookups(fields: FormlyFieldConfig[]) : lookup {
    fields.forEach((f) => {
      if (f.fieldGroup && f.fieldGroup.length > 0) {
        this.extractlookups(f.fieldGroup);
      }
      if (f?.['templateOptions']?.['lookup']) {
        const templateOptions = f.templateOptions;
        if (templateOptions['lookup']) {
          return templateOptions['lookup'];
        }
      }
    });
    return null
  }
  // mapFields(fields: FormlyFieldConfig[]) {
  //   return fields.map((f) => {
     
  //    if(f.fieldGroup) {
  //     f.fieldGroup.forEach((f) => this.bindEvents(f));
  //    }
  //     this.bindEvents(f);    
  //     return f;
  //   });    
  // }


}
