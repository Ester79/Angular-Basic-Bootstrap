import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TitleModule } from 'src/app/@widgets/title/title.module';

// REACTIVO
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    HttpClientModule,
    ReactiveFormsModule,



  ],
  exports: [ContactComponent]
})
export class ContactModule { }
