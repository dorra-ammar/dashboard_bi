import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { AddColumnComponent } from './components/add-column/add-column.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ChartDesignComponent } from './components/chart-design/chart-design.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChartsComponent } from './components/charts/charts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatCardModule} from "@angular/material/card";
import {ChartsModule} from "ng2-charts";
import {HttpClientModule} from "@angular/common/http";
import {MatTooltipModule} from '@angular/material/tooltip';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FilteringComponent} from "./components/filtering/filtering.component";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatGridListModule} from '@angular/material/grid-list';
import {TextFieldModule} from '@angular/cdk/text-field';
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    AddColumnComponent,
    ChartDesignComponent,
    ChartsComponent,
    PageNotFoundComponent,
    FilteringComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatButtonToggleModule,
    DragDropModule,
    FormsModule,
    MatCardModule,
    ChartsModule,
    HttpClientModule,
    MatTooltipModule,
    ScrollingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule,
    TextFieldModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    AddColumnComponent,
    MatButtonToggleModule,
    ChartsComponent,
    MatTooltipModule,
    ScrollingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})

export class SharedModule { }
