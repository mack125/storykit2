import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  const toolbarStyle = { minHeight: 'var(--navbar-height)' };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 'calc(var(--has-classification-banner) * var(--classification-height))',
        }}>
        <Toolbar style={toolbarStyle}>
          <Box
            component="img"
            src="images/booz-allen-stacked-white.png"
            alt="Booz Allen logo"
            width={64}
            height={64}
          />

          <Typography
            variant="h6"
            component="div"
            flexGrow={1}
            mb={0}
            borderLeft="2px solid currentColor"
            pl="10px">
            StoryKit
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Empty toolbar creates space for the rest of the page contents */}
      <Toolbar style={toolbarStyle} />
    </>
  );
}
