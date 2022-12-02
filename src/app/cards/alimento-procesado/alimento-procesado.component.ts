import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-alimento-procesado',
  templateUrl: './alimento-procesado.component.html',
  styleUrls: ['./alimento-procesado.component.css'],
})
export class AlimentoProcesadoComponent implements OnInit {
  pictogramsList: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getPictogramsByCategory('Alimento procesado')
      .subscribe((data) => {
        this.pictogramsList = data;
        console.log(data);
      });
  }
}
