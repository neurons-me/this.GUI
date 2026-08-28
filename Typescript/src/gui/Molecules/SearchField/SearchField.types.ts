import type { SxProps, Theme } from '@mui/material/styles';

export type SearchFieldResult = {
  id: string;
  label: string;
  avatarSrc?: string | null;
  avatarFallback?: string;
};

export type SearchFieldProps = {
  /** Controlled query text — SearchField renders and collapses/expands, it does not fetch or filter. */
  query: string;
  onQueryChange: (query: string) => void;
  /** Already-filtered results to show in the dropdown. */
  results: SearchFieldResult[];
  onSelectResult: (result: SearchFieldResult) => void;
  placeholder?: string;
  /** Shown when the query is non-empty and results is empty. Defaults to a generic "no match" line. */
  emptyLabel?: string;
  /** aria-label for the collapsed icon button. */
  ariaLabel?: string;
  maxResults?: number;
  className?: string;
  sx?: SxProps<Theme>;
  ['data-gui-node-id']?: string;
  ['data-gui-component']?: string;
};

export type SearchFieldResolverSpec = {
  type?: 'SearchField';
  props?: SearchFieldProps;
};
