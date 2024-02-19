import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import CountryDetail from '../components/CountryDetail';
import PopupMessage from '../components/PopupMessage';

import { getCountry } from '../api';

const CountryDetailPage = () => {
  const { countryName = '' } = useParams();
  const [errorMessage, setErrorMessage] = useState('');

  const { data: countryDetail, isLoading, isFetching } = useQuery(
    'countryDetail',
    () => getCountry(countryName),
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
  } else if (!countryDetail) {
    content = (
      <Box sx={{ display: 'flex' }}>
        <Typography variant="h6" gutterBottom>
          No detail information about {countryName} country
        </Typography>
      </Box>
    );
  } else {
    content = (<CountryDetail countryDetail={countryDetail} />);
  }

  return (
    <>
      {content}
      <PopupMessage
        isOpen={Boolean(errorMessage)}
        onClose={() => setErrorMessage('')}
        message={errorMessage}
        mode='error'
      />
    </>
  );
};

export default CountryDetailPage;