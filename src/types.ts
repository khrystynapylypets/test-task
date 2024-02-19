export type CurrenciesType = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

export type LanguagesType = {
  [key: string]: string;
};

export type Country = {
  capital: string[];
  currencies: CurrenciesType;
  languages: LanguagesType;
  region: string;
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
};

export type CountryDetail = Country & {
  flags: {
    alt: string;
    png: string;
    scg: string;
  };
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
};

