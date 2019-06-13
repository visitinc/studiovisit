const devMode = (process.env.NODE_ENV !== 'development');

export const APP_NAME = 'Studio Visit'
export const DEV = devMode
// Google Analytics - uses a 'dev' account while we're testing
export const GA_TRACKING_ID = (devMode) ? 'UA-84284256-2' : 'UA-84284256-1'
export const APP_COLOR = '#2929fa'
export const SERVICE_ROOT = 'https://studiovisit-prototype.appspot.com'
export const API_ROOT = SERVICE_ROOT + '/api'
export const OAUTH_ROOT = SERVICE_ROOT + '/o'
// the client id / client secret identify the oauth 2 client "application"
// (in this case, the native app)...they aren't actually a secret
export const CLIENT_ID = 'raYYGhiODJYqi0sJIYyuT4nm0k1BHipprSlG2d7Z'
export const CLIENT_SECRET = 'trj7hCyvxYrl8d4oOX5T6qGSbyZQbBjsK5QM3OlqCWihGZWTpsOr9XBiXD4FwrWvLWV1M6o5cuC75uYr6j65AQHG3MxVB8MwXaHcu63YT9O3fakYCpWYPx19pCl4CMZw'
