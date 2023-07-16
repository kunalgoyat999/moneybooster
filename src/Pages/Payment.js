import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Form, FormLabel, FormControl, Button} from "react-bootstrap"
import Axios from "axios";
import uniqid from 'uniqid';

export default function Payment () {
    const [baseUrl] = useState("https://secure.payu.in/_payment");
    const [title] = useState("Payment Page");
    const [key, setKey] = useState("0j7zny");
    const [salt, setSalt] = useState("0bEORCg1");
    // const [txnid, setTxnId] = useState("txn"+ Math.round(Math.random(10000, 99999) * 100000));
    const [amount, setAmount] = useState('50');
    const [firstname, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [udf2, setPhone] = useState("");
    const [productinfo, setProductInfo] = useState("P01,P02");
    const [surl] = useState("http://localhost:3200/response.html");
    const [furl] = useState("http://localhost:3200/response.html");
    const [udf5] = useState("PayUBiz_NODE_JS_KIT");
    const [hash, setHash] = useState("")
    const [udf1] = useState("none")
    const [html, setHtml]    = useState("")

    let txnid = "ORD" + uniqid();

    const calcHash = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "amount"){
            setAmount(value);
        }
        if(name === "firstname"){
            setFirstName(value);
        }
        if(name === "email"){
            setEmail(value);
        }
        if(name === "udf2"){
            setPhone(value);
        }
        if(name === "productinfo"){
            setProductInfo(value);
        }
    }
    useEffect(() => {
        Axios.get("https://cashbooster.info/pay").then((response) => {
            // console.log(response.data);
            setHtml(response.data)
        })
    }, [])

    // useEffect(() => {
    //     Axios.post("http://localhost:3330/pay", {key, txnid, amount, productinfo, firstname, email, udf1, udf2, udf5, salt}
    //     // , {
    //     //     headers: {
    //     //       'Content-Type': 'application/json',
    //     //     }}
    //         ).then(res => {
    //         console.log("ress", res.data)
    //         setHash(res.data)
    //     });
    // }, [key, amount, productinfo, firstname, udf2, email, salt])

    return (
        <>
        <div dangerouslySetInnerHTML={{ __html: html }} />
       
        </>
        // <Container>
        //     <Form action = {baseUrl} method= "Post">
        //         <Row>
        //             <Col sm><h4>{title}</h4></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>Key</Form.Label></Col>
        //             <Col sm><Form.Control type="text" name="key" value={key} onChange={calcHash}></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>Txn Id</Form.Label></Col>
        //             <Col sm><Form.Control type="" name="txnid" value={txnid} onChange={calcHash}></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>Amount</Form.Label></Col>
        //             <Col sm><Form.Control type="text" name="amount" value={amount} onChange={calcHash}></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>First Name</Form.Label></Col>
        //             <Col sm><Form.Control type="text" name="firstname" value={firstname} onChange={calcHash}></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>Email</Form.Label></Col>
        //             <Col sm><Form.Control type="text" name="email" value={email} onChange={calcHash}></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>Phone</Form.Label></Col>
        //             <Col sm><Form.Control type="text" name="udf2" value={udf2} onChange={calcHash}></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>Product Info</Form.Label></Col>
        //             <Col sm><Form.Control type="text" name="productinfo" onChange={calcHash}></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>Surl</Form.Label></Col>
        //             <Col sm><Form.Control type="text" id="surl" name="surl" value={surl} ></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>FURL</Form.Label></Col>
        //             <Col sm><Form.Control type="text" id="furl" name="furl" value={furl}></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>Surl</Form.Label></Col>
        //             <Col sm><Form.Control type="text" id="curl" name="curl" value="http://localhost:3200/response.html" ></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>Service Provider</Form.Label></Col>
        //             <Col sm><Form.Control type="text" name="service_provider" value={udf5} readOnly></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Form.Label>Hash</Form.Label></Col>
        //             <Col sm><Form.Control type="text" name="hash" value={hash} ></Form.Control></Col>
        //         </Row>
        //         <Row className='pt-sm-2'>
        //             <Col sm><Button type="submit">Pay</Button></Col>
                    
        //         </Row>
        //     </Form>
        // </Container>
    //     <>
    //       <div style={{ maxWidth: '100%', margin: '0 auto', padding: '20px' }}>
    //   <form
    //     style={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       maxWidth: '500px',
    //       margin: '0 auto',
    //     }}
    //     action="https://secure.payu.in/_payment"
    //     id="payment_form"
    //     method="post"
    //   >
    //     <input type="hidden" id="udf5" name="udf5" value="PayUBiz_NODE_JS_KIT" />
    //     <input type="hidden" id="udf1" name="udf1" value={udf1} />
    //     <input type="hidden" id="udf2" name="udf2" value = {udf2}/>

    //     <input type="hidden" id="surl" name="surl" value="http://localhost:3000/response.html" />
    //     <input type="hidden" id="furl" name="furl" value="http://localhost:3000/response.html" />
    //     <input type="hidden" id="curl" name="curl" value="http://localhost:3000/response.html" />

    //     <input type="hidden" id="key" name="key" value={key} />

    //     <input type="hidden" id="service_provider" name="service_provider" value="payu_paisa" />
    //     <div>
    //       <span>
    //         <input
    //           type="hidden"
    //           id="txnid"
    //           name="txnid"
    //           placeholder="Transaction ID"
    //           value = {txnid}
    //         //   readOnly
    //         />
    //       </span>
    //     </div>

    //     <fieldset style={{ marginTop: '20px', border: 'none' }}>
    //       <div style={{ marginBottom: '20px' }}>
    //         <div style={{ marginBottom: '10px' }}>
    //           <label htmlFor="amount">Total Amount</label>
    //         </div>
    //         <input
    //           style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
    //           id="amount"
    //           name="amount"
    //           placeholder="Amount"
    //           value={amount}
    //         />
    //       </div>

    //       <input
    //         type="hidden"
    //         id="productinfo"
    //         name="productinfo"
    //         placeholder="Product Info"
    //         value="P01,P02"
    //       />

    //       <div style={{ marginBottom: '20px' }}>
    //         <label htmlFor="firstname">Full Name</label>
    //         <input
    //           style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
    //           type="text"
    //           id="firstname"
    //           name="firstname"
    //           required
    //           placeholder="First Name"
    //           value= {firstname}
    //           onChange={calcHash}
    //         />
    //       </div>
    //       <div style={{ marginBottom: '20px' }}>
    //         <label htmlFor="email">Email address</label>
    //         <input
    //           style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
    //           type="text"
    //           id="email"
    //           name="email"
    //           required
    //           placeholder="Email ID"
    //           value={email}
    //           onChange={calcHash}
    //         />
    //       </div>

    //       <input type="text" id="hash" name="hash" placeholder="Hash" value={hash} hidden />

    //       <div style={{ marginBottom: '20px' }}>
    //         <input
    //           style={{
    //             padding: '10px',
    //             width: '100%',
    //             boxSizing: 'border-box',
    //             backgroundColor: '#007bff',
    //             color: '#fff',
    //             border: 'none',
    //             cursor: 'pointer',
    //           }}
    //           id="pay"
    //           type="submit"
    //           value="Pay"
    //         />
    //       </div>
    //     </fieldset>
    //   </form>
    // </div>

    // </>
    )
}
