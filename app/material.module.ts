import { NgModule } from "@angular/core";
import {MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatTableModule,MatRadioModule, MatTabsModule, MatCardModule, MatDividerModule, MatProgressBarModule} from '@angular/material';

@NgModule({
    imports:[MatButtonModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatFormFieldModule,MatInputModule,MatTableModule,MatRadioModule,MatTabsModule,MatCardModule,MatDividerModule,MatProgressBarModule],
    exports:[MatButtonModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatFormFieldModule,MatInputModule,MatTableModule,MatRadioModule,MatTabsModule,MatCardModule,MatDividerModule,MatProgressBarModule]
})
export class MaterialModule{}