module.exports = renderError = (code, message) => {
  return {
    statusCode: code || 500,
    headers: { 'Content-Type': 'text/plain' },
    body: message
  }
}
