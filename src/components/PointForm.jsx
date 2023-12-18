import { useState } from "react"
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { confirmDialog } from 'primereact/confirmdialog';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from "primereact/button";
import HitService from "../services/HitService";

const PointForm = (props) => {
    const [x, setX] = useState(1);
    const [y, setY] = useState(0);
    
    
    const buttonClick = (event) => {
        
        HitService.hit({
            point: {
                x,
                y : y || 0,
                r: props?.radius
            }
        })
        .then((hit) => {
            props.addHit(hit.data);
    })
    .catch(data => {
        confirmDialog({
            message: "Invalid data",
            header: 'Error',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
        });
    });
        
    };

    return (
        <div>
            <ConfirmDialog/>
            <div className="form-element">
            <label>X: </label>
                <Dropdown value={x} onChange={(e) => setX(e.value)} options={[1, 2, 3]}
                    placeholder="Select X" />
            </div>
            <div className="form-element">
                <label>Y: </label> 
                <InputNumber placeholder="Select Y" value={y} onValueChange={(e) => setY(e.value)} min={-4} max={4} maxFractionDigits={3}/>
            </div>
            <div className="radio">
                <legend>R value</legend>


                <div> 
                    <RadioButton inputId="ingredient1" name="R" value="1" onChange={(e) => props.setRadius(e.value)} checked={props?.radius === '1'} />
                    <label htmlFor="ingredient1" className="ml-2">1</label>
                </div>
                <div >
                    <RadioButton inputId="ingredient2" name="R" value="2" onChange={(e) => props.setRadius(e.value)} checked={props?.radius === '2'} />
                    <label htmlFor="ingredient2" className="ml-2">2</label>
                </div>
                <div >
                    <RadioButton inputId="ingredient3" name="R" value="3" onChange={(e) => props.setRadius(e.value)} checked={props?.radius === '3'} />
                    <label htmlFor="ingredient3" className="ml-2">3</label>
                </div>
                <div >
                    <RadioButton inputId="ingredient4" name="R" value="4" onChange={(e) => props.setRadius(e.value)} checked={props?.radius === '4'} />
                    <label htmlFor="ingredient4" className="ml-2">4</label>
                </div>
            </div>
            <div className="form-element">
                <Button  label="Submit" onClick={buttonClick}></Button>
            </div>
        </div>
        
    )
}

export default PointForm;