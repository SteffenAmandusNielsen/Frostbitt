import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test.component';
import { MerchComponent } from './merchandise/merch.component';

@NgModule({

  declarations: [
    TestComponent,
    MerchComponent
  ],

  imports: [
    SharedModule,
  ],

  exports: [
    TestComponent
  ]
})
export class TestModule { }
