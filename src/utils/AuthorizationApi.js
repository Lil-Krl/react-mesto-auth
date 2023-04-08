class AuthorizationApi {
  constructor(authorizationUrl) {
    this._authorizationUrl = authorizationUrl
  }
  _processingServerResponse(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`код ошибки: ${res.status}`)
    }
  }

  tokenVerification(token) {
    return fetch(`${this._authorizationUrl}users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._processingServerResponse)
  }

  userAuthorization(password, email) {
    return fetch(`${this._authorizationUrl}signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    }).then(this._processingServerResponse)
  }

  userRegistration(password, email) {
    return fetch(`${this._authorizationUrl}signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    }).then(this._processingServerResponse)
  }
}

const apiAuthorization = new AuthorizationApi("https://auth.nomoreparties.co/")

export default apiAuthorization