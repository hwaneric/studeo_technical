import Head from 'next/head'
import Card from '../components/card.js'
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Error from 'next/error';

export default function Home( { errorCode, data }) {
  // Handle errors in API call
  if (errorCode) {
    return <Error statusCode={errorCode} />
  } 

  const [visible, setVisible] = useState(5);
  const [cards, setCards] = useState(data.slice(0, visible));

  useEffect(() => {
      setCards(data.slice(0, visible));
    }, [visible]);

  return (
    <>
      <Head>
        <title>Studeo Technical Project</title>
        <meta name="description" content="Displays grid of cards called from test API with option to load more cards" />
      </Head>
      <main>
        <Grid container spacing={2}>
          {
            cards.map((card) => (
              <Grid key={card.id} item xs={6} md={3}>
                <Card title={card.title} desc={card.description} image={card.url} />     
              </Grid>
          ))}
        </Grid>  
        <div className="show-more">
          <Button 
            size="medium" 
            variant="contained" 
            onClick={() => setVisible(visible + 5)} 
          > 
            Show More
          </Button>
        </div>
      </main>
    </>
  ) 
}

export async function getServerSideProps() {
  let response;
  let data;
  try {
    response = await fetch('https://api.slingacademy.com/v1/sample-data/photos?limit=50');
    data = await response.json();
  } catch {
    console.log("There was a problem in the API call.")
  }

  if (response?.ok) {
    return {
      props: { 
        data: data.photos,
        errorCode: false
      }
    }
  } else if (response === undefined){
    return {
      props: {
        data: [],
        errorCode: 502
      }
    }
  } else {
    return { 
      props: {
        data: [], 
        errorCode: data.statusCode
      }
    }
  }
}
