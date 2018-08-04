import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombreTarea: String;

  tareas = [
    { key: 1, nombre: 'Tarea1' },
    { key: 2, nombre: 'Tarea2' },
    { key: 3, nombre: 'Tarea3' },
    { key: 4, nombre: 'Tarea4' },
    { key: 5, nombre: 'Tarea5' },
    { key: 6, nombre: 'Tarea6' }
  ]

  constructor() { }

  ngOnInit() {
  }


  agregarTarea() {
    console.log(this.nombreTarea)
  }

  terminaTarea(sandy, tarea){
    console.log(sandy, tarea.key)
    if (sandy) {
      
    }

  }

}
