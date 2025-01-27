import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';



@NgModule({
  // Non-standalone components
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ],
  // Standalone components
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    TasksModule
    // HeaderComponent,
    // UserComponent,
    // TasksComponent
  ],
  // The root component
  bootstrap: [AppComponent]
})
export class AppModule { }
