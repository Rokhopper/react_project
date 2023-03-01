import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import StartWarsImg from '../Assets/starwars.png';
import SpringfieldImg from '../Assets/springfield.jpeg';
import BattlefieldImg from '../Assets/battlefield.jpg';
class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={StartWarsImg}
                        alt="Star Wars"/>
                    <Carousel.Caption>
                        <p>Be the hero in the ultimate Star Wars™ battle fantasy with Star Wars™ Battlefront™ II: Celebration Edition!
                            Get Star Wars Battlefront II and the complete collection of customization content acquirable through in-game purchase
                            from launch up to — and including — items inspired by Star Wars™: THE RISE OF SKYWALKER™</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SpringfieldImg}
                        alt="Springfield Tapped Out"/>
                    <Carousel.Caption>
                        <p>Homer accidentally caused the explosion of a nuclear reactor, which wiped Springfield from the face of the earth.
                            CRAP! Now you have to rebuild it! The creators of the original The Simpsons invite you to create your own, living Springfield...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BattlefieldImg}
                        alt="Battlefield 2042"/>
                    <Carousel.Caption>
                        <p>Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise.
                            Adapt and overcome in a near-future world transformed by disorder.
                            Squad up and bring a cutting-edge arsenal into dynamically changing battlegrounds supporting 128 players,
                            unprecedented scale, and epic destruction.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default CarouselBoxHk;