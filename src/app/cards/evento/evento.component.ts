import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
})
export class EventoComponent implements OnInit {
  pictogramsList: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
       this.apiService
      .getPictogramsByCategory('evento')
      .subscribe((data) => {
        this.pictogramsList = data;
        console.log(data);
      });
  }
  }

