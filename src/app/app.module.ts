import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsListModule } from './posts-list/posts-list.module';
import { StorageService } from './services/storage.service';
import { StorageServiceModule } from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PostsListModule,
    StorageServiceModule,
  ],
  providers: [HttpClientModule, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }