
import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Input, DatePicker, TimePicker, Upload, Select, Radio, Modal } from 'antd';
import ChicagoModal from "views/examples/ChicagoModal";
import { Line, Bar } from "react-chartjs-2";
import DetectedPopUp from "views/examples/DetectedPopUp";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    NavbarBrand,
    Progress,
    Table,
    Container,
    Row,
    Col,
    Form
} from "reactstrap";

// core components
import { Notepad2, Clock, CalendarCircle } from "iconsax-react";
import Header from "components/Headers/Header.js";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";

const ChicagoTreeTown = (props) => {
    const [open, setOpen] = useState(false);
    const [firstDropdownValue, setFirstDropdownValue] = useState('');
    const [orderDropdownValue, setOrderDropdownValue] = useState('');
    const [dateChange, setDateChange] = useState('');
    const [timeChange, setTimeChange] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const handleok = () => {
        setOpen(false);
    }
    const handleCancel = () => {
        setOpen(false);
    }
    const handleModalok = () => {
        setModalOpen(false);
    }
    const handleModalCancel = () => {
        setModalOpen(false);
    }
    const Option = Select.Option;

    return (
        <>
            <Header />
            {/* Page content */}
            <Container fluid className="pl-4 ml-3">
                <Row>
                    <Col xl="8">
                        <Card className="bg-white " >
                            {/* <CardHeader className="bg-transparent"> */}
                            <Row className="align-items-center">
                                <div className="col">
                                    {/* <h6 className=" header-white ls-1 mb-1" style={{ color: "#7E7E7E" }}>
                                            Request Type
                                        </h6> */}
                                </div>

                            </Row>
                            {/* </CardHeader> */}
                            <CardBody>
                                <div className="px-0" >
                                    <h1 style={{ fontSize: 24, color: '#000000', fontWeight: 500, fontFamily: 'Manrope' }}>
                                        Chicago - Tree Towns Request
                                    </h1>
                                    <span style={{ fontSize: 12, color: '#7E7E7E', marginBottom: "2" }}>
                                        Chicago employees may select this option to have the plots sent to Tree Towns.
                                    </span>
                                </div>

                                <div className="ml-2 mt-4">
                                    <Form className="mb-[2px]">
                                        <label
                                            style={{ color: '#7E7E7E', fontSize: '12px', fontFamily: 'Manrope' }}
                                            className="labels">Delivery or Pick-Up</label>
                                        <Radio.Group
                                            options={[
                                                { label: "Delivery", value: "a" },
                                                { label: "Pick Up", value: "b" }
                                            ]}
                                        />
                                    </Form>
                                    <Form className="pt-3">
                                        <label
                                            style={{ color: '#7E7E7E', fontSize: '12px', fontFamily: 'Manrope' }}
                                            className="labels">Bind or No-Bind</label>
                                        <Radio.Group
                                            options={[
                                                { label: "Bind", value: "a" },
                                                { label: "No-Bind", value: "b" }
                                            ]}
                                        />
                                    </Form>
                                    <Form className="pt-3">
                                        <label
                                            style={{ color: '#7E7E7E', fontSize: '12px', fontFamily: 'Manrope' }}
                                            className="labels">Add 11 x 17 record set?</label>
                                        <Radio.Group
                                            options={[
                                                { label: "Yes", value: "a" },
                                                { label: "No", value: "b" }
                                            ]}
                                        />
                                    </Form>
                                </div>

                                <div className='header-2 ls-1 mt-4'>
                                    Chicago - Tree Towns
                                </div>
                                <div className='mt-4'>
                                    <label for="images" class="drop-container p-4">
                                        {/* <img src={require("../assets/img/theme/upload.png")} alt="" className="h-10 w-10 mt-5" /> */}
                                        <div className="note p-4">
                                            <Notepad2 size="40" className="ml-1 mt-1" color="#A0A0A0" />

                                        </div>

                                        <span class="drop-title mt-2">Drag and drop or browse a file from the network to continue.</span>

                                        {/* <Upload> */}
                                        <button className="pl-3 pr-3 button-request" onClick={() => setOpen(true)}>Choose File</button>
                                        {/* </Upload> */}
                                    </label>
                                    <label for="images" class="drop-containers p-4" ></label>
                                </div>

                                <Button className="mt-5" key="submit" onClick={() => setModalOpen(true)} >Submit Request</Button>
                                <Modal
                                    // title="Print"
                                    centered
                                    open={open}
                                    onOk={handleok}
                                    onCancel={handleCancel}
                                    closable={false}
                                    footer={[
                                        <Row className="p-3">
                                            <Col className="ml-2" style={{ textAlign: 'start' }}>
                                                <button className="button-request padding" onClick={handleCancel}>Go Back</button>
                                            </Col>
                                            <Col>
                                                <Button key="submit" onClick={handleok}>Submit Request</Button>
                                            </Col>
                                        </Row>,

                                    ]}

                                    width={1300}
                                >

                                    <ChicagoModal />

                                </Modal>
                                <Modal
                                    // title="Print"
                                    centered
                                    open={modalOpen}
                                    onOk={handleModalok}
                                    onCancel={handleModalCancel}
                                    closable={false}
                                    footer={[
                                        <Row className="p-4 " >
                                            <div className="ml-2 col-3" >
                                                <button style={{
                                                    textAlign: "center", height: "43px", width: "152px", BorderRadius: "8px", padding: "12px, 16px, 12px, 16px",
                                                    gap: "8px", background: "#FFFFFF", border: " 1px solid #EDEDED"
                                                }} className="PopUpKeyText" onClick={handleModalCancel}>Stay Here</button>
                                            </div>

                                            <div className="col-8 ml-3">
                                                <Button classname="ml-5px PopUpContinueText" style={{ textAlign: "center", height: "43px", width: "152px" }} key="submit" onClick={handleok}>Continue</Button>
                                            </div>
                                        </Row>
                                    ]}
                                    width={"375px"}


                                >
                                    <DetectedPopUp />


                                </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="4">
                        <Card className="" style={{ height: '100%' }}>
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className="text-black header-white ls-1 mb-1 ls-1 mb-1">
                                            General Information
                                        </h6>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <form className="p-2">

                                    <label className="labels">Project Number</label>

                                    <Select
                                        showSearch
                                        size={"large"}
                                        style={{ width: '100%' }}
                                        placeholder="Type to Search..."
                                        optionFilterProp="children"
                                        onChange={(e) => setFirstDropdownValue(e)}
                                    >
                                        <Option value="">Select</Option>
                                        <Option value="1">One</Option>
                                        <Option value="2">Two</Option>
                                        <Option value="3">Three</Option>
                                    </Select>
                                    {/* {console.log("firstDroroDownValue", firstDropdownValue)} */}
                                    {firstDropdownValue ?
                                        <TextArea className="mt-3" style={{ height: '200px' }}
                                            placeholder='Please list the reason why you are selecting an overhead project and/or list the dormant project or client where this order should be billed.'
                                        >
                                        </TextArea> : ''
                                    }

                                    <label for="start" className="labels pt-3">Date/Time Required</label>
                                    <div className="pb-3">
                                        <DatePicker
                                            name={""}
                                            className="inputs"
                                            suffixIcon={<CalendarCircle style={{ color: "black" }} />}
                                            placeholder="Select..."
                                            hideTime
                                            onChange={(e) => {
                                                let formatDate = moment(e).format("MM-DD-YYYY HH:mm:ss a")
                                                formatDate ? setDateChange(formatDate) : setDateChange('')
                                            }}
                                            format="MM/DD/YYYY" />
                                    </div>
                                    <div>
                                        <TimePicker
                                            name={""}
                                            suffixIcon={<Clock style={{ color: "black" }} />}
                                            placeholder="00 : 00 PM"
                                            hideSeconds
                                            showNow={false}
                                            minuteStep={15}
                                            format="HH:mm A"
                                            // value={timeChange}
                                            showTime={{ format: 'HH:mm A', use12Hours: true }}
                                            onChange={(e) => {
                                                let formatTime = moment(e).format("MM-DD-YYYY HH:mm:ss a")
                                                formatTime ? setTimeChange(formatTime) : setTimeChange('')
                                            }}
                                        />
                                        {
                                            dateChange == "Invalid date" && timeChange == "Invalid date" ? ""
                                                :
                                                dateChange && timeChange ?
                                                    <TextArea className="mt-3" style={{ height: '200px' }}
                                                        placeholder='Please list the reason for the chosen earlier due time.'
                                                    >
                                                    </TextArea> : ''
                                        }

                                    </div>
                                    <label className="labels pt-3">Order For</label>
                                    <Select
                                        size={"large"}
                                        style={{ width: '100%' }}
                                        showSearch
                                        optionFilterProp="children"
                                        placeholder="Type to Search..."
                                        onChange={(e) => setOrderDropdownValue(e)}
                                    >
                                        <Option value="">Select</Option>
                                        <Option value="1">One</Option>
                                        <Option value="2">Two</Option>
                                        <Option value="3">Three</Option>
                                    </Select>
                                    {
                                        orderDropdownValue ?
                                            <TextArea className="mt-3" style={{ height: '200px' }}
                                                placeholder='Please list the reason.'
                                            >
                                            </TextArea> : ''
                                    }
                                    <Row className="mt-3">
                                        <Col>
                                            <label className="labels pt-3">Notify Contact 1</label>
                                            <Select
                                                showSearch
                                                size={"large"}
                                                style={{ width: '100%' }}
                                                placeholder="Type to Search..."
                                            > </Select>
                                        </Col>
                                        <Col>
                                            <label className="labels">Notify Contact 2</label>
                                            <Select
                                                showSearch
                                                size={"large"}
                                                style={{ width: '100%' }}
                                                placeholder="Type to Search..."

                                            > </Select>
                                        </Col>
                                        <Col>
                                            <label className="labels">Notify Contact 3</label>
                                            <Select
                                                showSearch
                                                size={"large"}
                                                style={{ width: '100%' }}
                                                placeholder="Type to Search..."
                                            > </Select>
                                        </Col>
                                    </Row>

                                </form>
                                <label for="images" class="drop-containers p-4" ></label>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
};
export default ChicagoTreeTown;
