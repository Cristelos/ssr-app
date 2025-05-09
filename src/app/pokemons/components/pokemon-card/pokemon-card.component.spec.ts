import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { provideRouter } from '@angular/router';
import { SimplePokemon } from '../../interfaces';

const mockPokemon: SimplePokemon = {
  id: '1',
  name: 'bulbasaur',
};

describe('PokemonCardComponent', () => {
  let fixture: ComponentFixture<PokemonCardComponent>;
  let compiled: HTMLElement;
  let component: PokemonCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    fixture.componentRef.setInput('pokemon', mockPokemon);

    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    // console.log(compiled);

    expect(component).toBeTruthy();
  });

  it('should have the SimplePokemon signal inputValue', () => {
    // Parte del typeScript
    expect(component.pokemon()).toEqual(mockPokemon);
  });

  it('should render the pokemon name and image correctly', () => {
    // Parte del HTML
    const pokemonName = compiled.querySelector('h2');
    const pokemonImage = compiled.querySelector('img');

    expect(pokemonName?.innerHTML.trim()).toBe(mockPokemon?.name);
    expect(pokemonImage?.getAttribute('src')).toContain(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${mockPokemon.id}.png`
    );

    // Cómo lo solucionó Fernando:
    const image = compiled.querySelector('img')!;
    expect(image).toBeDefined();

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${mockPokemon.id}.png`;
    expect(image.src).toBe(imageUrl);

    expect(compiled.textContent?.trim()).toBe(mockPokemon.name); //Creo que el mío está mejor porque selecciona el nombre, en cambio, en la opción de Fernando si se añade más texto fallaría esta prueba
  });

  it('should have the proper ng-reflect-router-link', () => {
    // Parte del HTML
    const divElement = compiled.querySelector('div');

    expect(
      divElement?.attributes.getNamedItem('ng-reflect-router-link')?.value
    ).toBe(`/pokemons,${mockPokemon.name}`);
  });
});
