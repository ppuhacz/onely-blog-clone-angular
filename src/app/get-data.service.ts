import { Injectable } from '@angular/core';
import { request, gql } from 'graphql-request';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  data: any = null;
  loading: boolean = true;
  apiUrl =
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clcozcwgx0lbo01uneoby69s1/master';

  ASSETS_QUERY = gql`
    query Assets {
      authors {
        name
        title
        description
        slug
        picture {
          url
        }
        posts {
          slug
          title
          coverImage {
            url
          }
          date
        }
        question1 {
          ... on QuestionTemplate {
            question
            answer
          }
        }
        question2 {
          ... on QuestionTemplate {
            question
            answer
          }
        }
        question3 {
          ... on QuestionTemplate {
            question
            answer
          }
        }
        question4 {
          ... on QuestionTemplate {
            question
            answer
          }
        }
        socialMedia {
          ... on SocialMedia {
            instagram
            linkedIn
            twitter
          }
        }
      }
      categories {
        categoryName
        slug
        posts(orderBy: date_DESC) {
          author {
            name
            slug
            socialMedia {
              ... on SocialMedia {
                instagram
                linkedIn
                twitter
              }
            }
            title
            picture {
              url
            }
          }
          category {
            categoryName
          }
          content {
            raw
          }
          coverImage {
            url
          }
          date
          excerpt
          slug
          title
          recommendedPost
        }
      }
      pages {
        content {
          raw
        }
        slug
        title
        subtitle
      }
      posts(orderBy: date_DESC) {
        author {
          name
          slug
          socialMedia {
            ... on SocialMedia {
              instagram
              linkedIn
              twitter
            }
          }
          title
          picture {
            url
          }
        }
        category {
          categoryName
        }
        content {
          raw
        }
        coverImage {
          url
        }
        date
        excerpt
        slug
        title
        recommendedPost
      }
    }
  `;

  async fetchData() {
    try {
      const response = await request(this.apiUrl, this.ASSETS_QUERY);
      this.data = response;
      this.loading = false;
    } catch (error) {
      console.error('Error fetching data:', error);
      this.loading = false;
    }
  }
}
