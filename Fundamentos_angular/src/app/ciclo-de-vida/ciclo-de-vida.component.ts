import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges {

  horario = new Date();
  timer: any = null!;

  @Input() texto = "";

  constructor() { }
  
  ngOnInit(): void {
    console.log("O evento OnInit disparou");
    this.timer = setInterval(() => this.horario = new Date(), 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`O evento onChanges disparou com as seguintes mudanças`);
    
  }

}
