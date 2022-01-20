import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hum-page-header',
  template: `
   <div class="page-header">
    <div class="row align-items-md-center">
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-5">
                <h5 class="m-b-0">Welcome back, Nichols!</h5>
                <span class="text-gray">Project Manager</span>
                    
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="text-md-right m-v-10">
                <nz-radio-group class="m-r-10">
                    <label nz-radio-button nzValue="cardView" nzTooltipTitle="Card View" nzTooltipPlacement="bottom" nz-tooltip>
                        <i class="font-size-16" nz-icon nzType="appstore" theme="outline"></i>
                    </label>
                    <label nz-radio-button nzValue="listView" nzTooltipTitle="List View" nzTooltipPlacement="bottom" nz-tooltip>
                        <i class="font-size-16" nz-icon nzType="ordered-list" theme="outline"></i>
                    </label>
                </nz-radio-group> 
                
                <button nz-button nzType="primary" nzShape="round" class="m-r-10"> <i nz-icon nzType="plus"></i>
                    <span>New Project</span></button>
                    <button nz-button nzType="primary"  nzShape="circle" class="m-r-10"><i nz-icon nzType="download"></i></button>
                   
            </div>
        </div>
    </div>
</div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
