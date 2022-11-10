import { Html, Head, Main, NextScript } from 'next/document'
import MegaFIScripts from '../components/scripts'

export default function Document() {
  return (
    <Html>
      <Head>        
        <link rel="icon" type="image/png" href="assets/images/logo.jpeg" sizes="16x16" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <script async src="https://kit.fontawesome.com/33e4fabe1b.js" crossOrigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <MegaFIScripts />
        <NextScript />
      </body>
    </Html>
  )
}