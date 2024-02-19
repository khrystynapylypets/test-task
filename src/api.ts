import axios from 'axios';
import { type Country, type CountryDetail } from './types';

const API_URL = 'https://restcountries.com/v3.1/';

type GetAllCountriesFn = () => Promise<Country[]>;
type GetCountryFn = (name: string) => Promise<CountryDetail>;

export const getAllCountries: GetAllCountriesFn = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/all`,
      {
        params: {
          fields: 'name,capital,currencies,languages,region'
        }
      }
    );

    if (response.status >= 400) {
      throw new Error('Can not fetch countries. Please try again later');
    }

    return response.data as Country[];
  } catch (error) {
    const errorMessage = (error as Error)?.message;

    throw new Error(errorMessage || 'Can not fetch countries. Please try again later');
  }
};

export const getCountry: GetCountryFn = async (name: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/name/${name}`,
      {
        params: {
          fields: 'name,capital,currencies,languages,region,flags,maps'
        }
      }
    );

    if (response.status >= 400) {
      throw new Error(`Can not fetch country ${name}. Please try again later`);
    }

    return response.data[0] as CountryDetail;
  } catch (error) {
    const errorMessage = (error as Error)?.message;

    throw new Error(errorMessage || `Can not fetch country ${name}. Please try again later`);
  }
};