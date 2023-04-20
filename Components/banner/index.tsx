import { Button, Typography } from "antd";
import styles from "./banner.module.scss";

const { Title, Paragraph } = Typography;

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div>
          <Title level={2}>CheckIns</Title>
          <Paragraph className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
