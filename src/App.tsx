import * as React from "react"
import { Input } from "./components/ui/searchBar" 
import { PokemonCard } from "./components/ui/pokemonCard"

interface PokemonListItem {
  name: string;
  url: string;
}

export function App() {
  // Estados de busca na api
  const [listaDePokemons, setListaDePokemons] = React.useState<PokemonListItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [pesquisa, setPesquisa] = React.useState("");

  // Carrega gen 1
  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setListaDePokemons(data.results);
        setLoading(false);
      })
      .catch((err) => console.error("Erro ao buscar lista de Pokémon:", err));
  }, []);

  // Lógica da pesquisa
  const pokemonsFiltrados = listaDePokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="flex min-h-svh w-full flex-col items-center bg-zinc-50 p-6 dark:bg-zinc-950">
      <div className="flex w-full max-w-6xl flex-col items-center gap-6">
        
        {/* Logo */}
        <header className="flex justify-center py-4">
          <img 
            src="/components/logo.png" 
            alt="Pokédex Logo" 
            className="h-24 object-contain"
          />
        </header>

        {/* Barra de Pesquisa */}
        <section className="flex w-full max-w-md gap-2">
          <Input
            type="text" 
            placeholder="Pesquisar Pokémon pelo nome..." 
            className="w-full bg-white dark:bg-zinc-900"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)} 
          />
        </section>

        {/* Grid */}
        {loading ? (
          <div className="flex h-40 items-center justify-center font-medium text-muted-foreground">
            Carregando Pokédex...
          </div>
        ) : (
          <main className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pokemonsFiltrados.map((p) => (
              <PokemonCard key={p.name} pokemonUrl={p.url} />
            ))}
          </main>
        )}

        {/* Erro, não encontrado */}
        {!loading && pokemonsFiltrados.length === 0 && (
          <p className="text-sm text-muted-foreground mt-8">
            Nenhum Pokémon encontrado com o nome "{pesquisa}".
          </p>
        )}

      </div>
    </div>
  )
}

export default App