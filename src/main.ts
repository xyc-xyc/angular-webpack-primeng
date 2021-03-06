import 'primeng/resources/themes/omega/theme.css';
import 'primeng/resources/primeng.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "@angular/material/prebuilt-themes/indigo-pink.css";

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
