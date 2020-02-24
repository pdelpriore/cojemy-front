import { gql } from "apollo-boost";

const signupUser = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      email
    }
  }
`;

export { signupUser };
