/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import albumPools from "./assets/AlbumPools";
import apiInfo from "./assets/ApiInfo";

const App = () => {
  const startingAlbumReference = albumPools[0][0][1];

  const [startingAlbum, setStartingAlbum] = React.useState();

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`${startingAlbumReference.url}`);
      const post = await response.json();
      setStartingAlbum(post);
      setLoaded(true);
      console.log(startingAlbum);
    };

    fetchPost();
  }, []);

  if (loaded) {
    return (
      <>
        <InfoTab />
        <GameTab
          title={startingAlbum.title}
          cover={startingAlbumReference.albumCover}
          albumArtist={startingAlbum.artists[0].name}
        />
      </>
    );
  } else {
    return <h1>loading</h1>;
  }
};

const InfoTab = () => {};

const GameTab = ({ title, cover, albumArtist }) => {
  return (
    <>
      <GameCard
        cardTitle={title}
        cardCover={cover}
        cardAlbumArtist={albumArtist}
      />
      <GameSearch />
      <PreviousConnections />
    </>
  );
};

const GameCard = ({ cardTitle, cardCover, cardAlbumArtist }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Img variant="top" src={cardCover} />
          <Card.Text>By: {cardAlbumArtist}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Streak</ListGroup.Item>
          <ListGroup.Item>Strikes</ListGroup.Item>
          <ListGroup.Item>Last Connection</ListGroup.Item>
          <ListGroup.Item>Timer</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

const GameSearch = () => {
  return (
    <>
      <h4>Search For an Album</h4>
      <div>
        <input type="text" id="search-input-artist" placeholder="Artist" />
        <input type="text" id="search-input-album" placeholder="Album" />
        <button>
          <img src="" alt="a magnifying glass" id="search-image" />
        </button>
      </div>
      <div>
        <ul></ul>
      </div>
    </>
  );
};

const PreviousConnections = () => {};

export default App;
