import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'role',
  pure: false
})

export class RolePipe implements PipeTransform {
  transform(input: Member[], role){
    var output: Member[] = [];
    if(input != null) {
      if (role === "Fighter") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].role === "Fighter") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (role === "Healer") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].role === "Healer") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (role === "Mage") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].role === "Mage") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (role === "Rogue") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].role === "Rogue") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    } else {
    return input;
    }
  }
}
