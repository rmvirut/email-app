import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { InboxListComponent } from './inbox-list/inbox-list.component';

import { RouterModule, Routes } from '@angular/router';
import { ArchivedListComponent } from './archived-list/archived-list.component';
import { SentListComponent } from './sent-list/sent-list.component';
import { InboxDetailComponent } from './inbox-detail/inbox-detail.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: InboxListComponent,
    data: { title: 'Inbox' }
  },
  {
    path: 'archived',
    component: ArchivedListComponent,
    data: { title: 'Archived Messages' }
  },
  {
    path: 'sent',
    component: SentListComponent,
    data: { title: 'Sent Messages' }
  },
  { path: 'inbox/:emailId', component: InboxDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    InboxListComponent,
    ArchivedListComponent,
    SentListComponent,
    InboxDetailComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
