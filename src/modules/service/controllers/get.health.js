import HttpStatus from 'http-status';

/**
 * the health controller serves as a ping healthcheck to always respond with HTTP 200
 * for all calls made to it to represent it is up and functional
 */
export function getHealth(request, response) {
 return response.status(HttpStatus.OK).send();
}