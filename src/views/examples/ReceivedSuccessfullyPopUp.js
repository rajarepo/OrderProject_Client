import React from "react";
import { useState } from "react";
import { Modal, Row, Col, Select, Card, Input, Checkbox } from "antd";
import { Container } from "reactstrap";
import TextArea from "antd/es/input/TextArea";
import { I3DCubeScan } from "iconsax-react";

const ReceivedSuccessfullyPopUp = (props) => {
    const [color, setColor] = useState(false);

    return (
        <>
            <hr className="m-0" />
            <div className="align-item-center">
                <div className="mt-3 text-center">
                {/* <I3DCubeScan
                size="32"
                className="msgicon" color="#555555"
                variant="Outline"
                /> */}
                <I3DCubeScan className="popupIcon" color="#264B5D" />
                </div>
          
                <div className="mt-3 PopUpBoldText" >
                Order Received Successfully
                </div>

                <div className="mt-1 PopUpNormalText">
                We have received your order and will begin processing it as soon as possible.
                Confirmation email has been sent to you. Emails have also been copied to any
                Sign and Sealers who were specified.<br></br>
                </div>
               
            </div>
           
        </>
    )
}
export default ReceivedSuccessfullyPopUp;