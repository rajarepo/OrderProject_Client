
import Index from "views/Index.js";
import Electronic from "views/Electronic-s/Electronic"; 

import { Printer, Scan, SmsTracking, Cd, Tree } from "iconsax-react";
import ScanIndex from "views/Scan/scanIndex";
import USBCD from "views/USB/USB-CD";
import ChicagoTreeTown from "views/Chicago-Tree-Town/CTT";
import Email from "views/template/email";
import SandS from "views/template/S&S";
import OrderPDF from "views/template/OrderPDF";

var routes = [
  {
    path: "/index",
    name: "Print",
    component: Index,
    layout: "/client",
    icon: <Printer/>,
    menuList: true
  },
  {
    path: "/scan",
    name: "Scan",
    component: ScanIndex,
    layout: "/client",
    icon: <Scan  variant="Outline"/>,
    menuList: true
  },
  {
    path: "/electronic",
    name: "Electronic S and S",
    component: Electronic,
    layout: "/client",
    icon: <SmsTracking variant="Outline"/>,
    menuList: true
  },
  {
    path: "/usb",
    name: "USB / CD",
    component: USBCD,
    layout: "/client",
    icon: <Cd variant="Outline"/>,
    menuList: true
  },
  {
    path: "/chicago",
    name: "Chicago - Tree Towns",
    component: ChicagoTreeTown,
    layout: "/client",
    icon: <Tree variant="Outline"/>,
    menuList: true
  },
  {
    path: "/email",
    name: "Email",
    component: Email,
    layout: "/client",
    menuList: false,
  },
  {
    path: "/s&s",
    name: "S&S",
    component: SandS,
    layout: "/client",
    menuList: false,
  },
  {
    path: "/orderpdf",
    name: "OrderPDF",
    component: OrderPDF,
    layout: "/client",
    menuList: false,
  },

  
];
export default routes;