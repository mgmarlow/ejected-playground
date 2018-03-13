import { initializePlayground, PlaygroundModule } from "angular-playground";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

initializePlayground('app-root');
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
