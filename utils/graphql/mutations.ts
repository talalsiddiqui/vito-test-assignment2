import { gql } from "@apollo/client";

export const UPDATE_IMAGE = gql`
  mutation MyMutation($id: Int!, $Imgurl: String!) {
    update_check_in_by_pk(
      pk_columns: { id: $id }
      _set: { image_url: $Imgurl }
    ) {
      id
      name
      image_url
    }
  }
`;
export const UPDATE_COMMENT = gql`
  mutation MyMutation($id: Int!, $comment: String!) {
    update_check_in_by_pk(
      pk_columns: { id: $id }
      _set: { comment: $comment }
    ) {
      id
      name
      image_url
    }
  }
`;
export const UPDATE_TITLE = gql`
  mutation MyMutation($id: Int!, $name: String!) {
    update_check_in_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
      image_url
    }
  }
`;
