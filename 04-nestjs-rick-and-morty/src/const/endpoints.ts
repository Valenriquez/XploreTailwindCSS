export const endpoints = {
    getCharacter: (id: number) => `/api/character/${id}`,
    getAllCharacters: () => '/api/character',
    getMultipleCharacters: (ids: number[]) => `/api/character/[${ids.join(',')}]`,
    getMultipleEpisodes: (ids: number[]) => `/api/episode/[${ids.join(',')}]`,
}