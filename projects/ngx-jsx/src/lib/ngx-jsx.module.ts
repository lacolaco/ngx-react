import { JSX_RENDERER } from './tokens';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { JsxRenderDirective } from './directives';

@NgModule({
  imports: [],
  declarations: [JsxRenderDirective],
  exports: [JsxRenderDirective]
})
export class JsxModule {
  static forRoot({
    jsxRenderer
  }: {
    jsxRenderer: Function;
  }): ModuleWithProviders {
    return {
      ngModule: JsxModule,
      providers: [
        {
          provide: JSX_RENDERER,
          useValue: jsxRenderer
        }
      ]
    };
  }
}
