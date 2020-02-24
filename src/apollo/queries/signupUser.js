import { gql } from "apollo-boost";

const SIGNUP_USER = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      email
    }
  }
`;

export { SIGNUP_USER };
