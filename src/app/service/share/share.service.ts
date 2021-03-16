import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private data: BehaviorSubject<boolean>;

  constructor() {
    this.data = new BehaviorSubject<boolean>(false);
  }

  getValue(): Observable<boolean> {
    return this.data.asObservable();
  }

  setValue(newValue): void {
    this.data.next(newValue);
  }
}
