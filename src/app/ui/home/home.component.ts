import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ 
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent implements OnInit {
   
    images = [1, 2, 3].map(() => `https://picsum.photos/1100/500?random&t=${Math.random()}`);


    constructor( ) {    }

    ngOnInit(){}
}