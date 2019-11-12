import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ExploreComponent } from "./components/explore/explore.component";
import { UploadComponent } from "./components/upload/upload.component";

const appRoutes: Routes = [
  { path: "home", component: UploadComponent },
  { path: "upload", component: UploadComponent },
  { path: "explore", component: ExploreComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExploreComponent,
    UploadComponent,PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
