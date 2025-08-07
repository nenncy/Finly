// src/graphql/mutations.ts
import { gql } from '@apollo/client';

export const ADD_INCOME = gql`
  mutation AddIncome(
    $title: String!
    $amount: Float!
    $date: String!
    $notes: String
    $category_id: Int
  ) {
    addIncome(
      title: $title
      amount: $amount
      date: $date
      notes: $notes
      category_id: $category_id
    ) {
      id
      title
      amount
      date
      notes
      category_id
      created_at
    }
  }
`;


