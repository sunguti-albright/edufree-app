import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourcesRoutingModule } from './courses-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './courses.component';

@NgModule({
    declarations: [HomeComponent, CoursesComponent],
    imports: [CommonModule, CourcesRoutingModule]
})
export class CoursesModule {}
