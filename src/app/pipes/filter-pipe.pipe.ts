import { Pipe, PipeTransform } from '@angular/core';
import { numberDetails } from '../format';
@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  numberDetails:any=numberDetails;
  transform(number: any, code:any): string {
    
    let result:string;
    result=number.match(numberDetails[numberDetails.map(i => i.code).indexOf(code.slice(1,code.length))].format);
    if(code==='+61'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4];
    }
    else if(code==='+1'){
      return code+' '+result[2]+'-'+result[3]+'-'+result[4];
    }
    else if(code==='+86'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4];
    }
    else if(code==='+20'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4];
    }
    else if(code==='+33'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4]+'-'+result[5]+'-'+result[6];
    }
    else if(code==='+49'){
      return code+'-'+result[2]+'-'+result[3];
    }
    else if(code==='+852'){
      return code+'-'+result[2]+'-'+result[3];
    }
    else if(code==='+91'){
      return code+'-'+result[2]+'-'+result[3];
    }
    else if(code==='+81'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4];
    }
    else if(code==='+254'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4];
    }
    else if(code==='+65'){
      return code+'-'+result[2]+'-'+result[3];
    }
    else if(code==='+60'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4];
    }
    else if(code==='+850'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4];
    }
    else if(code==='+34'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4];
    }
    else if(code==='+92'){
      return code+'-'+result[2]+'-'+result[3];
    }
    else if(code==='+974'){
      return code+'-'+result[2]+'-'+result[3];
    }
    else if(code==='+7'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4]+'-'+result[5];
    }
    else if(code==='+27'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4];
    }
    else if(code==='+90'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4];
    }
    else if(code==='+380'){
      return code+'-'+result[2]+'-'+result[3]+'-'+result[4];
    }
    return '';
  }


}
