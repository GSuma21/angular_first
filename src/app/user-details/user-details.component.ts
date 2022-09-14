import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private router :ActivatedRoute) { }
 data=""
  ngOnInit(): void {
    console.log(this.router.snapshot.params)
    this.data = this.router.snapshot.params['id'];
  }

}
