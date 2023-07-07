class AccessToken {
  private accessToken: string;

  constructor() {
    this.accessToken = "";
  }

  getAccessToken() {
    return this.accessToken;
  }
  setAccessToken(newAccessToken: string) {
    this.accessToken = newAccessToken;
    return;
  }

  resetAccessToken() {
    this.accessToken = "";
    return
  }
}

const accessToken = new AccessToken();
export default accessToken;
