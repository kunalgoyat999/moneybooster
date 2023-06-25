import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Form, FormLabel, FormControl, Button} from "react-bootstrap"
import Axios from "axios";

export default function Payment () {
    const [baseUrl] = useState("https://secure.payu.in/_payment");
    const [title] = useState("Payment Page");
    const [key, setKey] = useState("0j7zny");
    const [salt, setSalt] = useState("0bEORCg1");
    const [txnId, setTxnId] = useState("txn"+ Math.round(Math.random(10000, 99999) * 100000));
    const [amount, setAmount] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [productInfo, setProductInfo] = useState("");
    const [surl] = useState("http://localhost:3000/response");
    const [furl] = useState("http://localhost:3000/response");
    const [serviceProvider] = useState("PayU");
    const [hash, setHash] = useState("")
    const [temp] = useState("tem")
    const calcHash = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "txnId"){
            setTxnId(value);
        }
        if(name === "amount"){
            setAmount(value);
        }
        if(name === "firstname"){
            setFirstName(value);
        }
        if(name === "email"){
            setEmail(value);
        }
        if(name === "phone"){
            setPhone(value);
        }
        if(name === "productinfo"){
            setProductInfo(value);
        }
    }

    useEffect(() => {
        Axios.post("http://localhost:3330/api/v1/userDetails/hash", {key, txnId, amount, productInfo, firstName, email, temp, phone, serviceProvider, salt}).then(res => {
            console.log("ress", res)
            setHash(res.data)

        });
    }, [key, txnId, amount, productInfo, firstName, email, salt])

    return (
        <Container>
            <Form action = {baseUrl} method= "Post">
                <Row>
                    <Col sm><h4>{title}</h4></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Form.Label>Key</Form.Label></Col>
                    <Col sm><Form.Control type="text" name="key" value={key} onChange={calcHash}></Form.Control></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Form.Label>Txn Id</Form.Label></Col>
                    <Col sm><Form.Control type="" name="txnid" value={txnId} onChange={calcHash}></Form.Control></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Form.Label>Amount</Form.Label></Col>
                    <Col sm><Form.Control type="text" name="amount" value={amount} onChange={calcHash}></Form.Control></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Form.Label>First Name</Form.Label></Col>
                    <Col sm><Form.Control type="text" name="firstname" value={firstName} onChange={calcHash}></Form.Control></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Form.Label>Email</Form.Label></Col>
                    <Col sm><Form.Control type="text" name="email" value={email} onChange={calcHash}></Form.Control></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Form.Label>Phone</Form.Label></Col>
                    <Col sm><Form.Control type="text" name="phone" value={phone} onChange={calcHash}></Form.Control></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Form.Label>Product Info</Form.Label></Col>
                    <Col sm><Form.Control type="text" name="productinfo" value={productInfo} onChange={calcHash}></Form.Control></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Form.Label>Surl</Form.Label></Col>
                    <Col sm><Form.Control type="text" name="surl" value={surl} ></Form.Control></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Form.Label>FURL</Form.Label></Col>
                    <Col sm><Form.Control type="text" name="furl" value={furl}></Form.Control></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Form.Label>Service Provider</Form.Label></Col>
                    <Col sm><Form.Control type="text" name="service_provider" value={serviceProvider} readOnly></Form.Control></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Form.Label>Hash</Form.Label></Col>
                    <Col sm><Form.Control type="text" name="hash" value={hash} readOnly></Form.Control></Col>
                </Row>
                <Row className='pt-sm-2'>
                    <Col sm><Button type="submit">Pay</Button></Col>
                    
                </Row>
            </Form>
        </Container>
    )
}
