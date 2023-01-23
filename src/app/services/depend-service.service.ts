import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DependServiceService {
  constructor() {}

  getDataFromDependService() {
    return 'This is coming from depend service';
  }
}
