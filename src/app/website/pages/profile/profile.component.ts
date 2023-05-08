import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  user: User | null=null;

  constructor (private authService: AuthService,){}

  ngOnInit(): void {
    this.authService.user$
    .subscribe(data => {
      this.user = data;
    })
  }
}
