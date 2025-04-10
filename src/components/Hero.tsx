import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import ScrollIndicator from '@storykit/react/ScrollIndicator';

export default function Hero() {
  return (
    <Grid
      container
      // Full height except for the header and footer
      minHeight="calc(100vh - var(--header-height) - var(--footer-height))"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pb={3}
      sx={{
        backgroundImage: `url('images/hero-background.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      aria-label="Hero component">
      <Container
        sx={{
          maxWidth: {
            md: 900,
            sm: 600,
          },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'primary.contrastText',
          margin: 'auto 0',
        }}>
        <Typography variant="h1">StoryKit</Typography>
        <Typography variant="subtitle1">
          StoryKit is a collection of pre-built, customizable web components that serve as building
          blocks for creating interactive web apps and sharing data stories.
        </Typography>
      </Container>
      <ScrollIndicator height="120px" width="30px" color="#fff" />
    </Grid>
  );
}
