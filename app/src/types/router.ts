export type RootStackParamList = {
  Home: undefined;
  Stack: { type: string };
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};