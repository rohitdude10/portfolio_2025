import { ReactNode } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'react' {
  interface CSSProperties {
    [key: string]: any;
  }
}

export interface ChildrenProps {
  children: ReactNode;
} 