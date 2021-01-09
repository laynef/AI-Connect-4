import "../styles/globals.css";


interface ApplicationProps {
  Component: React.FC<any>;
  pageProps: any;
}

function MyApp({ Component, pageProps }: ApplicationProps): React.ReactNode {
  return <Component {...pageProps} />;
}

export default MyApp
