import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate', })
export class TruncatePipe implements PipeTransform {
  transform(value: string | undefined, limit = 20, ellipsis = '…'): string {
    if (!value) return ''; // handles undefined
    return value.length > limit ? value.substring(0, limit) + ellipsis : value;
  }
}
