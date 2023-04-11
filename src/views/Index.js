import { useState } from "react";
import Chart from "chart.js";
import {
  Spin,
  Checkbox,
  Input,
  DatePicker,
  TimePicker,
  Upload,
  Select,
  Modal,
} from "antd";
// react plugin used to create charts
// import Select from "react-select";
import { Line, Bar } from "react-chartjs-2";
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
} from "reactstrap";

// core components

import {
  Notepad2,
  Clock,
  CalendarCircle,
  Box1,
  InfoCircle,
} from "iconsax-react";
import Header from "components/Headers/Header.js";
import AllRequestsModal from "./examples/AllRequestsModal";
import SignAndSeal from "./examples/SignAndSeal";
import ReceivedSuccessfullyPopUp from "./examples/ReceivedSuccessfullyPopUp";
// import AllPopUpModel from "./examples/AllPopUp";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";
import Email from "./template/email";

// var perf = require('../SamplePage/email.html');

const Index = (props) => {
  const [open, setOpen] = useState(false);
  const [PopUpOpen, setPopUp] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [borderBoxOpen, setBorderBoxOpen] = useState(false);
  const [firstDropdownValue, setFirstDropdownValue] = useState("");
  const [orderDropdownValue, setOrderDropdownValue] = useState("");
  const [dateChange, setDateChange] = useState("");
  const [timeChange, setTimeChange] = useState("");
  const Option = Select.Option;

  const handleok = () => {
    setOpen(false);
  };
  const handleSignInok = () => {
    setOpen1(false);
  };
  const handleSignInCancel = () => {
    setOpen1(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handlePopUpOk = () => {
    setPopUp(false);
  };
  const handlePopUpCancel = () => {
    setPopUp(false);
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container fluid className="pl-4 ml-3">
        <Row>
          <Col xl="8">
            <Card className="bg-white ">
              {/* <CardHeader className="bg-transparent"> */}
              <Row className="align-items-center">
                <div className="col">
                  {/* <h6
                      className=" header-white ls-1 mb-1"
                      style={{ color: "#7E7E7E" }}
                    >
                      Request Type
                    </h6> */}
                </div>
              </Row>
              {/* </CardHeader> */}
              <CardBody>
                <div className="">
                  <h6 className=" text-black font12 text-left ls-1 mb-1">
                    Sign & Seal
                  </h6>
                </div>
<div className="drop-container-sign mt-3">
<Row className=" align-items-center pt-3  p-2 ">
                  <Col lg="5" className="">
                    <Row>
                      <Col lg="2" className="pr-0">
                        <Checkbox
                          className=""
                          onClick={() => {
                            // setOpen1(true);
                            setBorderBoxOpen(!borderBoxOpen);
                          }}
                        ></Checkbox>
                      </Col>
                      <Col lg="10" className="pl-0 pt-1">
                        <span className="font14  pl-2">
                          Sign and Seal Required
                        </span>
                      </Col>
                    </Row>{" "}
                  </Col>
                  <Col lg="7" className=" header-3 font12">
                    Select this option if you need PDF / Word document printed
                    with the option of requesting a sign and seal of the
                    documents printed
                  </Col>
                </Row>
</div>
               
                <div className="header-2 ls-1 mt-3">Print</div>
                <div className="mt-2">
                  <label for="images" class="drop-container p-4">
                    {/* <img src={require("../assets/img/theme/upload.png")} alt="" className="h-10 w-10 mt-5" /> */}
                    <div className="note p-4">
                      <Notepad2
                        size="40"
                        className="ml-1 mt-1"
                        color="#A0A0A0"
                      />
                    </div>

                    <span class="drop-title mt-2">
                      Drag and drop or browse a file from the network to
                      continue.
                    </span>

                    {/* <Upload> */}
                    <button
                      className="pl-3 pr-3 button-request"
                      onClick={() => setOpen(true)}
                    >
                      Choose File
                    </button>
                    {/* </Upload> */}
                  </label>
                  <label for="images" class="drop-containers p-4"></label>
                </div>

                <Button type="submit" onClick={() => setPopUp(true)}>
                  Submit Request
                </Button>

                <Modal
                  // title="Print"
                  centered
                  open={open}
                  onOk={handleok}
                  onCancel={handleCancel}
                  closable={false}
                  footer={[
                    <Row className="p-3">
                      <Col className="ml-2" style={{ textAlign: "start" }}>
                        <button
                          className="button-request padding"
                          onClick={handleCancel}
                        >
                          Go Back
                        </button>
                      </Col>
                      <Col>
                        <Button key="submit" onClick={handleok}>
                          Submit Request
                        </Button>
                      </Col>
                    </Row>,
                  ]}
                  // height={"381px)"}
                  width={"1300px"}
                >
                  <AllRequestsModal />
                </Modal>
                <Modal
                  // title="signandseal"
                  centered
                  open={open1}
                  onOk={handleSignInok}
                  onCancel={handleSignInCancel}
                  closable={false}
                  footer={[
                    <Row className="p-3">
                      <Col className="ml-2" style={{ textAlign: "start" }}>
                        <button
                          className="button-request padding"
                          onClick={handleSignInCancel}
                        >
                          Go Back
                        </button>
                      </Col>
                      <Col>
                        <Button key="submit" onClick={handleSignInCancel}>
                          Submit Request
                        </Button>
                      </Col>
                    </Row>,
                  ]}
                  width={1300}
                >
                  <SignAndSeal />
                </Modal>

                <Modal
                  // title="Print"
                  centered
                  open={PopUpOpen}
                  onOk={handlePopUpOk}
                  onCancel={handlePopUpCancel}
                  closable={false}
                  footer={[
                    <Row className="p-3">
                      {/* Received successfully PopUp */}
                      <div className="col-8 ml-4">
                        <Button
                          classname=" PopUpContinueText"
                          style={{
                            textAlign: "center",
                            height: "43px",
                            width: "152px",
                          }}
                          key="submit"
                          onClick={handleok}
                        >
                          Continue
                        </Button>
                      </div>
                    </Row>,
                  ]}
                  //  height ={"437px"}
                  width={"375px"}
                // left= {"528px"}
                // top= {"291px"}
                >
                  <ReceivedSuccessfullyPopUp />
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="" style={{ height: "100%" }}>
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
                    style={{ width: "100%" }}
                    placeholder="Type to Search..."
                    optionFilterProp="children"
                    onChange={(e) => setFirstDropdownValue(e)}
                  >
                    <Option value="">Select</Option>
                    <Option value="1">One</Option>
                    <Option value="2">Two</Option>
                    <Option value="3">Three</Option>
                  </Select>
                  {firstDropdownValue ? (
                    <TextArea
                      className="mt-3"
                      style={{ height: "200px" }}
                      placeholder="Please list the reason why you are selecting an overhead project and/or list the dormant project or client where this order should be billed."
                    ></TextArea>
                  ) : (
                    ""
                  )}

                  <label for="start" className="labels pt-3">
                    Date/Time Required
                  </label>
                  <div className="pb-3">
                    <DatePicker
                      name={""}
                      className="inputs"
                      suffixIcon={<CalendarCircle style={{ color: "black" }} />}
                      placeholder="Select..."
                      hideTime
                      onChange={(e) => {
                        let formatDate = moment(e).format(
                          "MM-DD-YYYY HH:mm:ss a"
                        );
                        formatDate
                          ? setDateChange(formatDate)
                          : setDateChange("");
                      }}
                      format="MM/DD/YYYY"
                    />
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
                      showTime={{ format: "HH:mm A", use12Hours: true }}
                      onChange={(e) => {
                        let formatTime = moment(e).format(
                          "MM-DD-YYYY HH:mm a"
                        );
                        formatTime
                          ? setTimeChange(formatTime)
                          : setTimeChange("");
                      }}
                    />
                    {dateChange && timeChange ? (
                      <TextArea
                        className="mt-3"
                        style={{ height: "200px" }}
                        placeholder="Please list the reason for the chosen earlier due time."
                      ></TextArea>
                    ) : (
                      ""
                    )}
                  </div>

                  {borderBoxOpen ? (
                    <Card className=" borderBox mt-2  ">
                      <div className="d-flex">
                        <div>
                          {" "}
                          <InfoCircle
                            className="attentionInfoIcon mr-4"
                            style={{ color: "#264B5D" }}
                          />
                        </div>
                        <div>
                          <div className="">
                            It is past 2 PM EST deadline for new orders. Depending on the
                            time and workload, this order may not be completed by the end
                            of the day.
                          </div>
                          <div className="pt-2 ">
                            For more information, please call the plotroom.
                          </div>
                        </div>
                      </div>
                    </Card>
                  ) : (
                    ""
                  )}
                  <label className="labels pt-3">Order For</label>
                  <Select
                    size={"large"}
                    style={{ width: "100%" }}
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
                  {orderDropdownValue ? (
                    <TextArea
                      className="mt-3"
                      style={{ height: "200px" }}
                      placeholder="Please list the reason."
                    ></TextArea>
                  ) : (
                    ""
                  )}
                </form>

                <Row className="mt-3 p-2">
                  <Col>
                    <label className="labels ">Notify Contact 1</label>
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

                {/* <label for="images" class="drop-containers p-4">
                 <a href="/client/email">Sample email</a> 
                 <a href="/client/s&s">S & S</a>
                 <a href="/client/orderpdf">Order PDF</a>  
                </label> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
