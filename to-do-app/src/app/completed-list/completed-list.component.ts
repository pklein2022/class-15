import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent implements OnInit {

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    
  }
  onNewTodo() {
    this.router.navigate(['completed-list'], { relativeTo: this.route });
  }
