import AV, { Query, User } from "leancloud-storage";

AV.init({
  appId: "BPciOgpkG9r5XVoHijuaBo22-9Nh9j0Va",
  appKey: "3xri4nKOQqWFytYqzhHEfffu",
  serverURL: "https://please-replace-with-your-customized.domain.com",
});

const Auth = {
  register(username, password) {
    let user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.signUp().then(
        (newUser) => resolve(newUser),
        (err) => reject(err)
      );
    });
  },

  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(
        (user) => resolve(user),
        (err) => reject(err)
      );
    });
  },

  logout(){
      User.logOut();
  }
};
