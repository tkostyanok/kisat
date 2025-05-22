import type { JSX } from 'react';

export interface IMainMenuListItem {
  icon: JSX.Element;
  isVisible: boolean;
  link: string;
  title: string;
}