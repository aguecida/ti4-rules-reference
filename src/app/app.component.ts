import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    algoliaConfig = {
        apiKey: '15460ccde918192c7148807d4ef64427',
        appId: '07EW71RCS5',
        indexName: 'twilight-imperium'
    };

    constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {

    }

    openDialog(): void {
        const ref = this.dialog.open(FeedbackDialogComponent, {
            autoFocus: false,
            width: '300px'
        });

        ref.afterClosed().subscribe(result => {
            if (!result) {
                return;
            }

            const statusMessage = result.sent ?
                'Thanks for your feedback!' :
                'Sorry, we were unable to submit your feedback at this time.';

            this.snackBar.open(statusMessage);
        });
    }

}
