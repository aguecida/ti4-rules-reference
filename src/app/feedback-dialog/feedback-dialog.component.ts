import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { DataService } from '../data.service';

@Component({
    selector: 'app-feedback-dialog',
    templateUrl: './feedback-dialog.component.html',
    styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<FeedbackDialogComponent>, private service: DataService) { }

    ngOnInit() {
    }

    submit(input: string): void {
        if (!input) {
            return;
        }

        this.service.submitFeedback(input).subscribe(() => {
            this.dialogRef.close({ sent: true });
        }, () => {
            this.dialogRef.close({ sent: false });
        });
    }

}
