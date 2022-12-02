import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css'],
})
export class CocinaComponent implements OnInit {
  pictogramsList: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPictogramsByCategory('cocina').subscribe((data) => {
      this.pictogramsList = data;
      console.log(data);
    });
  }
}
