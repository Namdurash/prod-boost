import { useInitialize } from './hooks/useInitialize/useInitialize';

export const WithSplashScreen = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useInitialize();

  return <>{children}</>;
};
