import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  pictogramsList: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
        this.apiService
      .getPictogramsByCategory('color')
      .subscribe((data) => {
        this.pictogramsList = data;
        console.log(data);
      });
  }
  }

