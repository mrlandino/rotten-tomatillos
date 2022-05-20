describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should load main page with title', () => {
    cy.get('nav').find('h1').contains('Rotten')
    cy.get('nav').find('h2').contains('Tomatillos')
  })

  it('should load main page with footer', () => {
    cy.get('footer').find('small').contains('Copywrite 2022 Rotten Tomatillos')
    cy.get('footer').find('small').contains('Created by: Ross Landino and Zach Saile')
  })

  it('should load main page by fetching all movie posters with movie titles', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'dataMovies'}).as('dataMovies')
    cy.get('.movie').should('have.length', 40)
    cy.get('main').children('div').contains('Mulan')
    cy.get('main').children('div').contains('Braveheart').should('not.exist')
  })

  it('should be able to click on a poster and be taken to that movies details page', () => {
    cy.get('.movie').first().click()
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {fixture: 'movie'}).as('movie')
  })
})

describe('Movie Details', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('.movie').first().click()
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {fixture: 'movie'}).as('movie')
  })

  it('should load details page with title and home button', () => {
    cy.get('nav').find('h1').contains('Rotten')
    cy.get('nav').find('h2').contains('Tomatillos')
    cy.get('nav').find('button').contains('HOME')
  })

  it('should display all movie details', () => {
    cy.get('.title').contains('Money Plane')
    cy.get('.poster').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI')
    cy.get('.overview').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
    cy.get('.below-tag').contains('2020 | Action | 82 min | 6.9')
    cy.get('iframe').should('have.attr', 'src').should('include', 'http://www.youtube.com/embed/aETz_dRDEys')
  })

  it('should have a home button that brings you back to main page', () => {
    cy.get('button').click()
    cy.get('nav').find('h1').contains('Rotten')
    cy.get('nav').find('h2').contains('Tomatillos')
    // cy.get('nav').find('h1').contains('Rotten')
    // cy.get('nav').find('h2').contains('Tomatillos')
    cy.get('.movie').should('have.length', 40)
    cy.get('main').children('div').contains('Mulan')
    cy.get('button').should('not.exist');
  })

  // it.only("should return an error message if api call fails", () => {
  //   cy.intercept(
  // {
  //   method: 'GET',
  //   url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
  //   hostname: 'localhost'
  // })
  // cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
  //   statusCode: 404
  // })
  // cy.get('main').find('h3').contains("Something went wrong, Please try again later.")
  // })
})
