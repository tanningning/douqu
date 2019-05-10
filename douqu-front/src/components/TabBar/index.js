import React from 'react'
import { TabBar } from 'antd-mobile';

class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'recommendTab',
        };
    }

    renderContent(key) {
        switch (key) {
        case 'recommend':
            return (
                <div style={{
                    backgroundColor: 'white',
                    height: '100%',
                    textAlign: 'center'
                }}>
            <div>推荐</div>
      </div>
            );
            break;
        case 'douqu':
            return (
                <div style={{
                    backgroundColor: 'white',
                    height: '100%',
                    textAlign: 'center'
                }}>
            <div>逗趣</div>
      </div>
            );
            break;
        case 'add':
            return (
                <div style={{
                    backgroundColor: 'white',
                    height: '100%',
                    textAlign: 'center'
                }}>
            <div>新增</div>
      </div>
            );
            break;
        case 'discovery':
            return (
                <div style={{
                    backgroundColor: 'white',
                    height: '100%',
                    textAlign: 'center'
                }}>
            <div>发现</div>
      </div>
            );
            break;
        case 'my':
            return (
                <div style={{
                    backgroundColor: 'white',
                    height: '100%',
                    textAlign: 'center'
                }}>
            <div>我的</div>
      </div>
            );
            break;

        }


    }

    render() {
        return (
            <div style={{
                position: 'fixed',
                height: '100%',
                width: '100%',
                top: 0
            }}>
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#ea4b95"
            barTintColor="white"
            >
          <TabBar.Item
            title="推荐"
            key="recommend"
            icon={<div className="iconfont iconzhuye" style={{
                width: '22px',
                height: '22px',
            }}
            />
            }
            selectedIcon={<div className="iconfont iconzhuye" style={{
                width: '22px',
                height: '22px',
                color: '#ea4b95',
            }}
            />
            }
            selected={this.state.selectedTab === 'recommendTab'}
            onPress={() => {
                this.setState({
                    selectedTab: 'recommendTab',
                });
            }}
            data-seed="logId"
            >
            {this.renderContent('recommend')}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="iconfont iconmenu" style={{
                width: '22px',
                height: '22px',
            }}
            />
            }
            selectedIcon={<div className="iconfont iconmenu" style={{
                width: '22px',
                height: '22px',
                color: '#ea4b95',
            }}
            />
            }
            title="逗趣"
            key="douqu"
            selected={this.state.selectedTab === 'douquTab'}
            onPress={() => {
                this.setState({
                    selectedTab: 'douquTab',
                });
            }}
            data-seed="logId1"
            >
            {this.renderContent('douqu')}
          </TabBar.Item>
            <TabBar.Item
            icon={<div className="iconfont iconxinzeng" style={{
                color: '#ea4b95',
                fontSize: '32px',
            }}
            />
            }
            selectedIcon={<div className="iconfont iconxinzeng" style={{
                fontSize: '32px',
                color: '#ea4b95',
            }}
            />
            }
            key="add"
            selected={this.state.selectedTab === 'addTab'}
            onPress={() => {
                this.setState({
                    selectedTab: 'addTab',
                });
            }}
            data-seed="logId1"
            >
            {this.renderContent('add')}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="iconfont iconfaxian" style={{
                width: '22px',
                height: '22px',
            }}
            />
            }
            selectedIcon={<div className="iconfont iconfaxian" style={{
                width: '22px',
                height: '22px',
                color: '#ea4b95',
            }}
            />
            }
            title="发现"
            key="discovery"
            selected={this.state.selectedTab === 'discoveryTab'}
            onPress={() => {
                this.setState({
                    selectedTab: 'discoveryTab',
                });
            }}
            >
            {this.renderContent('discovery')}
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="iconfont iconwode" style={{
                width: '22px',
                height: '22px',
            }}
            />
            }
            selectedIcon={<div className="iconfont iconwode" style={{
                width: '22px',
                height: '22px',
                color: '#ea4b95',
            }}
            />
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'myTab'}
            onPress={() => {
                this.setState({
                    selectedTab: 'myTab',
                });
            }}
            >
            {this.renderContent('my')}
          </TabBar.Item>
        </TabBar>
      </div>
        );
    }
}

export default TabBarExample