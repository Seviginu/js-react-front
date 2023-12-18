import { useEffect, useState } from "react";
import HitsTable from "../components/HitsTable";
import PointForm from "../components/PointForm";
import { PrimeReactProvider } from 'primereact/api';
import GraphSVG from "../components/GraphSVG";
import HitService from "../services/HitService";
import "./MainPage.css"
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";


function MainPage() {
    const navigate = useNavigate();
    
    const [hits, setHits] = useState([]);
    const [point, setPoint] = useState(null);
    const [radius, setRadius] = useState('2');
    useEffect(() => {
      if(!localStorage.getItem("user"))
        navigate("/");
      else{
        HitService.getHits().then(
          (data) => {
            setHits(
              data.data.map(
                a => {
                  return {...a.point, inside: a.isInside, created: a.creationDate};
                }
              )
            )
          }
        )}
      }, []
    );

    const addHit = (hit) => {
      const point = {
        x: hit.point.x,
        y: hit.point.y,
        r: hit.point.r,
        inside: hit.isInside,
        created: hit.creationDate
      };
      setPoint(point);
      setHits([...hits, point]);
    };
    return (
      <div className="grid">
            <Header/>
            <PointForm addHit={addHit} setRadius={setRadius} radius={radius}/>
            <GraphSVG point={point} addHit={addHit} radius={radius}/>
            <HitsTable hits={hits}/>
            
      </div>
    );
  }
  
  export default MainPage;