import { useEffect } from "react";
import HitService from "../services/HitService"

const GraphSVG = (props) => {
    
    const onSvgClick = (event) => {
        const localX = event.pageX - event.currentTarget.offsetLeft;
        const localY = event.pageY - event.currentTarget.offsetTop;
        const point = {
            point: {
                x: (localX-200)*props.radius/150,
                y: (200-localY)*props.radius/150,
                r: props.radius
            }
        }

        HitService.hit(point).then((data) => {
            props.addHit(data.data);
        });
    } 
    
    return (
        <div onClick={onSvgClick}>
        <svg id="graph" width="400px" height="400px">
                    <polygon points="200,200 200,50 350,50 350,200" fill="blue" fillOpacity="0.4"/>
                    <path fill="blue" fillOpacity="0.4" d="M200,200 L50,200 A150,150 0 0,1 200,50 Z"/>
                    <polygon points="200,200 350,200 200,275" fill="blue" fillOpacity="0.4"/>

                    <line x1="200" y1 = "400" x2="200" y2="0" stroke="white"/>
                    <line x1="0" y1 = "200" x2="400" y2="200" stroke="white"/>
                    <line x1="200" y1 = "0" x2="185" y2="15" stroke="white"/>
                    <line x1="200" y1 = "0" x2="215" y2="15" stroke="white"/>
                    <line x1="400" y1 = "200" x2="385" y2="215" stroke="white"/>
                    <line x1="400" y1 = "200" x2="385" y2="185" stroke="white"/>

                    <line x1="275" y1 = "210" x2="275" y2="190" stroke="white"/>
                    <line x1="350" y1 = "210" x2="350" y2="190" stroke="white"/>
                    <line x1="125" y1 = "210" x2="125" y2="190" stroke="white"/>
                    <line x1="50" y1 = "210" x2="50" y2="190" stroke="white"/>
                    <line x1="190" y1 = "275" x2="210" y2="275" stroke="white"/>
                    <line x1="190" y1 = "350" x2="210" y2="350" stroke="white"/>
                    <line x1="190" y1 = "125" x2="210" y2="125" stroke="white"/>
                    <line x1="190" y1 = "50" x2="210" y2="50" stroke="white"/>
                    {
                    props.point ? 
                        <circle 
                         cx={200 + (props.point.x / props.point.r) * 150}
                         cy={200 - (props.point.y / props.point.r) * 150} r='3' fill={props.point.inside ? 'green' : 'red'}/>
                    : ''}

                    <text id = 'R' fill="white" x="345" y="180">{props.radius}</text>
                    <text id = 'R' fill="white" x="45" y="180">{props.radius}</text>
                    <text id = 'R' fill="white" x="220" y="55">{props.radius}</text>
                    <text id = 'R' fill="white" x="220" y="355">{props.radius}</text>
                    <text id = 'halfR' fill="white" x="265" y="180">{props.radius/2}</text>
                    <text id = 'halfR' fill="white" x="115" y="180">{props.radius/2}</text>
                    <text id = 'halfR' fill="white" x="220" y="130">{props.radius/2}</text>
                    <text id = 'halfR' fill="white" x="220" y="280">{props.radius/2}</text>
        </svg>
        </div>
        
    )
}

export default GraphSVG;