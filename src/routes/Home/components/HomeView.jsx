import React from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import './HomeView.scss'
import sampleImage from "../assets/Duck.jpg"
import Dropdown from 'react-dropdown'

const options1 = [
  'Lativ', 'Zara', 'Hangten'
]
const options2 = [
  'Men', 'Women', 'both'
]
const options3 = [
  'on sale', 'normal'
]
const defaultOption1 = options1[0]
const defaultOption2 = options2[0]
const defaultOption3 = options3[0]


export default class HomeView extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/*left side colume*/}
          <div className="col-sm-6 col-xs-12 inner-container">

            <div className="block">
              <div className="title">服飾商店</div>
              <hr ></hr>

              {/*dropdown*/}
              <div className="row">
                <div className="col-sm-4">
                  <Dropdown options={options1} onChange={this._onSelect} value={defaultOption1}
                            placeholder="Select an option"/>
                </div>
                <div className="col-sm-4">
                  <Dropdown options={options2} onChange={this._onSelect} value={defaultOption2}
                            placeholder="Select an option"/>
                </div>
                <div className="col-sm-4">
                  <Dropdown options={options3} onChange={this._onSelect} value={defaultOption3}
                            placeholder="Select an option"/>
                </div>
              </div>

              {/*Tabs*/}
              <div className="tab-area">
                <Tabs
                  onSelect={this.handleSelect}
                  selectedIndex={0}
                >
                  <TabList>
                    <Tab>T-Shirt & 上衣</Tab>
                    <Tab>針織衫 & 襯衫</Tab>
                    <Tab>外套 & 大衣</Tab>
                    <Tab>褲裝 & 裙裝</Tab>
                    <Tab>其他</Tab>
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
              </div>


            </div>


            {/*---------------------------------*/}
            <div className="block">
              <div className="title">個人服飾</div>
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
              <div className="title">服飾商店</div>
              <hr ></hr>
            </div>

          </div>
        </div>
      </div>


    )
  }
}
