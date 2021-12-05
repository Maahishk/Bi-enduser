/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */

function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  return response.json()
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {Response} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */

async function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  if (response.status === 401) {
    if (window.location.pathname !== '/login') {
      localStorage.clear()
      window.location.replace('/login')
    }
  }
  const error = new Error()
  throw error
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {Response} [options] The options we want to pass to "fetch"
 *
 * @return {any}           The response data
 */

interface RequestProps {
  url: string
  options: any
}

const request = (props: RequestProps) => {
  const isAppUrl = /^\//.test(props.url)
  if (isAppUrl) {
    return fetch(`http://localhost:3004${props.url}`, props.options)
      .then(checkStatus)
      .then(parseJSON)
  }

  if (props.options['Content-Type'] === 'text/html') {
    return fetch(props.url, props.options).then((response) => response.text())
  }
  return fetch(props.url, props.options).then(parseJSON)
}

export default request
