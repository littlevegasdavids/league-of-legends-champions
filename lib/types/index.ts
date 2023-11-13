export interface Champion {
    id: string;
    name: string;
    lore: string;
    allytips: string[];
    enemytips: string[];
    tags: string[];
    info: {
      attack: number;
      defense: number;
      magic: number;
      difficulty: number;
    };
    spells: any[];
    passive: any;
    title: string
  }
  