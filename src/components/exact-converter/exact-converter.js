import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function ExactConverter(params) {
  return (
    <>
      <h1>Conversión Exacta</h1>
      <Form className="m-3">
        <FormGroup className="my-3">
          <Label for="bolivar-value">Valor Actual VES<br/><span className="small-text">respecto al dolar estadounidense</span></Label>
          <Input type="number" name="number" id="bolivar-value" />
        </FormGroup>
        <FormGroup className="my-3">
          <Label for="cop-value">Dólares que se quieren convertir</Label>
          <Input type="number" name="number" id="cop-value" />
        </FormGroup>
        {/* <FormGroup className="my-3">
          <Label for="cop-value">Tasa de cambio(COP a VES)</Label>
          <Input type="number" name="number" id="cop-value" />
        </FormGroup> */}
        <FormGroup className="my-3">
          <Label for="result-in-cop">Total en COP</Label>
          <Input type="number" name="number" id="result-in-cop" disabled/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
    );
}

export default ExactConverter;