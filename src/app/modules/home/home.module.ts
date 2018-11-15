import { NgModule } from '@angular/core';

import { MyModalComponent } from '../../shared/layout/modals/my-modal.component';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@app/shared';

import { MaterialModule } from '@app/modules/material/material.module';
import { CardOverviewComponent } from './card-overview/card-overview.component';
import { StepperOverviewComponent } from './stepper-overview/stepper-overview.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

import { UserService } from '@app/core/services/user.service';


@NgModule({
    declarations: [
        HomeComponent,
        MyModalComponent,
        CardOverviewComponent,
        StepperOverviewComponent,
        DialogComponent,
        SnackBarComponent
    ],
    imports: [
        SharedModule,
        HomeRoutingModule,
        MaterialModule,
    ],
    exports: [],
    providers: [UserService],
    entryComponents: [MyModalComponent, DialogComponent, SnackBarComponent]
})
export class HomeModule {}
