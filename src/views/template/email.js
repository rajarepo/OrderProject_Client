import { Card, DatePicker, Table } from "antd";
import { Container, Row, Col, Input } from "reactstrap";
import "./template.scss";

const data = [
    {
        Item: 'Digital Print',
        FileName: 'Random FileName.PDF',
        Page: '20',
        Copies: '8',
        Size: '8.5 X 11',
        Note: 'Lorem ipsum dolor sit...',
    }
];

const columns = [
    {
        title: 'Item',
        dataIndex: 'Item',
        key: 'Item',
    },
    {
        title: 'File Name',
        dataIndex: 'FileName',
        key: 'FileName',
    },
    {
        title: 'Page',
        dataIndex: 'Page',
        key: 'Page',
    },
    {
        title: 'Copies',
        dataIndex: 'Copies',
        key: 'Copies',
    },
    {
        title: 'Size',
        dataIndex: 'Size',
        key: 'Size',
    },
    {
        title: 'Note',
        dataIndex: 'Note',
        key: 'Note',
    }
];
const Email = () => (
  <Container>
    <Card
      className="cards"
      bordered={false}
      style={{
        width: 1000,
      }}
    >
      <Row>
        <Col>
          <div className="Submitted">
            Submitted by <span class="kenny"> Kenny McCoig</span>
          </div>
        </Col>
        <Col>
          <div className="Submitted" style={{ textAlign: "end" }}>
            20th February, 2023 at 09:30 PM
          </div>
        </Col>
      </Row>
      <hr />
      <p className="mt-2 mb-1 order"> Order Confirmation </p>
      <p class="order-no"> Order # 221213210452458 </p>
      <Row>
        <Col xl="6">
          <div
            className="p-2"
            style={{ background: "#F7F7F7", borderRadius: "8px" }}
          >
            <Row className="pl-2 pr-2">
              <Col style={{ textAlign: "start" }} className="fields mt-2 ">
                Project Number
              </Col>
              <Col
                style={{ textAlign: "end" }}
                className="order-details-dashed2 text-nowrap"
              >
                <Input
                  style={{ border: "none", backgroundColor: "#F7F7F7" }}
                  className="input"
                  type="textArea"
                  defaultValue="000010.0000.00"
                ></Input>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl="6">
          <div
            className="p-2"
            style={{ background: "#F7F7F7", borderRadius: "8px" }}
          >
            <Row className="pl-2 pr-2">
              <Col style={{ textAlign: "start" }} className="fields mt-2 ">
                Project Name
              </Col>
              <Col
                style={{ textAlign: "end" }}
                className="order-details-dashed2 text-nowrap"
              >
                <Input
                  style={{ border: "none", backgroundColor: "#F7F7F7" }}
                  className="input"
                  type="textArea"
                  defaultValue="General Overhead"
                ></Input>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="pt-3">
        <Col xl="6">
          <div
            className="p-2"
            style={{ background: "#F7F7F7", borderRadius: "8px" }}
          >
            <Row className="pl-2 pr-2">
              <Col style={{ textAlign: "start" }} className="fields mt-2 ">
                Date Required
              </Col>
              <Col
                style={{ textAlign: "end" }}
                className="order-details-dashed2 text-nowrap"
              >
                <DatePicker
                    style={{ border: "none", backgroundColor: "#F7F7F7" }}
                    name={""}
                    className="input"
                    placeholder="24th February, 2023 at 09:30 PM"
                    format="MM/DD/YYYY"
                />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl="6">
          <div
            className="p-2"
            style={{ background: "#F7F7F7", borderRadius: "8px" }}
          >
            <Row className="pl-2 pr-2">
              <Col style={{ textAlign: "start" }} className="fields mt-2 ">
                Order For
              </Col>
              <Col
                style={{ textAlign: "end" }}
                className="order-details-dashed2 text-nowrap"
              >
                <Input
                  style={{ border: "none", backgroundColor: "#F7F7F7" }}
                  className="input"
                  type="textArea"
                  defaultValue="Testing"
                ></Input>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="pt-3">
        <Col xl="6">
          <div
            className="p-2"
            style={{ background: "#F7F7F7", borderRadius: "8px" }}
          >
            <Row className="pl-2 pr-2">
              <Col style={{ textAlign: "start" }} className="fields mt-2 ">
                Notify Contact 1
              </Col>
              <Col
                style={{ textAlign: "end" }}
                className="order-details-dashed2 text-nowrap"
              >
                <Input
                  style={{ border: "none", backgroundColor: "#F7F7F7" }}
                  className="input"
                  type="textArea"
                  defaultValue="Kenny McCoig"
                ></Input>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl="6">
          <div
            className="p-2"
            style={{ background: "#F7F7F7", borderRadius: "8px" }}
          >
            <Row className="pl-2 pr-2">
              <Col style={{ textAlign: "start" }} className="fields mt-2 ">
                 Notify Contact 2
              </Col>
              <Col
                style={{ textAlign: "end" }}
                className="order-details-dashed2 text-nowrap"
              >
                <Input
                  style={{ border: "none", backgroundColor: "#F7F7F7" }}
                  className="input"
                  type="textArea"
                  defaultValue="Paul Elliott"
                ></Input>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <hr/>
        <p class=' mt-2 order'>
		    Order Details
	    </p>
        <Table
            style={{borderRadius:'8px', border: '1px solid #F7F7F7'}}
            columns={columns}
            dataSource={data}
            pagination={false}
            // rowClassName="header"
        
        />
    </Card>
  </Container>
);
export default Email;
