import { UnorderedListOutlined, InfoOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React, { useState } from 'react';
import locationIcon from '../../assessts/images/locationIcon.png';
import FirstTab from '../firstTab/FirstTab';
import SecondTab from '../secondTab/SecondTab';
import './MainTab.css';
const { TabPane } = Tabs;

const MainTab = () => {

    return (
        <Tabs defaultActiveKey="1" animated centered>
            <TabPane
                tab={
                    <span>
                        <img src={locationIcon} className="mainTabFirstIcon" alt="location" />
                        NEAR BY BANKS
                    </span>
                }
                key="1"
            >
                <FirstTab
                />
            </TabPane>
            <TabPane
                tab={
                    <span>
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjZmYwMDFiIj4KICA8cGF0aCBkPSJtMjM3LjI3IDI5OC43M2gyNzcuNDdjOS44MjgxIDAgMTcuODI0LTcuOTk2MSAxNy44MjQtMTcuODI0bDAuMDAzOTA2LTI4LjEzM2MwLTkuODI4MS03Ljk5NjEtMTcuODI4LTE3LjgyNC0xNy44MjhoLTI3Ny40N2MtOS44MjgxIDAtMTcuODI0IDcuOTk2MS0xNy44MjQgMTcuODI4djI4LjEzM2MwIDkuODI4MSA3Ljk5NjEgMTcuODI0IDE3LjgyNCAxNy44MjR6Ii8+CiAgPHBhdGggZD0ibTIzNy4yNyA0MDcuODloMjc3LjQ3YzkuODI4MSAwIDE3LjgyNC03Ljk5NjEgMTcuODI0LTE3LjgyOHYtMjguMTI5YzAtOS44MzItNy45OTYxLTE3LjgyOC0xNy44MjQtMTcuODI4bC0yNzcuNDcgMC4wMDM5MDZjLTkuODI4MSAwLTE3LjgyNCA3Ljk5NjEtMTcuODI0IDE3LjgyOHYyOC4xMjljMCA5LjgyODEgNy45OTYxIDE3LjgyNCAxNy44MjQgMTcuODI0eiIvPgogIDxwYXRoIGQ9Im0yMzcuMjcgNTE3LjA2aDI3Ny40N2M5LjgyODEgMCAxNy44MjQtNy45OTYxIDE3LjgyNC0xNy44Mjh2LTI4LjEzM2MwLTkuODI4MS03Ljk5NjEtMTcuODI0LTE3LjgyNC0xNy44MjRoLTI3Ny40N2MtOS44MjgxIDAtMTcuODI0IDcuOTk2MS0xNy44MjQgMTcuODI0djI4LjEzM2MwIDkuODI4MSA3Ljk5NjEgMTcuODI4IDE3LjgyNCAxNy44Mjh6Ii8+CiA8L2c+Cjwvc3ZnPgo="
                            className='mainTabSecondIcon' alt="list"
                        />
                        BANKS SELECTED
                    </span>
                }
                key="2"
            >
                <SecondTab
                />
            </TabPane>
        </Tabs>
    );
}
export default MainTab;