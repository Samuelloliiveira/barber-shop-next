import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import Link from "next/link"

interface BarbershopItemProps {
  barbershop: Barbershop
}

export default function BarbershopItem({ barbershop }: BarbershopItemProps) {
  return (
    <Card className="min-w-[167px] overflow-hidden rounded-xl">
      <CardContent className="p-0">
        <div className="relative mb-2 h-[159px] w-full">
          <Image
            fill
            className="object-cover"
            src={barbershop.imageUrl}
            alt={barbershop.name}
          />

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5.0</p>
          </Badge>
        </div>

        <div className="px-2 pb-3">
          <h3 className="mb-1 truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant="secondary" className="mt-3 w-full" asChild>
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
// Server Components
