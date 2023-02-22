import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Pipe para decode en utf-8 los textos de los comentarios.
 */
@Pipe({ name: 'decodeHTML' })
export class DecodeHTML implements PipeTransform {
    constructor(private sanitized: DomSanitizer) {}
    transform(value: string) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
