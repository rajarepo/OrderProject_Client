import React from "react";
import { useState } from "react";
import { Modal, Row, Col, Select, Card, Input, Checkbox } from "antd";
import { Container } from "reactstrap";
import TextArea from "antd/es/input/TextArea";
import { Box1, Trash, InfoCircle } from "iconsax-react";

const DetectedPopUp = (props) => {
    const [color, setColor] = useState(false);

    return (
        <>
            <hr className="m-0" />
            <div className="align-item-center">
                <div className="mt-3 ml-8 pl-1">
                <InfoCircle  className="popupIcon " color="#264B5D" />
                </div>
          
                <div className="mt-4 PopUpBoldText" >
                Unsaved Changes Detected
                </div>

                <div className="mt-2 PopUpNormalText1">
                Are you sure you wish to proceed? We have
                </div>

                <div className="mt-1 PopUpNormalText1">
                detected some unsaved changes that will be 
                </div>

                <div className="mt-1 PopUpNormalText1">
                discarded if you leave this window.
                </div>

            </div>
           
        </>
    )
}
export default DetectedPopUp;