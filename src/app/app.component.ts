import { Component } from '@angular/core';
import { CommonModule,DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestService } from './test.service';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AppComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';

  data: string[] = [];

  constructor(private dataService: TestService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((data) => {
      this.data = data;
    });
  }

  async onDelete(index: number): Promise<void> {
    const result = await this.showDeleteConfirmation();
    
    if (result.isConfirmed) {
      this.dataService.deleteItem(index);
      Swal.fire('Deleted!', 'Item has been deleted.', 'success');
    }
  }

  private showDeleteConfirmation(): Promise<SweetAlertResult> {
    return Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  }
}
