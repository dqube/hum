import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyCardModule } from '../../card/src/lib/card.module';
import { FormlyCascaderModule } from '../../cascader/src/lib/cascader.module';
import { FormlyCheckboxModule } from '../../checkbox/src/lib/checkbox.module';
import { FormlyDateModule } from '../../date/src/lib/date.module';
import { FormlyFieldModule } from '../../field/src/lib/field.module';
import { FormlyInputGroupModule } from '../../input-group/src/lib/input-group.module';
import { FormlyInputModule } from '../../input/src/lib/input.module';
import { FormlyRadioModule } from '../../radio/src/lib/radio.module';
import { FormlyRateModule } from '../../rate/src/lib/rate.module';
import { FormlyNzSelectModule } from '../../select/src/lib/select.module';
import { FormlySliderModule } from '../../slider/src/lib/slider.module';
import { FormlySwitchModule } from '../../switch/src/lib/switch.module';
import { FormlyTabsModule } from '../../tabs/src/lib/tabs.module';
import { FormlyTimeModule } from '../../time/src/lib/time.module';
import { FormlyTransferModule } from '../../transfer/src/lib/transfer.module';
import { FormlyTreeSelectModule } from '../../tree-select/src/lib/tree-select.module';
import { FormlyUploadModule } from '../../upload/src/lib/upload.module';

@NgModule({
  imports: [
    CommonModule,
    FormlyFieldModule,
    FormlyInputModule,
     FormlyCascaderModule,
     FormlyCheckboxModule,
    FormlyRadioModule,
    FormlyRateModule,
    FormlyNzSelectModule,
    FormlySliderModule,
    FormlySwitchModule,
    FormlyDateModule,
    FormlyTimeModule,
    FormlyTransferModule,
    FormlyTreeSelectModule,
    FormlyUploadModule,
    FormlyCardModule,
   // NzFormModule,
    FormlyTabsModule,
    FormlyInputGroupModule,
   // FormlyHelperModule,
    // FormlyFormModule
  ],
})
export class FormlyZorroModule {}
