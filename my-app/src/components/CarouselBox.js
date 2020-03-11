import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import commis from '../assets/commis.jpg'
import commis1 from '../assets/commis1.jpg'

export default function CarouselBox() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={commis}
                        alt="commision shop"
                    />
                    <Carousel.Caption>
                        <h3> Commision magazine </h3>
                        <p> amazing commision magazine </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={commis1}
                        alt="commision shop"
                   />
                    <Carousel.Caption>
                        <h3> Commision magazine </h3>
                        <p> amazing commision magazine </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
