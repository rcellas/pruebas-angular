import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

import { NotFoundComponent } from './not-found/not-found.component';
// import { CustomPreloadService } from './service/custom-preload.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./website/website.module').then((m) => m.WebsiteModule),
    data: {
      preload: true,
    },
  },
  // esta ruta nos sirve para modularizar las rutas del cms (admin)
  {
    path: 'cms',
    canActivate:[AdminGuard],
    loadChildren: () => import('./cms/cms.module').then((m) => m.CmsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Por defecto en angular
      // preloadingStrategy: PreloadAllModules
      // Custom
      // preloadingStrategy: CustomPreloadService
      // Para que se cargen solo los modulos que tengamos en pantalla
      preloadingStrategy: QuicklinkStrategy
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
