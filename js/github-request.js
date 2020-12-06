class Github {
  constructor() {
    this.clientID = "c5f27ed64fc216574413";
    this.clientSecret = " 12ae3f874795130455c25fe61466a34146c6fe87";
  }

  async getClientInfo (client) {
    const profileRes = await fetch(`https://api.github.com/users/${client}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

    const profile = await profileRes.json();

    return {
      profile
    }
  }
}
