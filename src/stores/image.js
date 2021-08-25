import { makeObservable, observable, action, runInAction } from "mobx";
import { Upload } from "../models";

class ImageStore {
  fileName = "";
  file = null;
  isUploading = false;
  serverFile = null;

  constructor() {
    makeObservable(this, {
      fileName: observable,
      file: observable,
      isUploading: observable,
      serverFile: observable,
      setFileName: action,
      setFile: action,
      uploadFile: action,
      clearServerFile: action,
    });
  }

  setFileName(name) {
    this.fileName = name;
  }

  setFile(file) {
    this.file = file;
  }

  uploadFile() {
    this.isUploading = true;
    this.serverFile = null;
    return new Promise((resolve, reject) => {
      Upload.uploadFile(this.file, this.fileName)
        .then((uploadedFile) => {
          runInAction(() => {
            this.serverFile = uploadedFile;
          });
          resolve(uploadedFile);
        })
        .catch((e) => {
          reject(e);
        })
        .finally(() => {
          runInAction(() => {
            this.isUploading = false;
          });
        });
    });
  }

  clearServerFile() {
    this.serverFile = null;
  }
}

export default ImageStore;
