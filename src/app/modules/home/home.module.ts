import { NgModule } from '@angular/core';

import { MyModalComponent } from '../../shared/layout/modals/my-modal.component';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@app/shared';

import { MaterialModule } from '@app/modules/material/material.module';
import { CardOverviewComponent } from './card-overview/card-overview.component';
import { StepperOverviewComponent } from './stepper-overview/stepper-overview.component';

@NgModule({
    declarations: [
        HomeComponent,
        MyModalComponent,
        CardOverviewComponent,
        StepperOverviewComponent
    ],
    imports: [
        SharedModule,
        HomeRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [],
    entryComponents: [MyModalComponent]
})
export class HomeModule {}
