import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {CoreModule} from '@core/core.module';
import {SidebarComponent} from '@views/shared-components/sidebar/sidebar.component';
import {NavbarComponent} from '@views/shared-components/navbar/navbar.component';
import { FlashCardComponent } from './views/shared-components/task/flash-card/flash-card.component';
import { QuizComponent } from './views/shared-components/task/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FlashCardComponent,
    QuizComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
