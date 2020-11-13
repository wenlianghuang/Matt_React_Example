import React, {Component} from 'react';
import {NavLink,useParams} from 'react-router-dom';
import Image from './Image';
import {ImgArray} from './ExternalArray';
export default (props) => {
    let { id } = useParams();
    let image = ImgArray[parseInt(id, 10)];
    if (!image) return <div>Image not found</div>;

    return(
        <div>
            <h1>{image.title}</h1>
            <Image color={image.color}/>
            <button>
                <NavLink to='/'>home</NavLink>
            </button>
        </div>
    )
}