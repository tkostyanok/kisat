import type { JSX } from 'react';

export interface IGamesListItem {
  gameName: string;
  image: string | JSX.Element;
  link: string;
}