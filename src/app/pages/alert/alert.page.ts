import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  // VARIABLES
  titulo: string;
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  // Función asincrona para precargar la información
  async mostrarAlert() {
    // Guardamos en la variable alert la información de la función
    // create del controlador del alert
    const alert = await this.alertCtrl.create({
      header: 'Título', // El título del alert
      subHeader: 'Subtítulo', // Subtítulo del alert
      message: 'Hola, esto es un alert', // Mensaje del alert
      // Los botones que tendrá el alert, mostrados en un array
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        // Manejador para ver que pasa cuando pulsen ese botón
        // lo gestionamos con una función flecha =>
        // (parametros) => { Cuerpo de la función }
        handler: () => {
          console.log('Cancelar');
        }
      },
      {
        text: 'OK',
        handler: () => {
          // Aquí iría la lógica del botón OK, si quiero añadir elementos
          // o lo que quiera hacer
          console.log('OK');
        }
      }]
    });
    // Cuando tengo to.do cargado, llamo a mi variable alert y muestro el alert con present()
    await alert.present();
  }

  async mostrarInput() {
    const alert = await this.alertCtrl.create({
      header: 'Titulo',
      subHeader: 'Inserte el título',
      inputs: [{
        name: 'name',
        type: 'text',
        placeholder: 'Título'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log("Cancelar");
        }
      },
      {
        text: 'OK',
        handler: (data) => {
          // me guardo la información que viene de inputs
          this.titulo = data.name;
        }
      }]
    });
    await alert.present();
  }

}
