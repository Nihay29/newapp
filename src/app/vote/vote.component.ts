import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css',
})
export class VoteComponent {
  votesA: number = 0;
  votesB: number = 0;
  showWinner: boolean = false;
  winner: string = '';

  ngOnInit(): void {
    this.startCountdown();
  }

  voteA() {
    this.votesA++;
  }

  voteB() {
    this.votesB++;
  }

  startCountdown() {
    setTimeout(() => {
      this.determineWinner();
    }, 10000);
  }

  determineWinner() {
    this.showWinner = true;
    if (this.votesA > this.votesB) {
      this.winner = 'A';
    } else if (this.votesB > this.votesA) {
      this.winner = 'B';
    } else {
      this.winner = "It's a Tie";
    }

    setTimeout(() => {
      this.showWinner = false;
    }, 5000);
  }
}
