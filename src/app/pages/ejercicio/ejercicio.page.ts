import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ComponenteEjer1 } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.page.html',
  styleUrls: ['./ejercicio.page.scss'],
})
export class EjercicioPage implements OnInit {
  favoritos: any = []; // Creo el Array para la lista de favoritos
  componentes: Observable<ComponenteEjer1[]>; // creo la interfaz de componentes para el JSON


  constructor(private dataService: DataService, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.componentes = this.dataService.getEjer1Ops(); // Recibo los elementos del JSON
  }

  async mostrarActionSheet(notice) { // Recibo la información de la noticia seleccionada
    const actionSheet = await this.actionSheetCtrl.create({
      header: notice.title,
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Compartir:',notice.title);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }
  
  async mostrarAlert(notice) {
    const alert = await this.alertCtrl.create({
      header: 'Favoritos',
      message: '¿Desea añadir a favoritos?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'OK',
        handler: () => {
          let flag = false; // Creo un boolean para control
          if (this.favoritos.length == 0) { // Si no hay elementos guardados, guardo el primer elemento
            this.favoritos.push(notice);
            console.log('Elemento añadido',this.favoritos);
          } else {
            this.favoritos.forEach(async (fav) => { // Si hay elementos, recorro el array
              if(fav.title === notice.title) { // Compruebo si el título existe en mi lista de array
                flag = true; // Si el título ya existe, seteo mi variable de control a true
                const existe = await this.alertCtrl.create({ // Si existe, muestro una alerta avisando de que el elemento ya existe
                  header: 'Error',
                  message: 'El elemento que desea agregar ya ha sido agregado anteriormente.',
                  buttons: ['OK']
                });
                await existe.present();
                // console.log('Error, el elemento ya existe.');
              }
            });
            if(flag===false) { // Si no ha encontrado ningún elemento igual, guardo el siguiente elemento.
              this.favoritos.push(notice);
              console.log('Elemento añadido',this.favoritos);
            }
          }
        }
      }]
    });
    await alert.present();
  }

}
