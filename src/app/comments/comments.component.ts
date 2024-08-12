import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [SingleCommentComponent, CommonModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements AfterViewInit, OnDestroy {
  comments = [
    {
      name: "Mailo Mittelstädt",
      title: "JOIN",
      comment: "Jonas ist in Gruppenarbeiten ein wertvolles Mitglied, da er stets mit einer positiven Einstellung und viel Motivation dabei ist. Er bringt innovative Ideen ein und fördert durch seine offene Kommunikation einen regen Austausch im Team."
    },
    {
      name: "Joel Sygulla",
      title: "JOIN",
      comment: "Es war eine große Bereicherung, Jonas bei unserem Projekt Join als Teamkollegen zu haben. Er konnte seine Aufgaben erfolgreich umsetzen und war durch seine nette und zuvorkommende Art jemand, mit dem man gerne zusammenarbeitet. Jonas hat gute Fachkenntnisse, eine gute Kommunikation und war stets hilfsbereit. Die Teamarbeit mit ihm hat wirklich Spaß gemacht, und ich kann ihn ohne Zweifel weiterempfehlen."
    },
    {
      name: "Alexander Hähnlein",
      title: "JOIN",
      comment: "Jonas leistete in unserem Gruppenprojekt Join (Kanban-Board) hervorragende Arbeit bei der Erledigung seiner Aufgaben. Er zeigte sich engagiert und integrierte sich gut ins Team, indem er aktiv zum Projekt beitrug. Seine zuverlässige Arbeit und Teamfähigkeit machten die Zusammenarbeit mit ihm sehr angenehm. Ich empfehle ihn gerne weiter."
    }
  ];

  slideIndex = 1;
  private slideInterval: any;

  ngAfterViewInit() {
    this.showSlides(this.slideIndex); // Der erste Kommentar wird direkt nach dem Rendern der Ansicht angezeigt
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval); // Den Timer beim Zerstören der Komponente stoppen
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.plusSlides(1);
    }, 5000); // Wechselt alle 5 Sekunden zum nächsten Kommentar
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.slideIndex - 1].style.display = "block";
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[this.slideIndex - 1].className += " active";
  }
}

