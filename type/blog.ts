import { ReactNode } from 'react';

export interface BlogProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: ReactNode;
  category: CategoryProps;
}

export interface CategoryProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}
