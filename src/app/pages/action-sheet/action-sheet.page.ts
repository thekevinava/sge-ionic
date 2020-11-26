import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async mostrarActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums', // titulo action sheet
      backdropDismiss: false, // obligamos al usuario interactuar con el action sheet para cuando hagan click fuera no se salga
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          console.log('Borrado');
        }
      },
      {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Compartir');
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancelado');
        }
      }]
    });
    await actionSheet.present();
  }

}
