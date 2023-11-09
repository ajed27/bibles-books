import { Character } from "./character"

export interface Book {
  id: number
  name: string
  description: string
  capsCount: number
  versCount: number
  url: string[]
  characters: Character[]
  dateAprox: string
  historicalContext: string
  author: string
}
