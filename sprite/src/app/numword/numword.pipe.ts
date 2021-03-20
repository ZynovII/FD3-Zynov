import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numword',
  pure: true,
})
export class NumwordPipe implements PipeTransform {
  transform(numIn: string, word1: string, word2: string, word5: string): string {
    const num:number = parseFloat(numIn);
    var dd = num % 100;
    if (dd >= 11 && dd <= 19) return numIn +' '+ word5;
    var d = num % 10;
    if (d == 1) return numIn +' '+ word1;
    if (d >= 2 && d <= 4) return numIn +' '+ word2;
    return numIn +' '+ word5;
  }
}
