import React, {Component} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import Image from './Image';
import {ImgArray} from './ExternalArray';
export default () => {
    let history = useHistory();
    let {id} = useParams();
    let image = ImgArray[parseInt(id,10)];
    if(!image) return null;

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div 
          onClick={back}
          style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              background: "rgba(0,0,0,0.015)"
          }}>
          <div
            className="modal"
            style={{
              position: "absolute",
              background: "#fff",
              top: 25,
              left: "10%",
              right: "10%",
              padding: 15,
              border: "2px solid #444"
            }}
          >
            <h1>{image.title}</h1>
            <Image color={image.color} />
            <button type="button" onClick={back}>
              Close
            </button>
          </div>
        </div>
    );

}