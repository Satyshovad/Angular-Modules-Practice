import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { UserComponent} from './user/user.component';
import { GroupComponent} from './group/group.component';
import { DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [UserComponent, GroupComponent, DashboardComponent]
})

export class AdminModule{ }
