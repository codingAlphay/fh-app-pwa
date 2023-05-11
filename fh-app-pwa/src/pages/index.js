import Head from 'next/head';
// Components
import Calendar from './components/schedule/Calendar';
import Header from './components/layout/Header';


export default function Home() {
  return (
    <>
      <Head>
        <title>FH App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header headline={"LBL_INFOSCREEN"} subheadline={"WEB.vzB.21"}/>
      <div className='mx-4'>
        <Calendar />
      </div>
    </>
  )
}
