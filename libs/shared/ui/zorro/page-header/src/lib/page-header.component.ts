import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { headerOptions } from '..';

@Component({
  selector: 'hum-page-header',
  template: `
   <div class="page-header">
    <div class="row align-items-md-center">
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-5">
                <h5 class="m-b-0">{{headers?.title}}</h5>
                <span class="text-gray">{{headers?.subtitle}}</span>
                    
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="text-md-right m-v-10">
                <nz-radio-group class="m-r-10" *ngIf="headers?.radiobuttons">
                    <label nz-radio-button [nzValue]="button.title" nzTooltipTitle="button.tooltip" nzTooltipPlacement="button.tooltipplacement" nz-tooltip *ngFor="let button of headers?.radiobuttons">
                        <i class="font-size-16" nz-icon [nzType]="button.icon" theme="outline"></i>
                    </label>                   
                </nz-radio-group> 
                <ng-container *ngIf="headers?.buttons">
                <button nz-button [nzType]="button.type" [nzShape]="button.shape" class="m-r-10" *ngFor="let button of headers?.buttons"> <i nz-icon [nzType]="button.icon" ></i>
                    <span *ngIf="button.title">{{button.title}}</span></button>
                    </ng-container>
            </div>
        </div>
    </div>
</div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent implements OnInit  {
    @Input() headers: headerOptions|undefined;
 
    ngOnInit(): void {
        console.log('-------headers---')
      console.log(this.headers)
    }


}

