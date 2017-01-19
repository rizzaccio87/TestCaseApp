import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as materialLite from '@mdl';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => {
        materialLite.componentHandler.upgradeAllRegistered();
    })
    .catch(err => console.error(err));