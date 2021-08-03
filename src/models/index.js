import AV, { User } from "leancloud-storage";

AV.init({
  appId: "dcVwYNYN5tuj9JkOX87Mk5JY-gzGzoHsz",
  appKey: "cgWXFJb5yyV5F9pVIekL2TMV",
  serverURL: "https://dcvwynyn.lc-cn-n1-shared.com",
});

const Auth = {
  register(username, password, email) {
    let user = new User();
    user.setUsername(username);
    user.setPassword(password);
    user.setEmail(email);
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

  logout() {
    User.logOut();
  },

  getCurrentUser() {
    return User.current();
  },
};

export default Auth;
