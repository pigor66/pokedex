import { Col, Form, Row, } from 'react-bootstrap'
import { useEffect, useState } from 'react'

interface Iprops {
  searchType: string
  setSearchType: (pokemonType: string) => void
  setDataNameFiltred: (pokemonName: string) => void
}

export default function HeaderPokedex({ setSearchType, searchType, setDataNameFiltred }: Iprops) {
  return (
    <Form>

      <Row>
        <Col xs='4'>
          <Form.Label className="text-light">Filtro por elemento:</Form.Label>

          <Form.Select aria-label="Default select example" onChange={e => setSearchType(e.target.value)}>
            <option value="all">Todos</option>
            <option value="electric">Electric</option>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="grass">Grass</option>
            <option value="water">Water</option>
            <option value="ice">Ice</option>
            <option value="flying">Flying</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="psychic">Psychic</option>
            <option value="ground">Ground</option>
            <option value="bug">Bug</option>
            <option value="dragon">Dragon</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="dark">Dark</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
          </Form.Select>
        </Col>
        <Col xs='4'>

          <Form.Group className="text-light" >
            <Form.Label>Filtro por nome:</Form.Label>
            <Form.Control type="text" placeholder="bulbasaur" onChange={(e) => setDataNameFiltred(e.target.value)} />
          </Form.Group>

        </Col>

      </Row>

    </Form >
  )
}
