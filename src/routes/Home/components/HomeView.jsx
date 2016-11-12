import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './HomeView.scss'

export default class HomeView extends React.Component {
  render () {
    return (
      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={2}
      >
        <TabList>
          <Tab>Foo</Tab>
          <Tab>Bar</Tab>
          <Tab>Baz</Tab>
        </TabList>
        <TabPanel>
          <h2>Hello from Foo</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz</h2>
        </TabPanel>
      </Tabs>
    )
  }
}
