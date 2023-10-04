import { Col, Form, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'

interface Iprops {
  setSearchType: any
  searchType: any
}

export default function HeaderPokedex(props: Iprops) {
  return (
    <Form>

      <Row>
        <Col xs='4'>
          <Form.Select aria-label="Default select example" onChange={e => props.setSearchType(e.target.value)}>
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

      </Row>

    </Form>
  )
}
