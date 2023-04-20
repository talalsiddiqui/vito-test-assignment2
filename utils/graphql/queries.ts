import { gql } from "@apollo/client";

export const GET_CHECK_INS = gql`
  query GetCheckIns {
    check_in {
      name
      id
      image_url
      comment
      created_at
    }
  }
`;

export const GET_CHECKIN = gql`
  query GetCheckin($id: Int!) {
    check_in_by_pk(id: $id) {
      id
      name
      image_url
      comment
      created_at
    }
  }
`;
