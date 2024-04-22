import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <InfoTab />
      <GameTab />
    </>
  );
};

const InfoTab = () => {};

const GameTab = () => {
  return (
    <>
      <GameCard />
      <GameSearch />
      <PreviousConnections />
    </>
  );
};

const GameCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Album Title</Card.Title>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Text>By: Album Artist</Card.Text>
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
