import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AdminGuard } from './core/guards/admin/admin.guard';
import { AuthGuard } from './core/guards/auth/auth.guard';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';
// import { CustomPreloadService } from './service/custom-preload.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./product/website.module').then((m) => m.WebsiteModule),
    data: {
      preload: true,
    },
  },
  // esta ruta nos sirve para modularizar las rutas del cms (admin)
  {
    path: 'cms',
    canActivate:[AdminGuard,AuthGuard],
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
