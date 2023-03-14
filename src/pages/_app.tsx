import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { StrictMode, useEffect } from 'react';
import { App as Toolbox } from 'components/App';
import { Notifications } from 'components/Notifications';
import {
  AnimalMarkerProvider,
  CustomMarkerProvider,
  HuntingMapTypeProvider,
  SettingsProvider,
  TutorialProvider,
} from 'contexts';
import {
  useAnimalMarkerManager,
  useCustomMarkerManager,
  useHuntingMapTypeManager,
  useSettingsManager,
  useStorage,
  useTutorialManager,
} from 'hooks';
import { hasLegacyMarkerStorageKeys } from 'lib/storage';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/global.css';

const App = (props: AppProps) => {
  // Retrieve map type switching context and the currently active map type
  const mapTypeManager = useHuntingMapTypeManager();
  const { mapType } = mapTypeManager;

  // Retrieve application settings and tutorial managers
  const animalManager = useAnimalMarkerManager(mapType);
  const customManager = useCustomMarkerManager(mapType);
  const settingsManager = useSettingsManager();
  const tutorialManager = useTutorialManager();

  // Retrieve application router and storage manager
  const router = useRouter();
  const storage = useStorage();

  // Redirect users to the migration page if they still have any legacy markers
  // left in their local storage
  useEffect(() => {
    if (!storage) {
      return;
    }

    const path = '/news/migration';
    if (router.pathname !== path && hasLegacyMarkerStorageKeys(storage)) {
      // noinspection JSIgnoredPromiseFromCall
      router.push(path);
    }
  }, [router, storage]);

  return (
    <>
      <StrictMode>
        <Head>
          <title>Way Of The Hunter Toolbox</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no, shrink-to-fit=no"
          />
        </Head>

        <HuntingMapTypeProvider value={mapTypeManager}>
          <AnimalMarkerProvider value={animalManager}>
            <CustomMarkerProvider value={customManager}>
              <SettingsProvider value={settingsManager}>
                <TutorialProvider value={tutorialManager}>
                  <Notifications />
                  <Toolbox {...props} />
                </TutorialProvider>
              </SettingsProvider>
            </CustomMarkerProvider>
          </AnimalMarkerProvider>
        </HuntingMapTypeProvider>
      </StrictMode>
    </>
  );
};

export default App;
