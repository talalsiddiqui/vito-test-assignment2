import { Row } from "antd";
import Link from "next/link";

const HeaderElements = () => {
  return (
    <Row justify="space-between">
      <Link href="/">
        <div className="logo">Product Name</div>
      </Link>
      <Row>
        <Link href="/">
          <div className="headerLink">Feedback</div>
        </Link>
        <Link href="/">
          <div className="headerLink">Support</div>
        </Link>
      </Row>
    </Row>
  );
};

export default HeaderElements;
