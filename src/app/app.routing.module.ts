import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotolistResolver } from "./photos/photo-list/photo-list.resolve";


const routes: Routes = [
  { path: 'user/:userName',
   component: PhotoListComponent,
   resolve: {
     photos: PhotolistResolver
   }
  },
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
