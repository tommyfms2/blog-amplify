import React from 'react'
import './App.css';
import DisplayPosts from './components/DisplayPosts';
import CreatePost from './components/CreatePost';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      < CreatePost />
      < DisplayPosts />
    </div>
  );
}

export default withAuthenticator(App);
