import React from 'react';
import { View } from 'react-native';
import { IndexBar, Tabs, Cell } from 'rn-vant';

const indexList: string[] = [];
const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const charCodeOfA = 'A'.charCodeAt(0);

for (let i = 0; i < 26; i += 1) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}

const IndexBarExample = () => {
  return (
    <Tabs>
      <Tabs.TabPane title="基础用法">
        <IndexBar>
          {indexList.map(item => (
            <View key={item}>
              <IndexBar.Anchor index={item} />
              <Cell title="文本" />
              <Cell title="文本" />
              <Cell title="文本" />
            </View>
          ))}
        </IndexBar>
      </Tabs.TabPane>
      <Tabs.TabPane title="自定义索引列表">
        <IndexBar indexList={customIndexList}>
          {customIndexList.map(item => (
            <View key={item}>
              <IndexBar.Anchor index={item}>标题 {item}</IndexBar.Anchor>
              <Cell title="文本" />
              <Cell title="文本" />
              <Cell title="文本" />
            </View>
          ))}
        </IndexBar>
      </Tabs.TabPane>
    </Tabs>
  );
};

export default IndexBarExample;
