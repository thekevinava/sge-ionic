import { Component, OnInit } from '@angular/core';
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
  favoritos: any = [];
  componentes: Observable<ComponenteEjer1[]>;


  constructor(private dataService: DataService, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.componentes = this.dataService.getEjer1Ops();
  }

  async mostrarActionSheet(notice) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Titulo',
      // backdropDismiss: false,
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        handler: () => {

          // console.log(notice.title)
          console.log('Compartir:',notice.title);
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }
  
  async mostrarAlert(notice) {
    const alert = await this.alertCtrl.create({
      header: 'Titulo',
      message: '¿Desea añadir a favoritos?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
      },
      {
        text: 'OK',
        handler: () => {
          this.favoritos.push(notice);
          console.log('Elemento añadido\n',this.favoritos);
        }
      }]
    });
    await alert.present();
  }

}
