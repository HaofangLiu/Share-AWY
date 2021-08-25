import common from "../res/common.svg";
import music from "../res/music.svg";
import video from "../res/video.svg";
import file from "../res/file.svg";
import { message } from "antd";

export const getPreviewImage = (urlObj) => {
  const picArr = ["jpg", "png", "svg"];
  const fileArr = ["docx", "doc", "ppt", "wps", "pdf", "xlsx"];
  const musicArr = ["mp3", "wma", "aac"];
  const videoArr = ["mp4", "mpeg", "avi"];

  const fileExt = getFileExtend(urlObj.attributes.name);
  switch (true) {
    case picArr.includes(fileExt):
      return urlObj.attributes.url;
    case fileArr.includes(fileExt):
      return file;
    case musicArr.includes(fileExt):
      return music;
    case videoArr.includes(fileExt):
      return video;
    default:
      return common;
  }
};

export const copyToClip = (str) => {
  navigator.clipboard.writeText(str).then(
    function () {
      message.success("copy to your clipboard success!");
    },
    function (err) {
      message.error("copy error!");
    }
  );
};

const getFileExtend = (str) => str.split(".").pop().toLowerCase();
