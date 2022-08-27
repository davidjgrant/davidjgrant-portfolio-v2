const HOMEPAGE_GRAHQL_FIELDS = `
  jobTitles
  introPast {
    json
  }
  introFuture {
    json
  }
  portfolioTitle
  blogTitle
  profilePic {
    url
  }
  location
`

const ABOUTPAGE_GRAPHQL_FIELDS = `
  title
  headerDescription
  headerPicture {
    url
  }
  skillsList
  aboutSection {
    json
  }
  featuredTitle
  featuredDescription
`

const CONTACTPAGE_GRAPHQL_FIELDS = `
  title
  shortDescription
  featuredBannerTitle
  featuredBannerText
`

const HOME_PROJECTS_GRAPHQL_FIELDS = `
  slug
  title
  color
  shortDescription
  image {
    url
  }
`

const PROJECT_GRAPHQL_FIELDS = `
  slug
  title
  author {
    name
    profile {
      url
    }
  }
  bodyRichText {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
        }
      }
    }
  }
  featureImage {
    url
  }
  tags
  published
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

function extractHome(fetchResponse) {
  return fetchResponse?.data?.homepageCollection?.items
}

function extractAbout(fetchResponse) {
  return fetchResponse?.data?.aboutPageCollection?.items
}

function extractContact(fetchResponse) {
  return fetchResponse?.data?.contactPageCollection?.items
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
            ${HOME_PROJECTS_GRAPHQL_FIELDS}
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
      portfolioCollection(limit: 4, where: { slug_exists: true }) {
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

export async function getHomepage() {
  const home = await fetchGraphQL(
    `query {
      homepageCollection {
        items {
          ${HOMEPAGE_GRAHQL_FIELDS}
        }
      }
    }`
  );
  return extractHome(home)
}

export async function getAboutPage() {
  const aboutPage = await fetchGraphQL(
    `query {
      aboutPageCollection {
        items {
          ${ABOUTPAGE_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractAbout(aboutPage)
}

export async function getContactPage() {
  const contactPage = await fetchGraphQL(
    `query {
      contactPageCollection {
        items {
          ${CONTACTPAGE_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractContact(contactPage)
}