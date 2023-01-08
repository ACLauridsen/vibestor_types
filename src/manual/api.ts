import { SessionFilters } from "./mapper"

export interface APITracksBody {
    filters: SessionFilters
    offset: number
    limit: number
}
