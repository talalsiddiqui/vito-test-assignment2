import { Col, Image, Row, Typography } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

import { IGridItemProps } from "./gridItem";
import styles from "./gridItem.module.scss";

const { Paragraph } = Typography;

const GridItem = ({ data }: IGridItemProps) => {
  const router = useRouter();
  const [loadedImg, setLoadedImg] = useState(true);
  return (
    <div>
      <Row
        onClick={() => router.push(`/checkin/${data.id}`)}
        className={styles.container}
      >
        <Col span={24}>
          {loadedImg && (
            <Image
              className={styles.img}
              onLoad={() => setLoadedImg(true)}
              onError={() => setLoadedImg(false)}
              src={data.image_url}
              preview={false}
              alt=""
            />
          )}
        </Col>
        <Col span={24}>
          <Paragraph
            ellipsis={{
              rows: 9,
            }}
          >
            {data?.comment}
          </Paragraph>
        </Col>
        <Col span={24}>
          <Paragraph className={styles.date}>
            {format(new Date(data?.created_at), "dd MMM, yyyy")}
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default GridItem;
