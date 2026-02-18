import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";
import { Personalprofile } from "./personalprofile/personalprofile";
import { TechnicalSkills } from './technicalskills/technicalskills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Skills, Footer, Personalprofile, TechnicalSkills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('act2-app');
}
