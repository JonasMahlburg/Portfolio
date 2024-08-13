import { Component, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [SingleCommentComponent, CommonModule, TranslateModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements AfterViewInit, OnDestroy {
  translate = inject(TranslationService);

  comments = [
    {
      name: "comment1.name",
      title: "comment1.title",
      comment: "comment1.comment"
    },
    {
      name: "comment2.name",
      title: "comment2.title",
      comment: "comment2.comment"
    },
    {
      name: "comment3.name",
      title: "comment3.title",
      comment: "comment3.comment"
    },
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

