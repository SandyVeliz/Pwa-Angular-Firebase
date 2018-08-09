import { Component, OnInit } from '@angular/core';
import { FirebasedbService } from '../../servicios/firebasedb.service';

interface tarea {
  descripcion: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombreTarea: string;

  tareas: Array<any>;

  constructor(
    private firebasedbService: FirebasedbService
  ) { }

  ngOnInit() {
    this.obtieneTareas()
  }
  /**
   * Obtiene el listado de tareas y lo muestra
   */
  obtieneTareas(){
    this.firebasedbService.getTareas().subscribe(respuesta => {
      this.tareas = respuesta;
    });
  }
  /**
   * Envia al servicio la descripcionb de la tarea para agregar a la DB
   */
  agregarTarea() {
    if (this.nombreTarea) {
      this.firebasedbService.agregaTarea(this.nombreTarea) 
    }
  }
  /**
   * Elimina la tarea segun el id que se agrego.
   * @param tarea obtiene el objeto tarea para enviar el id a eliminar
   */
  terminaTarea(tarea){
    if (tarea) {
      this.firebasedbService.borraTarea(tarea.id) 
    }
  }

}
