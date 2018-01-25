import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-island-four',
  templateUrl: './island-four.component.html',
  styleUrls: ['./island-four.component.css'],
  providers: [UserService]
})
export class IslandFourComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

}
