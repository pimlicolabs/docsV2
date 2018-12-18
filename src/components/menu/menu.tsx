import { Component } from '@stencil/core';
import componentsMenu from './components';
import nativeMenu from './native';
import mainMenu from './main';
import cliMenu from './cli';

@Component({
  tag: 'docs-menu',
  styleUrl: 'menu.css'
})
export class DocsMenu {
  render() {
    return (
      <stencil-route-switch>
        <stencil-route url="/docs/cli" routeRender={cliMenu}/>
        <stencil-route url="/docs/native" routeRender={nativeMenu}/>
        <stencil-route url="/docs/components" routeRender={componentsMenu}/>
        <stencil-route routeRender={mainMenu}/>
      </stencil-route-switch>
    );
  }
}
