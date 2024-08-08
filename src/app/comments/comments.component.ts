import { Component } from '@angular/core';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [SingleCommentComponent, CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {


  comments: {
    name: string;
    title: string;
    comment: string;
  } [] =[{
    name: "Mailo Mittelstädt",
    title: "JOIN",
    comment: "Jonas ist in Gruppenarbeiten ein wertvolles Mitglied, da er stets mit einer positiven Einstellung und viel Motivation dabei ist. Er bringt innovative Ideen ein und fördert durch seine offene Kommunikation einen regen Austausch im Team. ",
  },
{
name: "Joel Sygulla",
title: "JOIN",
comment: "Es war eine große Bereicherung, Jonas bei unserem Projekt Join als Teamkollegen zu haben. Er konnte seine Aufgaben erfolgreich umsetzen und war durch seine nette und zuvorkommende Art jemand, mit dem man gerne zusammenarbeitet. Jonas hat gute Fachkenntnisse, eine gute Kommunikation und war stets hilfsbereit. Die Teamarbeit mit ihm hat wirklich Spaß gemacht, und ich kann ihn ohne Zweifel weiterempfehlen.",
},
{
  name: "Alexander Hähnlein",
  title: "JOIN",
  comment: "Jonas leistete in unserem Gruppenprojekt Join (Kanban-Board) hervorragende Arbeit bei der Erledigung seiner Aufgaben. Er zeigte sich engagiert und integrierte sich gut ins Team, indem er aktiv zum Projekt beitrug. Seine zuverlässige Arbeit und Teamfähigkeit machten die Zusammenarbeit mit ihm sehr angenehm. Ich empfehle ihn gerne weiter.",
}]
}
