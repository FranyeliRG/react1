import Badge from 'react-bootstrap/Badge';

const Tags=({raza, bgColor})=>{
  return (
    <div>
        <Badge bg={bgColor}>{raza}</Badge>
    </div>
  );
}

export default Tags;