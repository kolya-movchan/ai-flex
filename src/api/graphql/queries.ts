import { gql } from "@apollo/client"

export const GET_FULL_USER_DATA = gql`
  query GetUserData($userId: String!) {
    getUserData(userId: $userId) {
      userId
      email
      name
      credits
      role
    }
  }
`

export const GET_CREDITS = gql`
  query GetCredits($userId: String!) {
    getCredits(userId: $userId) {
      balance
      message
    }
  }
`

export const GET_CANDIDATE_SUMMARY = gql`
  query GetCandidateSummary($id: String!) {
    getCandidateSummary(id: $id) {
      createdAt
      id
      userId
      name
      title
      summary
      contact {
        phone
        email
        location
      }
      education {
        degree
        field
        institution
        date
      }
      experience {
        title
        company
        date
        responsibilities
      }
      skills
      tools
      certifications
      languages {
        language
        level
      }
      projects {
        title
        description
        technologies
        url
      }
    }
  }
`

export const GET_ALL_CANDIDATE_ANALYSES = gql`
  query GetAllCandidateAnalyses($userId: String!) {
    getAllCandidateAnalyses(userId: $userId) {
      id
      name
      createdAt
    }
  }
`
