import { NgModule } from '@angular/core';
import { PjlSharedModule } from '../pjl-shared/shared.module';
import { ViewUsersComponent } from './pjl-authentication-components/view-users/view-users.component';
import { RoutingModuleAuthentication } from './pjl-authentication.routing.module';

@NgModule({
  imports: [PjlSharedModule, RoutingModuleAuthentication],
  providers: [],
  declarations: [ViewUsersComponent],
  exports: [],
})
export class PjlAuthenticationModule {}
