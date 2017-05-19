import { Component, OnInit, Input } from '@angular/core';
import { ToastService } from "../toast.service";

@Component({
  selector: 'toast-modal',
  templateUrl: './toast-modal.component.html',
  styleUrls: ['./toast-modal.component.css']
})
export class ToastModalComponent implements OnInit {

  public showToast: boolean;
  public message: String;

  @Input()
  public messageTime: number;
  
  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toastService.Toast.subscribe( (message: String) => {
      this.showToast = true;
      this.message = message;
      setTimeout(() => this.showToast = false, 2000);
    })
  }
}
