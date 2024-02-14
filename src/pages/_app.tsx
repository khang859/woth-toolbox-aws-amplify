import { Authenticator, Button } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { StrictMode } from 'react';
import awsExports from 'aws-exports.js';
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
  useTutorialManager,
} from 'hooks';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/global.css';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

const App = (props: AppProps) => {
  // Retrieve map type switching context and the currently active map type
  const mapTypeManager = useHuntingMapTypeManager();
  const { mapType } = mapTypeManager;

  // Retrieve application settings and tutorial managers
  const animalManager = useAnimalMarkerManager(mapType);
  const customManager = useCustomMarkerManager(mapType);
  const settingsManager = useSettingsManager();
  const tutorialManager = useTutorialManager();

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
        <Authenticator>
          {user => (
            <HuntingMapTypeProvider value={mapTypeManager}>
              <AnimalMarkerProvider value={animalManager}>
                <CustomMarkerProvider value={customManager}>
                  <SettingsProvider value={settingsManager}>
                    <TutorialProvider value={tutorialManager}>
                      <Notifications />
                      <Authenticator.Provider>
                        <Toolbox {...props} />
                      </Authenticator.Provider>
                    </TutorialProvider>
                  </SettingsProvider>
                </CustomMarkerProvider>
              </AnimalMarkerProvider>
            </HuntingMapTypeProvider>
          )}
        </Authenticator>
      </StrictMode>
    </>
  );
};

export default App;
