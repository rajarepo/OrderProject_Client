
import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Input, DatePicker, TimePicker, Upload, Select, Table, Radio } from 'antd';
// react plugin used to create charts
// import Select from "react-select";
import { Line, Bar } from "react-chartjs-2";
import { RadioChangeEvent } from 'antd';
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
  // Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

import { Notepad2, Clock, CalendarCircle } from "iconsax-react";
import Header from "components/Headers/Header.js";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import moment from "moment";


const data = [];

for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    // age: 32,
    // address: `London, Park Lane no. ${i}`,
  });
}
const columns = [
  {
    title: "Discipline",
    dataIndex: "name",
    key: "signer",
    width: '60rem',

  },
  {
    title: "Signer",
    dataIndex: "signer",
    key: "signer",
    width: '50rem',


    render: (text, record) => {
      return (
        <div className="flex items-center gap-[10px] ">
          <Select

            showSearch
            size={"medium"}
            style={{ width: "100%" }}


            placeholder="Type to Search..."

          > </Select>
        </div>
      );
    },
  },
  {
    title: "QA / QC Contact",
    dataIndex: "contact",
    key: "contact",
    width: '50rem',

    render: (text, record) => {
      return (
        <div className="flex items-center gap-[10px] ">
          <Select
            showSearch
            size={"medium"}
            style={{ width: "100%" }}
            placeholder="Type to Search..."
          > </Select>
        </div>
      );
    },
  },

];

const Electronic = (props) => {
  const [value, setValue] = useState(1);
  const [borderBoxOpen, setBorderBoxOpen] = useState(false);
  const [firstDropdownValue, setFirstDropdownValue] = useState('');
  const [orderDropdownValue, setOrderDropdownValue] = useState('');
  const [dateChange, setDateChange] = useState('');
  const [timeChange, setTimeChange] = useState('');

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
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
                <div className='electronic-s'>
                  Electronic S and S Request
                </div>
                <div className="electronic-2 mt-1">
                  Select this option if you require PDFs to be electronically signed and sealed.
                </div>
                <div className="pt-1 mt-4">
                  <span className='font16'>Sign and Seal Required</span>
                </div>
                <Row className="p-3">
                  <label className="labels-e">State</label>
                  <Select
                    showSearch
                    size={"large"}
                    style={{ width: '100%' }}
                    placeholder="Type to Search..."
                  > </Select>
                </Row>
                <Row className="mb-2">
                  <Table columns={columns} dataSource={data} pagination={false} />
                </Row>

                <Row className=" p-3 ">
                  <div className="electronic-2">
                    Are bookmarks required for this submittal?
                  </div>
                </Row>

                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>Yes</Radio>
                  <Radio value={2}>No</Radio>
                </Radio.Group>

                <div className="mt-4">
                  <div className='header-2 ls-1 mt-3'>
                    Electronic S and S
                  </div>
                  <div className='mt-3'>
                    <label for="images" class="drop-container p-4">
                      {/* <img src={require("../assets/img/theme/upload.png")} alt="" className="h-10 w-10 mt-5" /> */}
                      <div className="note p-4">
                        <Notepad2 size="40" className="ml-1 mt-1" color="#A0A0A0" />
                      </div>
                      <span class="drop-title mt-2">Drag and drop or browse a file from the network to continue.</span>
                      <Upload><button className="pl-3 pr-3 button-request">Choose File</button></Upload>
                    </label>

                  </div>
                </div>

                <Row className="mt-4">
                  <Col>
                    <label className="labels">Notify Contact 1</label>
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
                <Button className="mt-5" key="submit">Submit Request</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card classNam="" style={{ height: '100%' }}>
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

export default Electronic;
