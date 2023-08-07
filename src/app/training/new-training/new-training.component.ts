import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit {
  exercises: Observable<any>;
  firestore: Firestore = inject(Firestore);

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    const exerciseCollection = collection(this.firestore, 'availableExercises');
    this.exercises = collectionData(exerciseCollection);
    // this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
