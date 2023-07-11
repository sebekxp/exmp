import dynamic from 'next/dynamic';
import AssetLoader from './game/AssetLoader';
import GameProgress from './game/GameProgress';
import GameStartText from './game/GameStartText';
import Grid from './game/Grid';
import Hero from './game/Hero';
import MapExploredModal from './game/MapExploredModal';

const Game = dynamic(() => import('./game/Game'), { ssr: false });

export default function Home() {
  return (
    <main>
      <GameStartText />
      <Game>
        <Grid>
          <AssetLoader>
            <Hero />
            <GameProgress />
          </AssetLoader>
        </Grid>
      </Game>
      <MapExploredModal />
    </main>
  );
}
