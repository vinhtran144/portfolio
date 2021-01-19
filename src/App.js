import './App.css';
import React, {useEffect, useState} from 'react';
import Nav from './components/Navbar';
import Content from './components/PageContent';

function App() {
  const [tabs] = useState([
    {name: 'About'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'Resume'}
  ])

  const [tab, setTab] = useState(tabs[0]);
  const [viewTab,setVisible] = useState(true);

  useEffect(()=>{
    document.title = tab.name;
    setVisible(true);
  },[tab]);
  
  return (
    <div className="App-header">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
      <Nav tabs ={tabs} setVisible={setVisible} currentTab={tab} setTab={setTab}/>
      <Content viewTab ={viewTab} currentTab={tab} />
    </div>
  );
}

export default App;
