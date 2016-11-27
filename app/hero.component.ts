/*
import {Component} from 'angular2/core';
import {HeroService} from "./hero.service";
import {Hero} from "./heroes";

@Component({
    selector: 'hero-list',
    template: `
   <h3>MY HEROES:</h3>
   
   `,
    providers: [HeroService]
})
export class HeroesComponent {
    heroes: Hero[];
    algo: Object;
    constructor(private heroservice: HeroService){
        this.algo=heroservice.getHeroesList();
        console.log("soy algo " + this.algo);
    }

    ngOnInit() {
        this.getHeroesList();
    }

    getHeroesList() {
        this.heroservice.getHeroesList()
            .subscribe(
                heroes => this.heroes = heroes
            );
    }
}*/
