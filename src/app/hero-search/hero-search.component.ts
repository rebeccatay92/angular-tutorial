import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>

  private searchTerms = new Subject<string>()

  search(term: string): void {
    this.searchTerms.next(term)
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300)

      // ignore new term if it hasnt changed
      distinctUntilChanged()

      // switch to new search observable every time term changes. generates observable (search result) if term clears the previous 2 statements. switchmap only returns observable of most recent call, discards previous.
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }

}
