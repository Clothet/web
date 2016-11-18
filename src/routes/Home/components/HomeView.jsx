import React from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import './HomeView.scss'
import sampleImage from "../assets/Duck.jpg"
import Dropdown from 'react-dropdown'

const options = [
  'one', 'two', 'three'
]
const defaultOption = options[0]


export default class HomeView extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/*left side colume*/}
          <div className="col-sm-6 col-xs-12 inner-container">

            <div className="block">
              <div className="title">裝備商店</div>
              <hr ></hr>
              <div className="row">
                <div className="col-sm-4">
                  <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                            placeholder="Select an option"/>
                </div>
                <div className="col-sm-4">
                  <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                            placeholder="Select an option"/>
                </div>
                <div className="col-sm-4">
                  <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                            placeholder="Select an option"/>
                </div>
              </div>
            </div>

            <Tabs
              onSelect={this.handleSelect}
              selectedIndex={0}
            >
              <TabList>
                <Tab className="GGYYh  ">Foo</Tab>
                <Tab>Bar</Tab>
                <Tab>Baz</Tab>
                <Tab>Baz</Tab>
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

            {/*---------------------------------*/}
            <div className="block">
              <div className="title">個人裝備</div>
              <hr ></hr>
            </div>


          </div>


          {/*right side colume*/}
          <div className="col-sm-6 col-xs-12 inner-container">

            <div className="block">
              <div className="row">
                <div className="col-sm-4 col-xs-12">
                  <img src={sampleImage}/>
                </div>
                <div className="col-sm-8 col-xs-12">
                  <div>aaaaaaaaaa</div>
                </div>
              </div>
            </div>

            <div className="block">
              <div className="title">裝備商店</div>
              <hr ></hr>
            </div>

          </div>
        </div>
      </div>


    )
  }
}
