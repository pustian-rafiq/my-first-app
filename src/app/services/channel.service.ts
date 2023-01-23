import { Injectable } from '@angular/core';
import { DependServiceService } from './depend-service.service';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  constructor(private DependServiceService: DependServiceService) {
    console.log(
      'From depend service: ',
      DependServiceService.getDataFromDependService()
    );
  }

  display() {
    return 'Welcome to SOFTIC Family';
  }

  getDataFromComponent(data: string) {
    console.log('This is coming from components: ', data);
  }
}
