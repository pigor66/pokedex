import { Button, Col, Modal, ProgressBar, Row, Spinner } from "react-bootstrap";


interface IProps {
  handleClose: any
  show: boolean
  data: any
  index: number
}

export default function ModalDetails({ handleClose, data, show, index }: IProps) {


  if (data) {
    return (
      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
        size="lg"
      >
        <Modal.Header closeButton className={`bg-dark text-white py-4 px-5 `}>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className={`bg-dark text-white py-4 px-5`} >
          <Row style={{ width: '100%' }}>
            <Col xs={12} className=" d-flex justify-content-center">
              <div style={{ display: 'flex', justifyContent: 'center', height: '18rem', width: '18rem' }} className={`shadow-${data?.types[0].type?.name}-modal rounded-circle d-flex align-items-center flex-direction-column`}>
                <Row>
                  <Col xs={12} >
                    <h1 className="text-center text-dark fw-bold" >  {data.forms[0].name}</h1>
                  </Col>
                  <Col xs={12} className="d-flex justify-content-center" >
                    <img src={`/pokemons/poke_${index + 1}.gif`} style={{ marginBottom: '-5rem' }} />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} className=" d-flex justify-content-center mt-4">
              <div style={{ marginBottom: '2rem' }} className="d-flex align-items-center">
                <h3 className="me-2">  types:</h3>
                {data.types.map((type: any) => {
                  return (
                    <div key={type.slot} className={`shadow-${type?.type?.name}-modal px-4 text-center rounded-pill mx-1 pb-1`}>
                      {type.type.name}
                    </div>
                  )
                })}
              </div>
            </Col>
            <Col xs={12} >
              <h3 className="text-center">Status:</h3>
              <div key={index} className="my-2 ">
                <div className="ms-1 text-start"> height:</div>
                <ProgressBar max={100}
                  variant={'success'}
                  now={data.height} label={`${data.height}`} style={{ width: '100%', height: '1.5rem', backgroundColor: '#4f4f4f' }} />
              </div>
              {data.stats.map((status: any, index: number) => {
                return (
                  <div key={index} className="my-2 ">
                    <div className="ms-1 text-start"> {status.stat.name}:</div>
                    <ProgressBar max={200}
                      variant={status.stat.name === 'hp' ? 'success'
                        : status.stat.name === 'attack' || status.stat.name === 'special-attack' ? 'danger'
                          : status.stat.name === 'speed' ? 'warning'
                            : 'primary'}
                      now={status.base_stat} label={`${status.base_stat}`} style={{ width: '100%', height: '1.5rem', backgroundColor: '#4f4f4f' }} />
                  </div>
                )
              })}
            </Col>



          </Row>
        </Modal.Body >


      </Modal >

    )
  } else {
    return (
      <div className='loading' style={{
        backgroundColor: '#000000',
        height: ' 100vh',
        width: ' 100vw',
        display: ' flex',
        alignItems: ' center',
        justifyContent: ' center',
      }}
      >
        <Row>
          <Col xs='12' className='text-center'>
            <h2 className='text-danger'> Loading...</h2>
            <Spinner animation="border" variant="danger" />
          </Col>
        </Row>


      </div >
    )
  }
}
