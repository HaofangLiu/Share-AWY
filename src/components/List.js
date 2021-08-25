import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import useStore from "../stores";
import { Button, List, Avatar, Skeleton } from "antd";
import { getPreviewImage, copyToClip } from "../util/common-utils";

const UploadList = observer(() => {
  const { HistoryStore } = useStore();
  const [initloading, setInitLoading] = useState(true);

  const handleInfiniteOnLoad = () => {
    HistoryStore.findList();
  };

  useEffect(() => {
    setInitLoading(false);
    HistoryStore.findList();
    return () => {
      HistoryStore.reset();
    };
  }, [HistoryStore]);

  const loadMore =
    !initloading && !HistoryStore.isLoading && HistoryStore.hasMore ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={handleInfiniteOnLoad}>loading more</Button>
      </div>
    ) : null;

  return (
    <div>
      {/* {console.log(HistoryStore.isLoading)} */}
      <List
        itemLayout="horizontal"
        dataSource={HistoryStore.fileList}
        loadMore={loadMore}
        renderItem={(item) => {
          return (
            <Skeleton avatar title={false} loading={initloading} active>
              <List.Item
                key={item.id}
                actions={[
                  <Button type="link" href={item.attributes.url.attributes.url}>
                    open
                  </Button>,
                  <Button
                    type="link"
                    onClick={() =>
                      copyToClip(item.attributes.url.attributes.url)
                    }
                  >
                    copy to clipboard
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={getPreviewImage(item.attributes.url)} />}
                />
                <div>
                  <h5>{item.attributes.filename}</h5>
                </div>
              </List.Item>
            </Skeleton>
          );
        }}
      ></List>
    </div>
  );
});

export default UploadList;
