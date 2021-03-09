import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_FORMATS } from '@angular/material/core';


import { FlowersRoutingModule } from './flowers-routing.module';
import { FlowersComponent } from './flowers.component';
import { FlowerPotComponent } from './components/flower-pot/flower-pot.component';
import { FlowerSeedComponent } from './components/flower-seed/flower-seed.component';
import { FlowerWaterComponent } from './components/flower-water/flower-water.component';
import { FlowerImageComponent } from './components/flower-image/flower-image.component';
import { FlowerDropdownComponent } from './components/flower-dropdown/flower-dropdown.component';
import { FlowerShopComponent } from './components/flower-shop/flower-shop.component';
import { FlowerListComponent } from './components/flower-list/flower-list.component';
import { TitleButtonComponent } from './components/title-button/title-button.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SeedListComponent } from './components/seed-list/seed-list.component';
import { VesgetableComponent } from './components/vesgetable/vesgetable.component';
import { ProductDetialComponent } from './components/product-detial/product-detial.component';
import { FlowerListApiDataComponent } from './components/flower-list-api-data/flower-list-api-data.component';
import { PotListApiDataComponent } from './components/pot-list-api-data/pot-list-api-data.component';


@NgModule({
  declarations: [
    FlowersComponent,
    FlowerPotComponent,
    FlowerSeedComponent,
    FlowerWaterComponent,
    FlowerImageComponent,
    FlowerDropdownComponent,
    FlowerShopComponent,
    FlowerListComponent,
    TitleButtonComponent,
    MainLayoutComponent,
    SeedListComponent,
    VesgetableComponent,
    ProductDetialComponent,
    FlowerListApiDataComponent,
    PotListApiDataComponent,

  ],
  imports: [
    CommonModule,
    FlowersRoutingModule,
    A11yModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    MatRadioModule
  ]
})
export class FlowersModule { }
