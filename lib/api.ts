const PROJECT_GRAPHQL_FIELDS = `
slug
title
`

async function fetchGraphQL(query) {
  return (fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    }
  ).then((response) => response.json()))
}

function extractProject(fetchResponse) {
  return fetchResponse?.data?.portfolioCollection?.items?.[0]
}

function extractProjects(fetchResponse) {
  return fetchResponse?.data?.portfolioCollection?.items
}

export async function getAllProjectsForHome() {
  const projects = await fetchGraphQL(
    ` query {
        portfolioCollection {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }
    `
  )
  return extractProjects(projects)
}

export async function getAllProjectsWithSlug() {
  const projects = await fetchGraphQL(
    `query {
      portfolioCollection(where: { slug_exists: true }) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractProjects(projects);
}

export async function getProjectAndMore(slug) {
  const project = await fetchGraphQL(
    `query {
      portfolioCollection(where: { slug: "${slug}" } limit: 1) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  const projects = await fetchGraphQL(
    `query {
      portfolioCollection(where: { slug_not_in: "${slug}" } limit: 2) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return {
    project: extractProject(project),
    moreProjects: extractProjects(projects)
  }
}