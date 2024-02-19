import { type LanguagesType, type CurrenciesType } from './types';

export const formatCurrencies = (currencies: CurrenciesType) =>
  Object.values(currencies).map(({ name }) => name).join(', ');


export const formatLanguages = (languages: LanguagesType) => Object.values(languages).join(', ');

export const formatCapital = (capital: string[]) => capital.join(', ');