import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import LottieAnimation, { LottieAnimationRef } from '@storykit/react/LottieAnimation';
import Scroller, { ScrollerCard, ScrollerOverlay } from '@storykit/react/Scroller';
import { useRef } from 'react';

import './App.css';
import Hero from './components/Hero.tsx';

// prettier-ignore
const sampleAnimation = {"nm":"Frame 1","v":"5.9.6","fr":60,"ip":0,"op":60,"w":300,"h":300,"ddd":0,"markers":[],"assets":[{"nm":"[FRAME CLIPS CONTENT] Frame 1 - Null / Ellipse 3 - Null / Ellipse 3 / Ellipse 2 - Null / Ellipse 2 / Ellipse 1 - Null / Ellipse 1 / Frame 1","fr":60,"id":"lg2kc4kus3dzi8lgqql","layers":[{"ty":3,"ddd":0,"ind":14648,"hd":false,"nm":"Frame 1 - Null","ks":{"a":{"a":0,"k":[0,0]},"o":{"a":0,"k":100},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}},"st":0,"ip":0,"op":60,"bm":0,"sr":1},{"ty":3,"ddd":0,"ind":3186,"hd":false,"nm":"Ellipse 3 - Null","parent":14648,"ks":{"a":{"a":0,"k":[0,0]},"o":{"a":0,"k":100},"p":{"a":1,"k":[{"t":0,"s":[222,125],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]},"ti":[0,0],"to":[0,0]},{"t":60,"s":[34,125]}]},"r":{"a":0,"k":0},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}},"st":0,"ip":0,"op":60,"bm":0,"sr":1},{"ty":4,"ddd":0,"ind":29228,"hd":false,"nm":"Ellipse 3","parent":3186,"ks":{"a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"st":0,"ip":0,"op":60,"bm":0,"sr":1,"shapes":[{"ty":"gr","nm":"Group","hd":false,"np":3,"it":[{"ty":"sh","nm":"Path","hd":false,"ks":{"a":0,"k":{"c":true,"v":[[50,25],[48.7775,32.725],[45.225,39.695],[39.695,45.225],[32.725,48.7775],[25,50],[17.275,48.7775],[10.305,45.225],[4.775,39.695],[1.2225,32.725],[0,25],[1.2225,17.275],[4.775,10.305],[10.305,4.775],[17.275,1.2225],[25,0],[32.725,1.2225],[39.695,4.775],[45.225,10.305],[48.7775,17.275],[50,25],[50,25]],"i":[[0,0],[0.81,-2.495],[1.5425,-2.1225],[2.1225,-1.5425],[2.495,-0.81],[2.6225,0],[2.495,0.81],[2.1225,1.5425],[1.5425,2.1225],[0.81,2.495],[0,2.6225],[-0.81,2.495],[-1.5425,2.1225],[-2.1225,1.5425],[-2.495,0.81],[-2.6225,0],[-2.495,-0.81],[-2.1225,-1.5425],[-1.5425,-2.1225],[-0.81,-2.495],[0,-2.6225],[0,0]],"o":[[0,2.6224999999999987],[-0.8100000000000023,2.4949999999999974],[-1.5424999999999969,2.1225000000000023],[-2.1225000000000023,1.5424999999999969],[-2.495000000000001,0.8100000000000023],[-2.6224999999999987,0],[-2.495000000000001,-0.8100000000000023],[-2.1225000000000005,-1.5424999999999969],[-1.5425,-2.1225000000000023],[-0.81,-2.495000000000001],[0,-2.6224999999999987],[0.8099999999999998,-2.495000000000001],[1.5425000000000004,-2.1225000000000005],[2.1225000000000005,-1.5425],[2.495000000000001,-0.81],[2.6224999999999987,0],[2.4949999999999974,0.8099999999999998],[2.1225000000000023,1.5425000000000004],[1.5424999999999969,2.1225000000000005],[0.8100000000000023,2.495000000000001],[0,0],[0,0]]}}},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[0,0.6470588235294118,0.7098039215686275,1]},"nm":"Fill","hd":false,"r":1},{"ty":"tr","a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ef":[]},{"ty":3,"ddd":0,"ind":97700,"hd":false,"nm":"Ellipse 2 - Null","parent":14648,"ks":{"a":{"a":0,"k":[0,0]},"o":{"a":0,"k":100},"p":{"a":1,"k":[{"t":0,"s":[128,125],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]},"ti":[0,0],"to":[0,0]},{"t":30,"s":[128,60],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]},"ti":[0,0],"to":[0,0]},{"t":60.6,"s":[128,125]}]},"r":{"a":0,"k":0},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}},"st":0,"ip":0,"op":60,"bm":0,"sr":1},{"ty":4,"ddd":0,"ind":17770,"hd":false,"nm":"Ellipse 2","parent":97700,"ks":{"a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"st":0,"ip":0,"op":60,"bm":0,"sr":1,"shapes":[{"ty":"gr","nm":"Group","hd":false,"np":3,"it":[{"ty":"sh","nm":"Path","hd":false,"ks":{"a":0,"k":{"c":true,"v":[[50,25],[48.7775,32.725],[45.225,39.695],[39.695,45.225],[32.725,48.7775],[25,50],[17.275,48.7775],[10.305,45.225],[4.775,39.695],[1.2225,32.725],[0,25],[1.2225,17.275],[4.775,10.305],[10.305,4.775],[17.275,1.2225],[25,0],[32.725,1.2225],[39.695,4.775],[45.225,10.305],[48.7775,17.275],[50,25],[50,25]],"i":[[0,0],[0.81,-2.495],[1.5425,-2.1225],[2.1225,-1.5425],[2.495,-0.81],[2.6225,0],[2.495,0.81],[2.1225,1.5425],[1.5425,2.1225],[0.81,2.495],[0,2.6225],[-0.81,2.495],[-1.5425,2.1225],[-2.1225,1.5425],[-2.495,0.81],[-2.6225,0],[-2.495,-0.81],[-2.1225,-1.5425],[-1.5425,-2.1225],[-0.81,-2.495],[0,-2.6225],[0,0]],"o":[[0,2.6224999999999987],[-0.8100000000000023,2.4949999999999974],[-1.5424999999999969,2.1225000000000023],[-2.1225000000000023,1.5424999999999969],[-2.495000000000001,0.8100000000000023],[-2.6224999999999987,0],[-2.495000000000001,-0.8100000000000023],[-2.1225000000000005,-1.5424999999999969],[-1.5425,-2.1225000000000023],[-0.81,-2.495000000000001],[0,-2.6224999999999987],[0.8099999999999998,-2.495000000000001],[1.5425000000000004,-2.1225000000000005],[2.1225000000000005,-1.5425],[2.495000000000001,-0.81],[2.6224999999999987,0],[2.4949999999999974,0.8099999999999998],[2.1225000000000023,1.5425000000000004],[1.5424999999999969,2.1225000000000005],[0.8100000000000023,2.495000000000001],[0,0],[0,0]]}}},{"ty":"fl","o":{"a":1,"k":[{"t":0,"s":[100],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":30,"s":[100],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":60,"s":[100]}]},"c":{"a":1,"k":[{"t":0,"s":[0,0.6470588235294118,0.7098039215686275,1],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":30,"s":[0.8666666666666667,0.9803921568627451,0.2235294117647059,1],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]}},{"t":60,"s":[0,0.6470588235294118,0.7098039215686275,1]}]},"nm":"Fill","hd":false,"r":1},{"ty":"tr","a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ef":[]},{"ty":3,"ddd":0,"ind":10015,"hd":false,"nm":"Ellipse 1 - Null","parent":14648,"ks":{"a":{"a":0,"k":[0,0]},"o":{"a":0,"k":100},"p":{"a":1,"k":[{"t":0,"s":[34,125],"o":{"x":[0.5],"y":[0.35]},"i":{"x":[0.15],"y":[1]},"ti":[0,0],"to":[0,0]},{"t":60,"s":[222,125]}]},"r":{"a":0,"k":0},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}},"st":0,"ip":0,"op":60,"bm":0,"sr":1},{"ty":4,"ddd":0,"ind":1271,"hd":false,"nm":"Ellipse 1","parent":10015,"ks":{"a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"st":0,"ip":0,"op":60,"bm":0,"sr":1,"shapes":[{"ty":"gr","nm":"Group","hd":false,"np":3,"it":[{"ty":"sh","nm":"Path","hd":false,"ks":{"a":0,"k":{"c":true,"v":[[50,25],[48.7775,32.725],[45.225,39.695],[39.695,45.225],[32.725,48.7775],[25,50],[17.275,48.7775],[10.305,45.225],[4.775,39.695],[1.2225,32.725],[0,25],[1.2225,17.275],[4.775,10.305],[10.305,4.775],[17.275,1.2225],[25,0],[32.725,1.2225],[39.695,4.775],[45.225,10.305],[48.7775,17.275],[50,25],[50,25]],"i":[[0,0],[0.81,-2.495],[1.5425,-2.1225],[2.1225,-1.5425],[2.495,-0.81],[2.6225,0],[2.495,0.81],[2.1225,1.5425],[1.5425,2.1225],[0.81,2.495],[0,2.6225],[-0.81,2.495],[-1.5425,2.1225],[-2.1225,1.5425],[-2.495,0.81],[-2.6225,0],[-2.495,-0.81],[-2.1225,-1.5425],[-1.5425,-2.1225],[-0.81,-2.495],[0,-2.6225],[0,0]],"o":[[0,2.6224999999999987],[-0.8100000000000023,2.4949999999999974],[-1.5424999999999969,2.1225000000000023],[-2.1225000000000023,1.5424999999999969],[-2.495000000000001,0.8100000000000023],[-2.6224999999999987,0],[-2.495000000000001,-0.8100000000000023],[-2.1225000000000005,-1.5424999999999969],[-1.5425,-2.1225000000000023],[-0.81,-2.495000000000001],[0,-2.6224999999999987],[0.8099999999999998,-2.495000000000001],[1.5425000000000004,-2.1225000000000005],[2.1225000000000005,-1.5425],[2.495000000000001,-0.81],[2.6224999999999987,0],[2.4949999999999974,0.8099999999999998],[2.1225000000000023,1.5425000000000004],[1.5424999999999969,2.1225000000000005],[0.8100000000000023,2.495000000000001],[0,0],[0,0]]}}},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[0,0.6470588235294118,0.7098039215686275,1]},"nm":"Fill","hd":false,"r":1},{"ty":"tr","a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ef":[]},{"ty":4,"ddd":0,"ind":12,"hd":false,"nm":"Frame 1","parent":14648,"ks":{"a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"st":0,"ip":0,"op":60,"bm":0,"sr":1,"shapes":[{"ty":"gr","nm":"Group","hd":false,"np":3,"it":[{"ty":"sh","nm":"Path","hd":false,"ks":{"a":0,"k":{"c":true,"v":[[0,300],[0,0],[300,0],[300,300],[0,300]],"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]]}}},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[1,1,1,1]},"nm":"Fill","hd":false,"r":1},{"ty":"tr","a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ef":[]}]}],"layers":[{"ty":3,"ddd":0,"ind":14648,"hd":false,"nm":"Frame 1 - Null","ks":{"a":{"a":0,"k":[0,0]},"o":{"a":0,"k":100},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0}},"st":0,"ip":0,"op":60,"bm":0,"sr":1},{"ddd":0,"ty":0,"nm":"Frame 1","refId":"lg2kc4kus3dzi8lgqql","sr":1,"ks":{"a":{"a":0,"k":[0,0]},"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"r":{"a":0,"k":0},"o":{"a":0,"k":100}},"ao":0,"w":300,"h":300,"ip":0,"op":60,"st":0,"hd":false}],"meta":{"a":"","d":"","tc":"","g":"Aninix"}};

function App() {
  const lottieRef = useRef<LottieAnimationRef>(null);

  return (
    <>
      <Hero />
      <Container maxWidth="md" sx={{ my: 6 }}>
        <Typography variant="h2">This Is The First Title</Typography>
        <Typography variant="h4">This is the first section with the first subtitle</Typography>
        <Typography variant="h5">This is the second subtitle</Typography>
        <Typography variant="h6">This is the third subtitle</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet nibh
          scelerisque turpis finibus maximus. Etiam suscipit ornare libero, eu pulvinar nibh ornare
          ut. Nulla facilisi. Nunc commodo fringilla hendrerit. Duis mauris eros, egestas a blandit
          ac, tincidunt non sapien. In ut orci quam. Ut sed ultrices magna. Sed magna mauris, ornare
          vestibulum nunc quis, consectetur maximus augue. Aliquam sollicitudin, erat et pulvinar
          fermentum, lectus justo iaculis tortor, sit amet hendrerit elit lectus eu ante. Aenean
          eget ex vulputate, tincidunt arcu non, efficitur metus. Suspendisse nec nibh augue. Proin
          quam ligula, varius ac enim eget, rutrum bibendum justo. Cras eget scelerisque enim. Donec
          rhoncus orci leo, in tempor erat pulvinar et. In eu finibus elit. Fusce feugiat magna eget
          massa feugiat, eu rutrum sem venenatis.
        </Typography>
        <Typography variant="body1">
          Morbi ut scelerisque ex. Sed non sapien dolor. In fermentum elit ut augue pulvinar, et
          lacinia tellus pellentesque. Morbi in purus mi. Praesent tincidunt orci massa, et pharetra
          odio vulputate in. Quisque efficitur, mi ullamcorper euismod elementum, risus nisi semper
          arcu, in pharetra quam justo et orci. Suspendisse eu elit in est euismod elementum ut et
          urna.
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ my: 6 }}>
        <Typography variant="h4">This is the second section with the first subtitle</Typography>
      </Container>

      <Scroller>
        <div data-name="blue-backdrop" style={{ background: 'lightBlue' }} />
        <div data-name="animation-backdrop">
          <LottieAnimation
            animationData={sampleAnimation}
            params={{ autoplay: true, loop: true }}
            ref={lottieRef}
          />
        </div>

        <ScrollerOverlay backdrop="blue-backdrop">
          <ScrollerCard>
            <CardContent>
              <Typography variant="body1" m={0}>
                Here is some text that will show up in a card
              </Typography>
            </CardContent>
          </ScrollerCard>
        </ScrollerOverlay>

        <ScrollerOverlay
          backdrop="animation-backdrop"
          onStepProgress={({ progress }) =>
            lottieRef.current?.scrub({ start: 0, end: 1, progress })
          }>
          <ScrollerCard>
            <CardContent sx={{ mb: 0 }}>
              <Typography variant="body1" m={0}>
                The backdrop will scrub through an animation on scroll
              </Typography>
            </CardContent>
          </ScrollerCard>
        </ScrollerOverlay>

        <ScrollerOverlay
          backdrop="animation-backdrop"
          onStepEnter={() => lottieRef.current?.play({ loop: true })}>
          <ScrollerCard>
            <CardContent>
              <Typography variant="body1" mb="0">
                The backdrop will play an animation on loop
              </Typography>
            </CardContent>
          </ScrollerCard>
        </ScrollerOverlay>

        <ScrollerOverlay
          backdrop="animation-backdrop"
          onStepEnter={() => lottieRef.current?.pause()}>
          <ScrollerCard>
            <CardContent>
              <Typography variant="body1" m={0}>
                The backdrop will pause an animation
              </Typography>
            </CardContent>
          </ScrollerCard>
        </ScrollerOverlay>
      </Scroller>

      <Container maxWidth="md">
        <Typography variant="h4">This is the third section with the first subtitle</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet nibh
          scelerisque turpis finibus maximus. Etiam suscipit ornare libero, eu pulvinar nibh ornare
          ut. Nulla facilisi. Nunc commodo fringilla hendrerit. Duis mauris eros, egestas a blandit
          ac, tincidunt non sapien. In ut orci quam. Ut sed ultrices magna. Sed magna mauris, ornare
          vestibulum nunc quis, consectetur maximus augue.
        </Typography>

        <Grid container spacing={2}>
          <Grid md={4}>
            <Card>
              <CardContent>
                <Typography variant="body2" gutterBottom>
                  CATEGORY
                </Typography>
                <Typography variant="h5">This is a card</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet nibh
                  scelerisque turpis finibus maximus. Etiam suscipit ornare libero, eu pulvinar nibh
                  ornare ut.
                </Typography>
                <Button variant="contained" color="secondary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid md={4}>
            <Card>
              <CardContent>
                <Typography variant="body2" gutterBottom>
                  CATEGORY
                </Typography>
                <Typography variant="h5">This is a card</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet nibh
                  scelerisque turpis finibus maximus. Etiam suscipit ornare libero, eu pulvinar nibh
                  ornare ut.
                </Typography>
                <Button variant="contained" color="secondary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid md={4}>
            <Card>
              <CardContent>
                <Typography variant="body2" gutterBottom>
                  CATEGORY
                </Typography>
                <Typography variant="h5">This is a card</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet nibh
                  scelerisque turpis finibus maximus. Etiam suscipit ornare libero, eu pulvinar nibh
                  ornare ut.
                </Typography>
                <Button variant="contained" color="secondary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box
        component="img"
        src="images/map-data-points.jpeg"
        alt="Map with data points"
        my={6}
        width="100%"
      />

      <Container maxWidth="md" sx={{ my: 6 }}>
        <Typography variant="h2">This Is The Second Title</Typography>
        <Box component="img" src="images/topography.png" alt="Topographic Map" width="100%" />
        <Typography variant="caption">
          This is the image caption. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas sit amet nibh scelerisque turpis finibus maximus. Etiam suscipit ornare libero,
          eu pulvinar nibh ornare ut.
        </Typography>
      </Container>

      <Box bgcolor="primary.main" p={6}>
        <Container maxWidth="md">
          <Typography variant="h6" color="primary.contrastText">
            About Us
          </Typography>
          <Typography variant="body2" color="primary.contrastText">
            StoryKit is developed and maintained by the DSMS Interactives Team, a sub-team of the
            BAH Aerospace Data Science & Modeling Solutions (DSMS) Team.
            <br />
            <br />
            For more information, reach out to{' '}
            <a href="mailto:storykit@bah.com" style={{ color: '#fff' }}>
              StoryKit@bah.com
            </a>
            .
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default App;
