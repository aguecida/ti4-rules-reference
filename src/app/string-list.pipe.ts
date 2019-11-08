import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringList' })
export class StringListPipe implements PipeTransform {

    transform(array: string[]): string {
        return array.join(', ');
    }

}
