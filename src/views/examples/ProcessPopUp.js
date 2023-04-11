import React from "react";
import { useState } from "react";
import { Modal, Row, Col, Select, Card, Input, Checkbox } from "antd";
import { Container } from "reactstrap";
import TextArea from "antd/es/input/TextArea";
import { More2 } from "iconsax-react";

const ProcessPopUp = (props) => {
    const [color, setColor] = useState(false);

    return (
        <>
            <hr className="m-0" />
            <div className="align-item-center ">
            <div className="mt-3 ml-8 pl-2">
            <More2 className="popupIcon " color="#264B5D" />
            </div>
           
                <div className="mt-3 PopUpBoldText" >
                Order Submission in Progress
                </div>

                <div className="mt-2 PopUpNormalText1 p-1">
                Your order has been successfully placed and is currently being progressed.<br></br>
                </div>
            </div>
           
        </>
    )
}
export default ProcessPopUp;