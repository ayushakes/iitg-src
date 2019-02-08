import { NgModule } from "@angular/core";
import {MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatTableModule,MatRadioModule, MatTabsModule, MatCardModule, MatDividerModule} from '@angular/material';

@NgModule({
    imports:[MatButtonModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatFormFieldModule,MatInputModule,MatTableModule,MatRadioModule,MatTabsModule,MatCardModule,MatDividerModule],
    exports:[MatButtonModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatFormFieldModule,MatInputModule,MatTableModule,MatRadioModule,MatTabsModule,MatCardModule,MatDividerModule]
})
export class MaterialModule{}