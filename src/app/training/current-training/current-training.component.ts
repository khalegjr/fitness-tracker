import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss'],
})
export class CurrentTrainingComponent implements OnInit {
  progress: number = 0;
  timer!: number;

  constructor(private dialog: Dialog) {}

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress += 5;

      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);

    this.dialog.open<string>(DialogComponent);
  }
}
