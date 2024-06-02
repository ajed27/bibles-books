import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { VersionComponent } from './pages/version/version.component';
import { DictionaryComponent } from './pages/dictionary/dictionary.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LibraryComponent } from './pages/library/library.component';
import { LibraryModalComponent } from './components/modals/library-modal/library-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DocumentModalComponent } from './components/modals/document-modal/document-modal.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { TabernacleComponent } from './pages/presentation/tabernacle/tabernacle.component';


@NgModule({
  declarations: [
    VersionComponent,
    DictionaryComponent,
    HomePageComponent,
    LibraryComponent,
    LibraryModalComponent,
    DocumentModalComponent,
    PresentationComponent,
    TabernacleComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
  ]
})
export class HomeModule { }
