import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-alimento-animal',
  templateUrl: './alimento-animal.component.html',
  styleUrls: ['./alimento-animal.component.css'],
})
export class AlimentoAnimalComponent implements OnInit {
  pictogramsList: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getPictogramsByCategory('Alimento de origen animal')
      .subscribe((data) => {
        this.pictogramsList = data;
        console.log(data);
      });
  }
}
