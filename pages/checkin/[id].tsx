import { GET_CHECKIN } from "@/utils/graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Col, Image, Input, Row, Typography } from "antd";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import styles from "../../styles/CheckIn.module.scss";
import { format } from "date-fns";
import {
  UPDATE_COMMENT,
  UPDATE_IMAGE,
  UPDATE_TITLE,
} from "@/utils/graphql/mutations";
import Link from "next/link";

const { Paragraph, Title } = Typography;

export default function CheckInDetails() {
  const [titleEdit, setTitleEdit] = useState(false);
  const [commentEdit, setCommentEdit] = useState(false);
  const [imageEdit, setImageEdit] = useState(false);
  const [Imgurl, setImgUrl] = useState("");
  const [commentValue, setCommentValue] = useState("text");
  const [headingValue, setHeadingValue] = useState("text");
  const [creationDate, setCreationDate] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [commentError, setcommentError] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_CHECKIN, {
    variables: { id: id },
  });

  const [update_image] = useMutation(UPDATE_IMAGE);
  const [update_comment] = useMutation(UPDATE_COMMENT);
  const [update_title] = useMutation(UPDATE_TITLE);

  useEffect(() => {
    if (!loading && data?.check_in_by_pk) {
      const a = data?.check_in_by_pk;
      setCommentValue(a.comment);
      setCreationDate(a.created_at);

      if (a.image_url === "") {
        setImgUrl("");
      } else {
        setImgUrl(a.image_url);
      }
      setHeadingValue(a.name);
    }
  }, [loading, data]);

  const titleCheck = useCallback(() => {
    if (headingValue.length >= 3) {
      setTitleEdit(false);
      setTitleError(false);
      update_title({ variables: { id: id, name: headingValue } });
    } else {
      setTitleError(true);
    }
  }, [headingValue, id, update_title]);

  const commentCheck = useCallback(() => {
    if (commentValue.length >= 3) {
      setCommentEdit(false);
      setcommentError(false);
      update_comment({
        variables: { id: id, comment: commentValue },
      });
    } else {
      setcommentError(true);
    }
  }, [commentValue, id, update_comment]);

  return (
    <div className={styles.container}>
      <Row className={styles.paddingContainer}>
        <Col span={14} className={styles.imageContainer}>
          {imageEdit && (
            <div className={styles.editContainer}>
              <Input
                value={Imgurl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <Button
                onClick={() => {
                  setImageEdit(false);
                  update_image({
                    variables: { id: id, Imgurl: Imgurl },
                  });
                }}
                type="primary"
                className={styles.editButton}
              >
                save
              </Button>{" "}
            </div>
          )}

          {!imageEdit && (
            <div className={styles.editContainer}>
              <Link href={Imgurl} target="_blank">
                Image Url
              </Link>
              <button
                className={styles.editButtonEnable}
                onClick={() => setImageEdit(true)}
              >
                <Image
                  alt=""
                  className="editbtnpic"
                  src="/btnimg.png"
                  preview={false}
                  width={"12"}
                ></Image>
              </button>
            </div>
          )}
          <Image
            alt="no url"
            width={"100%"}
            preview={false}
            src={Imgurl}
            fallback="data:image/png;base64,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"
          />
        </Col>
        <Col span={9} offset={1}>
          <div>
            {titleEdit && (
              <>
                {" "}
                <Input
                  value={headingValue}
                  onChange={(e) => setHeadingValue(e.target.value)}
                />
                <Button
                  type="primary"
                  onClick={() => {
                    titleCheck();
                  }}
                  className={styles.saveBtn}
                >
                  save
                </Button>{" "}
                {titleError && (
                  <p style={{ color: "red" }}>
                    Minimum 3 characters should be added
                  </p>
                )}
              </>
            )}
            {!titleEdit && (
              <Title level={2}>
                {headingValue ? headingValue : "Checkin Title Goes Here"}
                <button
                  className={styles.editEnableBtn}
                  onClick={() => setTitleEdit(true)}
                >
                  <Image
                    className="editbtnpic"
                    src="/btnimg.png"
                    preview={false}
                    width={"12"}
                  ></Image>
                </button>
              </Title>
            )}
          </div>
          <div>
            {commentEdit && (
              <>
                {" "}
                <Input
                  value={commentValue}
                  onChange={(e) => setCommentValue(e.target.value)}
                />
                <Button
                  type="primary"
                  onClick={() => {
                    commentCheck();
                  }}
                  className={styles.saveBtn}
                >
                  save
                </Button>
                {commentError && (
                  <p style={{ color: "red" }}>
                    Minimum 3 characters should be added
                  </p>
                )}
              </>
            )}
            {commentEdit == false && (
              <Paragraph>
                {commentValue}
                <button
                  className={styles.editEnableBtn}
                  onClick={() => setCommentEdit(true)}
                >
                  <Image
                    className="editbtnpic"
                    src="/btnimg.png"
                    preview={false}
                    width={"12"}
                  ></Image>
                </button>
              </Paragraph>
            )}
          </div>

          {creationDate && (
            <div>
              <Paragraph className={styles.dateDisplay}>
                {format(new Date(creationDate), "dd MMM, yyyy")}
              </Paragraph>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
