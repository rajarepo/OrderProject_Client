import React from "react";
import { useState } from "react";
import { Modal, Row, Col, Select, Card, Input, Checkbox } from "antd";
import { Container } from "reactstrap";
import TextArea from "antd/es/input/TextArea";
import { Danger } from "iconsax-react";

const PopUpFailed = (props) => {
    const [color, setColor] = useState(false);

    return (
        <>
            <hr className="m-0" />
            <div className="align-item-center">
               <div className="mt-3 ml-8 pl-2">
               <Danger className="popupIcon" color="#264B5D"  />
               </div>
           
                <div className="mt-4 PopUpBoldText" >
                Order Submission Failed
                </div>

                <div className="mt-2 PopUpNormalText1">
                It looks like something went wrong. Please try again or check back later.<br></br>
                </div>
                
            </div>
           
        </>
    )
}
export default PopUpFailed;
