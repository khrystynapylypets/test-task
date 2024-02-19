import { Link as RouterLink } from 'react-router-dom';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

import { type CountryDetail as CountryDetailType } from '../../types';
import { formatCapital, formatCurrencies, formatLanguages } from '../../utils';

type CountryDetailProps = {
  countryDetail: CountryDetailType;
};

const CountryDetail = ({ countryDetail }: CountryDetailProps) => {
  return (
    <Paper elevation={0} sx={{ maxWidth: 450, margin: '20px auto' }}>
      <Paper elevation={0} sx={{ display: 'flex', justifyContent: 'end', padding: '20px 0' }}>
        <RouterLink
          to='/'
          style={{
            color: '#1976d2',
            fontFamily: 'Roboto',
          }}
        >
          Go back
        </RouterLink>
      </Paper>
      <Card sx={{ padding: '20px', backgroundColor: 'aliceblue' }}>
        <CardMedia
          sx={{ height: 200 }}
          image={countryDetail.flags.png}
          title={countryDetail.flags.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {countryDetail.name.official}
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Capital" secondary={formatCapital(countryDetail.capital)} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Currency"
                secondary={formatCurrencies(countryDetail.currencies)}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Language"
                secondary={formatLanguages(countryDetail.languages)}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Region" secondary={countryDetail.region} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Capital" secondary={formatCapital(countryDetail.capital)} />
            </ListItem>
          </List>
        </CardContent>
        <CardActions>
          <Link
            href={countryDetail.maps.googleMaps}
            target="blank"
            variant="subtitle1"
          >
            Google Maps
          </Link>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default CountryDetail;