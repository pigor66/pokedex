import axios from 'axios'
import Image from 'react-bootstrap/Image';
import { Card, Col, Row, Spinner, } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { useState } from 'react';
import ModalDetails from './modalDetails';
interface IpokemonCard {
  name: string
  url: string
  index: number
}


export default function PokemonsCard(props: IpokemonCard) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, isLoading } = useQuery(['pokemon', props.url], () => {
    return axios.get(props.url)
      .then((response) => response.data)
  }, {
    enabled: !!props.url, // Habilita a consulta somente se props.url estiver definido
  });



  if (data) {
    return (
      <>
        <Card className={`text-light shadow-${data?.types[0].type?.name} `} onClick={handleShow}>
          <Card.Body className='d-flex justify-content-between align-items-center flex-column'>
            <Card.Subtitle className="mb-2 text-white"></Card.Subtitle>
            <Card.Title className='mt-5 name'>{props.name}</Card.Title>
            {
              data.forms ?
                <Image src={data?.sprites?.other?.['official-artwork']?.front_default} width={200} height={200} alt='pokemons image' />
                :
                <>
                  carregando
                </>
            }
          </Card.Body>

        </Card>
        <ModalDetails
          handleClose={handleClose}
          show={show}
          data={data}
          index={props.index}
        />
      </>
    )
  } else {
    <Row>
      <Col xs='12' className='text-center'>
        <h2 className='text-danger'> Loading...</h2>
        <Spinner animation="border" variant="danger" />
      </Col>
    </Row>
  }
}
