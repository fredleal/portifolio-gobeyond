import React from "react";
import { Tabs, Tab, Panel } from '@bumaga/tabs' 
import './tablayout.css'
import PostProjetos from "../posts/posts-projetos";



function TabLayout() {

    return (
        <Tabs>
        <div className="tabs">
          <Tab><button className="tab">Projetos</button></Tab>
          <Tab><button className="tab">Certificados</button></Tab>
          <Tab><button className="tab">Referências</button></Tab>
        </div>

        <Panel><PostProjetos /></Panel>
        <Panel><p>To be completed</p></Panel>
        <Panel><p>To be completed</p></Panel>
      </Tabs>
    );
  }

  export default TabLayout; 