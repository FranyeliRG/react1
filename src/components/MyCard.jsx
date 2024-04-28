import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard=({image,name,description,bgColor,raza})=>{
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tags bgColor={bgColor} raza={raza}/>
        </Card.Body>
    </Card>
  );
}

export default MyCard;