import { observer } from "mobx-react";
import React, { useEffect } from "react";
import useStore from "../stores";
import InfiniteScroll from "react-infinite-scroller";
import { List, Spin } from "antd";
import styled from "styled-components";

const Img = styled.img`
  width: 100px;
  height: 120px;
  object-fit: contain;
  border: 1px solid #eee;
`;

const UploadList = observer(() => {
  const { HistoryStore } = useStore();

  const handleInfiniteOnLoad = () => {
    HistoryStore.findList();
  };

  useEffect(() => {
    return () => {
      HistoryStore.reset();
    };
  }, [HistoryStore]);

  return (
    <div>
      <InfiniteScroll
        initialLoad={true}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}
        useWindow={true}
      >
        <List
          dataSource={HistoryStore.fileList}
          renderItem={(item) => {
            console.log(item);
            return (
              <List.Item key={item.id}>
                <div>
                  <Img src={item.attributes.url.attributes.url} />
                </div>
                <div>
                  <h5>{item.attributes.filename}</h5>
                </div>
                <div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={item.attributes.url.attributes.url}
                  >
                    {item.attributes.url.attributes.url}
                  </a>
                </div>
              </List.Item>
            );
          }}
        >
          {HistoryStore.isLoading && HistoryStore.hasMore && <Spin />}
        </List>
      </InfiniteScroll>
    </div>
  );
});

export default UploadList;
