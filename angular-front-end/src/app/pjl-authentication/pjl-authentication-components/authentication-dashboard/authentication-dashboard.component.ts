import {
  GoogleSigninButtonModule,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthenticationCoreSerivce } from '../../../pjl-core/services/pjl-authentication/authentication-core.service';
import { JwtService } from '../../../pjl-core/services/pjl-authentication/jwt.service';
import { PjlSharedModule } from '../../../pjl-shared/shared.module';
import { CreateUserButtonComponent } from '../create-user-button/create-user-button.component';
import { DeleteUserButtonComponent } from '../delete-user-button/delete-user-button.component';
import { ViewUsersComponent } from '../view-users/view-users.component';

@Component({
  selector: 'app-authentication-dashboard',
  standalone: true,
  imports: [
    CreateUserButtonComponent,
    DeleteUserButtonComponent,
    ViewUsersComponent,
    PjlSharedModule,
    GoogleSigninButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './authentication-dashboard.component.html',
  styleUrl: './authentication-dashboard.component.scss',
})
export class AuthenticationDashboardComponent implements OnInit {
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  createdGoogleUserResponse$: Observable<string>;

  constructor(
    private authService: SocialAuthService,
    private jwtService: JwtService,
    private authenticationCoreSerivce: AuthenticationCoreSerivce
  ) {
    this.createdGoogleUserResponse$ = of('');
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      this.jwtService.saveToken(user.idToken);
      if (user != null) {
        this.createdGoogleUserResponse$ =
          this.authenticationCoreSerivce.createGoogleUser();
      }
    });
  }
}
