import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';

import { formatCurrencies, formatLanguages, formatCapital } from '../../utils';
import { type Country } from '../../types';

const ROW_LIMIT = 10;

interface CountriesListProps {
  countriesList: Country[];
}

const CountriesList = ({ countriesList }: CountriesListProps) => {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);

  const countriesPerPage = useMemo((): Country[] => {
    if (!countriesList || !countriesList.length) {
      return [];

    }
    return [...countriesList.slice(pageNumber*ROW_LIMIT, pageNumber*ROW_LIMIT + ROW_LIMIT)];
  }, [pageNumber, countriesList]);


  return (
    <>
      <TableContainer component={Paper} sx={{ marginY: '20px' }}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Capital</TableCell>
              <TableCell align="right">Currency</TableCell>
              <TableCell align="right">Language</TableCell>
              <TableCell align="right">Region</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countriesPerPage.map(({ name, currencies, capital, region, languages }: Country) => {
              return (
                <TableRow
                  key={name.common}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() => {
                      navigate(name.common);
                    }}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'lightgrey'
                      }
                    }}
                  >
                    <Typography variant="button" display="block" gutterBottom>
                      {name.common}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">{formatCapital(capital)}</TableCell>
                  <TableCell align="right">{formatCurrencies(currencies)}</TableCell>
                  <TableCell align="right">{formatLanguages(languages)}</TableCell>
                  <TableCell align="right">{region}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[ROW_LIMIT]}
        component="div"
        count={countriesList.length}
        rowsPerPage={ROW_LIMIT}
        page={pageNumber}
        onPageChange={(event, page) => setPageNumber(page)}
      />
    </>
  );
};

export default CountriesList;