import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Form, FormLabel, FormControl, Button} from "react-bootstrap"
import Axios from "axios";
import { useLocation } from "react-router-dom";

export default function Response () {
    const location = useLocation();
    const { htmlResponse } = location.state;
  
    useEffect(() => {
      if (htmlResponse) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlResponse, "text/html");
        const renderedHtml = doc.querySelector("html");
  
        if (renderedHtml) {
          const newDoc = document.implementation.createHTMLDocument();
          newDoc.documentElement.innerHTML = renderedHtml.innerHTML;
          document.documentElement.innerHTML = newDoc.documentElement.innerHTML;
        } else {
          console.log("Empty or invalid HTML response");
        }
      }
    }, [htmlResponse]);
  
    return null;
}