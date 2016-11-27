/**
 * Created by Jorge Luis on 27/11/2016.
 */
import {Component} from 'angular2/core';
import {HeroService} from "./hero.service";
import {Hero} from "./heroes";
import {FilterPipe} from "./filter.pipe";

@Component({
    selector: 'my-app',
    templateUrl: 'app/main.html',
    providers: [HeroService],
    pipes:[FilterPipe]
})
export class AppComponent {
    heroes: Hero[];

    constructor(private heroservice: HeroService){}

    ngOnInit() {
        this.getHeroesList();

    }

    getHeroesList() {
        this.heroservice.getHeroesList()
            .subscribe(
                heroes => this.heroes = heroes
            );

    }
}
