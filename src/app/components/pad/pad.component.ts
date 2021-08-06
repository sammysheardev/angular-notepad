import { TranslationWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.scss']
})
export class PadComponent implements OnInit {

  currentNote!: string;
  notesList!: Array<string>;
  currentIndex!: number;

  constructor() { }

  ngOnInit(): void {
    const currentNoteData = localStorage.getItem("currentNote");
    const currentIndexData = localStorage.getItem("currentIndex");
    const notesListData = localStorage.getItem("notesList");
    console.log(currentNoteData, notesListData, currentIndexData);
    if (currentNoteData) this.currentNote = currentNoteData;
    else this.currentNote = "";

    if (notesListData) this.notesList = JSON.parse(notesListData);
    else this.notesList = [this.currentNote];

    if (currentIndexData) this.currentIndex = parseInt(currentIndexData);
    else this.currentIndex = 0;
  }

  nextPage(): void {
    this.notesList[this.currentIndex] = this.currentNote;
    this.currentIndex += 1;
    if (this.notesList[this.currentIndex]) this.currentNote = this.notesList[this.currentIndex];
    else this.currentNote = "";
    localStorage.setItem("currentNote", this.currentNote);
    localStorage.setItem("notesList", JSON.stringify(this.notesList));
    localStorage.setItem("currentIndex", this.currentIndex.toString());
  }

  prevPage(): void {
    this.notesList[this.currentIndex] = this.currentNote;
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
    this.currentNote = this.notesList[this.currentIndex];
    localStorage.setItem("currentNote", this.currentNote);
    localStorage.setItem("notesList", JSON.stringify(this.notesList));
    localStorage.setItem("currentIndex", this.currentIndex.toString());
  }

}
