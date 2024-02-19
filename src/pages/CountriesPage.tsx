import { useState } from 'react';
import { useQuery } from 'react-query';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import PopupMessage from '../components/PopupMessage';
import CountriesList from '../components/CountriesList';

import { getAllCountries } from '../api';

const CountriesPage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const { data: countriesList = [], isLoading, isFetching } = useQuery(
    'countries',
    getAllCountries,
    {
      onError: (error) => {
        setErrorMessage((error as Error)?.message);
      },
    },
  );

  let content;

  if (isLoading || isFetching) {
    content = (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  } else if (!countriesList.length) {
    content = (
      <Box sx={{ display: 'flex' }}>
        <Typography variant="h6" gutterBottom>
          No countries to display.
        </Typography>
      </Box>
    );
  } else {
    content = (
      <CountriesList countriesList={countriesList} />
    );
  }

  return (
    <>
      <Paper elevation={0} sx={{ maxWidth: 900, margin: '20px auto', paddingX: '10px' }}>
        <Typography variant="h4">Countries</Typography>
        {content}
      </Paper>
      <PopupMessage
        isOpen={Boolean(errorMessage)}
        onClose={() => setErrorMessage('')}
        message={errorMessage}
        mode='error'
      />
    </>
  );
};

export default CountriesPage;