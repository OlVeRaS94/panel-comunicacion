import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  pictogramsList: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
        this.apiService
      .getPictogramsByCategory('animal')
      .subscribe((data) => {
        this.pictogramsList = data;
        console.log(data);
      });
  }
  }

