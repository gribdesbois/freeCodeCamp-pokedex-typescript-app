const container: HTMLElement | any = document.getElementById('app')
const pokemons = 100

interface IPokemon {
  id: number
  name: number
  image: string
  type: string
}

const getPokemon = async (id: number): Promise<void> => {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const pokemon: any = await data.json()
  const pokemonType: string = pokemon.types
    .map((poke: any) => poke.type.name)
    .join(', ')

  const transformedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType,
  }

  showPokemon(transformedPokemon)
}

const fetchData = (): void => {
  for (let i = 1; i <= pokemons; i++) {
    getPokemon(i)
  }
}
