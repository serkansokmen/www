import { Injectable } from '@angular/core';
// import { UnityLoader } from 'unity-loader';

declare let window: any;
declare var Module: any;
declare var UnityLoader: any;
declare var UnityProgress: any;

@Injectable({
  providedIn: 'root'
})
export class UnityService {

  private gameInstance: any;

  load(componentId: string) {
    window.UnityLoader = UnityLoader;
    this.gameInstance = UnityLoader.instantiate(componentId, "./assets/Build/Build.json", {
      onProgress: UnityProgress
    });
  }

  sendMessage(messageHandler: string, message: any) {
    this.gameInstance.SendMessage(messageHandler, message.type, JSON.stringify(message.payload));
  }

}
