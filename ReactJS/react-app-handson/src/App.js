import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/01.functionalComponent'
import Welcome from './components/02.classComponents'
import Message from './components/03.state'
import Counter from './components/04.setState'
import {KnowDesignation,KnowExpectedDesignation} from './components/05.destructuringInFunctionalComponent'
import MouseClick from './components/06.functionClick';
import EventBinding from './components/07.eventBind';
import ParentComponent from './components/08.methodsAsProps';
import UserGreeting from './components/09.conditionalRendering';
import NameList from './components/10.listRendering';
import Stylesheets from './components/11.stylesheets';
import Form from './components/12.Form';
import LifeCycleA from './components/14.LifeCycleA';
import FragmentDemo from './components/15.fragmentDemo';
import Table from './components/15.table';
import PureComp from './components/16.PureComponent';
import ParentComp from './components/16.ParentComponent'
import RefsDemo from './components/18.RefsDemo';
import FocusInput from './components/19.FocusInput';
import FRParentInput from './components/20.forwardRefParentInput';
import PortalDemo from './components/21.portalDemo';
import Hero from './components/22.hero';
import ErrorBoundary from './components/22.ErrorBoundary';
import ClickCounter from './components/23.clickCounter'
import HoverCounter from './components/23.hoverCounter';
import ClickCounterProps from './components/24.clickCounterProps';
import HoverCounterProps from './components/24.hoverCounterProps';
import CounterProp from './components/24.counter';
import ComponentC from './components/25.componentC';
import { UserProvider } from './components/25.userContext';
import Calculator from './components/26.LiftingStateUp';
import { SplitPaneComponent, WelcomeDialog } from './components/27.CompositionVsInheritance_Containment';
import SignUpDialog from './components/27.CompositionVsInheritance_Specialization';
import CodeSplitting from './components/28.codeSplitting';
import WhenToUseContext from './components/ContextAPI/01.WhenToUseContext';
import {DirtyPage} from './components/ContextAPI/02.CanUseContext'
import { GoodPage } from './components/ContextAPI/03.ShouldNotUseContextButThis';
import DynamicComponentApp from './components/ContextAPI/DynamicContext/app';
import UpdaingContextFromANestedComponent from './components/ContextAPI/UpdatingContextFromANestedComponent/app';
import ConsumingMultipleContexts from './components/ContextAPI/ConsumingMultipleContexts/app';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bibhuti"/> */}
      {/* 
      <Welcome name="Bibhuti" role="Backend Engineer">
        <p>The technologies I'm working on are Java,MongoDB</p>
      </Welcome> 
      */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <KnowDesignation name="Bibhuti" designation="Backend Engineer" /> */}
      {/* <KnowExpectedDesignation name="Bibhuti" designation="Full-stack Engineer" /> */}
      {/* <MouseClick></MouseClick> */}
      {/* <EventBinding /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheets primary={true}/> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table />  */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary> */}
      {/* <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary> */}
      {/* <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <ClickCounter name='Button' /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounterProps /> */}
      {/* <HoverCounterProps /> */}
      {/* 
      <CounterProp 
        render={(count,incrementCount)=>(
          <ClickCounterProps count={count} incrementCount={incrementCount} />
        )} 
      />
      <CounterProp
        render={(count,incrementCount)=>(
          <HoverCounterProps count={count} incrementCount={incrementCount} />
        )} 
      /> 
      */}
      
      {/* Step 2: Provide a context value */}
      {/* 
      <UserProvider value="Bibhuti">
        <ComponentC />
      </UserProvider> 
      */}
      {/* <Calculator /> */}
      {/* <WelcomeDialog /> */}
      {/* <SplitPaneComponent /> */}
      {/* <SignUpDialog /> */}
      {/* <CodeSplitting /> */}
      {/* <WhenToUseContext /> */}
      {/* <DirtyPage user="Bibhuti" avatarSize="10"/> */}
      {/* <GoodPage user="Bibhuti" avatarSize="11"/> */}
      {/* <DynamicComponentApp /> */}
      {/* <UpdaingContextFromANestedComponent /> */}
      {/* <ConsumingMultipleContexts signedInUser="Bibhuti" theme="dark"/> */}
    </div>
  );
}

export default App;
