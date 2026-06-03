import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-8 overflow-hidden bg-card py-8 text-sm text-card-foreground shadow-sm ring-1 ring-foreground/5 has-[>img:first-child]:pt-0 data-[size=sm]:gap-5 data-[size=sm]:py-5 *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 rounded-none px-8 group-data-[size=sm]/card:px-5 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-8 group-data-[size=sm]/card:[.border-b]:pb-5",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-lg font-semibold tracking-wider uppercase",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-8 group-data-[size=sm]/card:px-5", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-8 group-data-[size=sm]/card:px-5 [.border-t]:pt-8 group-data-[size=sm]/card:[.border-t]:pt-5",
        className
      )}
      {...props}
    />
  )
}

// Inteface de dados Pokemon
interface PokemonData {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}

// Componente de export
function PokemonCard({ pokemonUrl }: { pokemonUrl: string }) {
  const [pokemon, setPokemon] = React.useState<PokemonData | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Request pokeapi
    fetch(pokemonUrl)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => console.error("Erro ao buscar detalhes:", err));
  }, [pokemonUrl]);

  if (loading) {
    return (
      <Card className="animate-pulse flex items-center justify-center h-48">
        <span className="text-muted-foreground">Carregando...</span>
      </Card>
    );
  }

  if (!pokemon) return null;

  const pokemonImage = pokemon.sprites.other["official-artwork"].front_default;

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer rounded-xl">
      
      {/* Sprite do Pokémon */}
      <div className="flex justify-center bg-muted/40 p-6 rounded-t-xl">
        <img 
          src={pokemonImage} 
          alt={pokemon.name} 
          className="w-32 h-32 object-contain group-hover/card:scale-105 transition-transform"
        />
      </div>

      <CardHeader className="pt-2">
        <CardAction>
          {/* ID */}
          <span className="text-xs font-bold text-muted-foreground">
            #{String(pokemon.id).padStart(3, "0")}
          </span>
        </CardAction>
        <CardTitle className="text-xl font-bold tracking-tight text-foreground">
          {pokemon.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-6">
        {/* Tags */}
        <div className="flex gap-2">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className={cn(
                "px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider text-white",
                t.type.name === "grass" && "bg-emerald-500",
                t.type.name === "poison" && "bg-purple-500",
                t.type.name === "fire" && "bg-orange-500",
                t.type.name === "water" && "bg-blue-500",
                t.type.name === "bug" && "bg-lime-500",
                t.type.name === "normal" && "bg-zinc-400",
                t.type.name === "electric" && "bg-amber-400 text-zinc-900"
              )}
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </CardContent>

    </Card>
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  PokemonCard,
}
