/**
 * Created by Jorge Luis on 27/11/2016.
 */
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{
    transform(value, args){
        if (!args[0]){
            return value;
        }else{
            if (value){

                return value.filter(item => {
                    for (let key in item){
                        if((typeof item[key] == 'string' || item[key] instanceof String)
                        && (item[key].indexOf(args[0]) !== -1)){
                            return true;
                        }
                    }
                })
            }
        }
    }

    /*transform(value){
        return value.filter((item)=> item.name.startsWith('I'))
    }*/



    /*transform(hero: any, term?: any): any{

        if (term === undefined){
            return hero;
        }

        return hero.filter(function (hero) {
            return hero.name.includes(term);
        })
    }*/
}
