import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Form, FormLabel, FormControl, Button} from "react-bootstrap"
import Axios from "axios";

export default function Response () {
    const [txnId, setTxnId] = useState("");
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("");

    useEffect(()=> {
        Axios.get("http://localhost:3000/getResponse").then(res=> {
            setTxnId(res.txnId);
            setAmount(res.amount);
            setStatus(res.status);
        })
    })

    return (
        <Container>
            <Row>
                <Col>TxnId</Col>
                <Col>{txnId}</Col>
            </Row>
            <Row>
                <Col>amount</Col>
                <Col>{amount}</Col>
            </Row>
            <Row>
                <Col>status</Col>
                <Col>{status}</Col>
            </Row>
        </Container>
    )
}