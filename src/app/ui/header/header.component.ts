import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { Subscribable, Subscription } from 'rxjs';

// import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  currentUserSubscription : Subscription;
  users: User[]= [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });
}

ngOnInit() {
  this.loadAllUsers();
}

ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
  this.currentUserSubscription.unsubscribe();
}

deleteUser(id: number) {
  this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
  });
}

private loadAllUsers() {
  this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
  });
}

logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

}
