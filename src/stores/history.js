import { makeObservable, observable, action, runInAction } from "mobx";
import { Upload } from "../models";
import { message } from "antd";

class HistoryStore {
  isLoading = false;
  fileList = [];
  currentPage = 0;
  hasMore = true;
  limit = 10;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      fileList: observable,
      currentPage: observable,
      hasMore: observable,
      appenToCurrenList: action,
      findList: action,
      reset: action,
    });
  }

  reset() {
    this.isLoading = false;
    this.fileList = [];
    this.currentPage = 0;
    this.hasMore = true;
  }

  appenToCurrenList(newList) {
    this.fileList = this.fileList.concat(newList);
  }

  findList() {
    this.isLoading = true;
    Upload.find({ page: this.currentPage, limit: this.limit })
      .then((res) => {
        runInAction(() => {
          this.appenToCurrenList(res);
          this.currentPage++;
          if (res.length < this.limit) {
            this.hasMore = false;
          }
        });
      })
      .catch((e) => {
        message.error("loading failed");
      })
      .finally(() => {
        runInAction(() => {
          this.isLoading = false;
        });
      });
  }
}

export default HistoryStore;
