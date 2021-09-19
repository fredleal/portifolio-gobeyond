import React from "react";
import { Tabs, Tab, Panel } from '@bumaga/tabs' 
import './tablayout.css'



function TabLayout() {

    return (
        <Tabs>
        <div className="tabs">
          <Tab><button className="tab">Projetos</button></Tab>
          <Tab><button className="tab">Certificados</button></Tab>
          <Tab><button className="tab">Referências</button></Tab>
        </div>

        <Panel><p>Panel 1</p></Panel>
        <Panel><p>Panel 2</p></Panel>
        <Panel><p>Panel 3</p></Panel>
      </Tabs>
    );
  }

  export default TabLayout; 