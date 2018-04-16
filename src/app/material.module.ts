import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, NoopAnimationsModule, MatTabsModule, MatMenuModule],
  exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, NoopAnimationsModule, MatTabsModule, MatMenuModule],
})
export class MaterialModule { }
