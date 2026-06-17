import { Typography, Button } from 'this.gui/atoms';
import { Hero, Stack } from 'this.gui/molecules';
import { useMeValue } from 'this.gui/react';

export default function Home() {
  const title = useMeValue<string>('apps.__APP_ID__.manifest.title') || '__APP_TITLE__';

  return (
    <Hero
      height="100vh"
      mode="left"
      padding={{ xs: 3, md: 8 }}
      contentMaxWidth={680}
    >
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h5">
          Powered by this.gui
        </Typography>
        <Button variant="contained" size="large">
          Get started
        </Button>
      </Stack>
    </Hero>
  );
}
