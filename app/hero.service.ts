/**
 * Created by Jorge Luis on 27/11/2016.
 */
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import {Hero} from "./heroes";


@Injectable()
export class HeroService {
    constructor(private http:Http) {
        console.log("soy servicios" + this.getHeroesList())
    }

    getHeroesList() {
        return this.http.get('http://udem.herokuapp.com/heroes')
            .map(res => <Hero[]> res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}