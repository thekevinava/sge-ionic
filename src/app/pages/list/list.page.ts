import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', { static: false }) lista: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favoritos(usuario: any) {
    console.log('Favoritos',usuario);
    this.presentarToast('Agregado a favoritos','primary','Favoritos')
    this.lista.closeSlidingItems();
  }

  compartir(usuario: any) {
    console.log('Compartir',usuario);
    this.presentarToast('Compartido correctamente','secondary','Compartir')
    this.lista.closeSlidingItems();
  }

  borrar(usuario: any) {
    console.log('Borrar',usuario);
    this.presentarToast('Borrado !!','danger','Borrar')
    this.lista.closeSlidingItems();
  }

  async presentarToast(message: string, color:string, header: string) {
    const toast = await this.toastCtrl.create({
      header,
      message,
      color,
      animated: true,
      position: 'middle',
      duration: 2000
    });
    await toast.present();
  }


}
