import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleRight, faAward, faBlog, faBriefcase, faCode, faDatabase, faEnvelopeOpenText, faEnvelopeSquare, faEye, faFileAlt, faGlobe, faIndustry, faLaptopCode, faLink, faMapMarkerAlt, faPaperPlane, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faCss3, faGithubAlt, faHtml5, faJsSquare, faLess, faLinkedinIn, faReact, faSass, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';

var faIcons: IconDefinition[] = [
  faFileAlt, 
  faUser, 
  faLaptopCode, 
  faBriefcase, 
  faBlog, 
  faEnvelopeOpenText, 
  faPaperPlane,
  faLinkedinIn,
  faGithubAlt,
  faPaperPlane,
  faJsSquare,
  faReact,
  faAngular,
  faVuejs,
  faHtml5,
  faCss3,
  faSass,
  faLess,
  faDatabase,
  faCode,
  faEye,
  faArrowAltCircleRight,
  faMapMarkerAlt,
  faGlobe,
  faEnvelopeSquare,
  faGithubAlt,
  faAward,
  faLink,
  faUser,
  faIndustry
]

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(...faIcons);
  }
}
