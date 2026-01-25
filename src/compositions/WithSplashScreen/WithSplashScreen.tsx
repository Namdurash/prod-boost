import { useInitialize } from './hooks/useInitialize/useInitialize';

export const WithSplashScreen = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isInitialized } = useInitialize();

  if (!isInitialized) {
    return null;
  }

  return <>{children}</>;
};
