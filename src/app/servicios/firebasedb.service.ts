import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '../../../node_modules/angularfire2/firestore';
import { Observable } from '../../../node_modules/rxjs';

export interface tarea { id: string; descripcion: string }

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  private tareasCollection: AngularFirestoreCollection<tarea>;
  tareas: Observable<tarea[]>;

  constructor(
    // Importa el modulo de Firestore
    private afs: AngularFirestore
  ) {
    // Declara la ruta de la coleccion tareas
    this.tareasCollection = afs.collection<tarea>('tareas');
  }
  /**
   * Obtiene el listado de tareas de la colleccion
   */
  public getTareas() {
    return this.afs.collection<tarea>('tareas').valueChanges();
  }
  /**
   * Agrega la tarea a la base de datos
   * @param descripcion descripcion de la tarea a realizar
   */
  public agregaTarea(descripcion: string) {
    // Crea el id con el que se va a agregar a la DB
    const id = this.afs.createId();
    // Crea el objeto Tarea
    const tareaNueva: tarea = { id, descripcion };
    //Agrega el objeto creado a la base de datos
    this.tareasCollection.doc(id).set(tareaNueva);
  }
  /**
   * Elimina la tarea con el id obtenido
   * @param id id de tarea en base de datos
   */
  public borraTarea(id: string) {
    this.tareasCollection.doc(id).delete();
  }

}
