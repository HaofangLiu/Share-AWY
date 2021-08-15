import AV, { User } from "leancloud-storage";

AV.init({
  appId: "hcF8bWQ68nG85EYEXBV5zKnD-MdYXbMMI",
  appKey: "zRzygxnrKphnXSIM4Tweq0AN",
});

export const Auth = {
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

export const Upload = {
  uploadFile(file, fileName) {
    const item = new AV.Object("Image");
    const fileAv = new AV.File(fileName, file);
    item.set("filename", fileName);
    item.set("owner", AV.User.current());
    item.set("url", fileAv);
    return new Promise((resolve, reject) => {
      item.save().then(
        (serverFile) => {
          resolve(serverFile);
        },
        (e) => {
          reject(e);
        }
      );
    });
  },

  find({ page = 0, limit = 10 }) {
    // show all user upload files
    const query = new AV.Query("Image");
    query.include("owner");
    query.limit(limit);
    query.skip(page * limit);
    query.equalTo("owner", AV.User.current());
    query.descending("createdAt");
    return new Promise((resolve, reject) => {
      query
        .find()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

window.Upload = Upload;
