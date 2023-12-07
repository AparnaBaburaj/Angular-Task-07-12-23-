import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private dataSubject = new BehaviorSubject<string[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor() {
    this.loadData();
  }

  private loadData(): void {
    // Replace this with your actual data loading logic
    const initialData: string[] = ['Aparna TB - Trainee', 'Anupama KS - Intern', 'Athulya Shaji - Senior Developer','Athul Raj- Junior Developer','Jaison Varghese- Software Tester'];
    this.dataSubject.next(initialData);
  }

  deleteItem(index: number): void {
    const currentData = this.dataSubject.value;
    currentData.splice(index, 1);
    this.dataSubject.next([...currentData]);
  }
}
