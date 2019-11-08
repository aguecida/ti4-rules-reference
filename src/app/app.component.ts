import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ti4-rules-reference';

    algoliaConfig = {
        apiKey: '15460ccde918192c7148807d4ef64427',
        appId: '07EW71RCS5',
        indexName: 'twilight-imperium'
    };
}
