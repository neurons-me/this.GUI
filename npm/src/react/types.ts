import type ME from 'this.me';
import type { RuntimeAdapter } from '@/runtime/adapter';

export type MeTargetLike =
  | string
  | {
      scheme?: string;
      namespace?: string;
      operation?: string;
      path?: string;
      raw?: string;
      contextRaw?: string | null;
      [key: string]: any;
    };

export type MeLike =
  | ME
  | ({
      (path: string): any;
      (path: string, value: any): any;
      execute?: (target: MeTargetLike, body?: any) => any;
      inspect?: (opts?: any) => any;
      explain?: (path: string) => any;
      subscribe?: (path: string, callback: () => void) => (() => void) | void;
      [key: string]: any;
    } & Record<string, any>);

export type MeSubscribeBridge = (path: string, callback: () => void) => (() => void) | void;

export type MeRuntimeContextValue = {
  me: MeLike;
  runtime: RuntimeAdapter | null;
  subscribe?: MeSubscribeBridge | null;
};
