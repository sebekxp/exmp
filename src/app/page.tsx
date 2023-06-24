import AssetLoader from './game/AssetLoader';
import Game from './game/Game';
import Grid from './game/Grid';``
import Hero from './game/Hero';
import { HEIGHT, WIDTH } from './game/constans';

export default function Home() {
  return (
    <main>
      <Game>
        <Grid width={WIDTH} height={HEIGHT}>
          <AssetLoader>
            <Hero />
          </AssetLoader>
        </Grid>
      </Game>
    </main>
  );
}
