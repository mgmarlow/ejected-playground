import { sandboxOf } from 'angular-playground';
import { AppComponent } from "./app.component";

export default sandboxOf(AppComponent)
    .add('Default', {
        template: '<app-root></app-root>'
    });
    