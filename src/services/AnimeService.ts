import { AnimeType } from '../types';

const animes = [
    {id: 1, likes: 1234, name: 'Jujutsu Kaisen', description: 'JUJUTSU KAISEN is a serialized manga series with story and artwork by Gege Akutami and published in Weekly Shonen Jump. An anime adaptation came shortly after, with animation handled by Studio MAPPA.'},
    {id: 2, likes: 124, name: 'Attack on Titan', description: 'Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress.'},
    {id: 3, likes: 512, name: 'Monster', description: 'The young Dr Tenma lives in Germany and is engaged to the daughter of the hospital director. After he operates on a boy, he loses his job and fiancée. When the doctors who fired him are poisoned, he is the prime suspect.'},
    {id: 4, likes: 12451, name: 'Parasyte -the maxim-', description: 'They arrived in silence and darkness, descending from the skies with a hunger for human flesh. Parasites - alien creatures who must invade and take control of a human host to survive – have come to Earth.'},
    {id: 5, likes: 35255, name: 'Berserk', description: 'Spurred by the flame raging in his heart, the Black Swordsman Guts continues his seemingly endless quest for revenge. Standing in his path are heinous outlaws, delusional evil spirits, and a devout child of god.'},
];

const AnimeService = {
    getAll: async (): Promise<AnimeType[]> => {
        return animes;
    },
    getOneById: async (id: number): Promise<AnimeType | undefined> => {
        return animes.find((anime) => anime.id === id);
    },
    updateOneById: async (id: number, name: string, description: string) => {
        const anime = animes.find((anime) => anime.id === id);
        // Revisar esto si algo no funciona
        if (anime) {
            const index = animes.indexOf(anime);
            anime.name = name;
            anime.description = description;
            return [
                ...animes,
                animes[index] = anime
            ]
        }
    },
    create: async (name: string, description: string): Promise<void> => {
        const currentMaxId = animes[animes.length - 1].id;
        const newAnimeId = currentMaxId + 1;
        const newAnime = {
            id: newAnimeId,
            likes: 0,
            name,
            description
        }
        animes.push(newAnime);
    },
    deleteById: async (id: number): Promise<void> => {
        const anime = animes.find((anime) => anime.id === id);
        if (anime) {
            const index = animes.indexOf(anime);
            animes.splice(index, 1);
        }
    },
    updateLikesById: async (id: number, likes: number): Promise<void> => {
        const anime = animes.find((anime) => anime.id === id);
        if (anime) {
          anime.likes = likes;
        }
      },
};

export default AnimeService;
