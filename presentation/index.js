// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  // primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>

          <Slide bgColor="primary">
            <Heading size={1}>
              The Journey to Tradie
            </Heading>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={3}>
              Problem(s)
            </Heading>
          </Slide>

          <Slide notes="We're not just writing static pages anymore, we're writing apps. Apps have complex user interactions that require much more code. We've learnt that performance means $$ and building Progressive Web Applications adds additional complexity.">
            <Heading size={3}>
              The frontend isn't simple anymore
            </Heading>
          </Slide>

          <Slide notes="There are lots of tasks to setup and to get working together. There's so many different tools to choose from - each tool is their own unique snowflake and comes with all their own bugs and best practice to choose from.">
            <Heading size={3}>
              Setting up a new frontend project is hard!
            </Heading>
            <Appear>
              <List>
                <ListItem>Linting</ListItem>
                <ListItem>Transpilation</ListItem>
                <ListItem>Bundling</ListItem>
                <ListItem>Post-Processing</ListItem>
                <ListItem>Minification</ListItem>
                <ListItem>Cache busting</ListItem>
                <ListItem>Testing</ListItem>
              </List>
            </Appear>
            <Appear>
              <Text>What tools do I use? Which tools work together?</Text>
            </Appear>
          </Slide>

          <Slide notes="Tooling changes frequently. The project we created a month ago won'tbe supported anymore. ">
            <Heading size={3}>
              Rapid rate of change
            </Heading>
            <Text>Component => Browserify => Webpack => JSPM, Rollup, Pundle or ???</Text>
          </Slide>

          <Slide notes="projects never get updated">
            <Heading size={3}>
              Lets create a generator so we never have to do that again!
            </Heading>
            <Text>Wait, we've updated the generator (e.g. bug, best practice, improvement etc), how do I update my project?</Text>
          </Slide>

          <Slide>
            <Heading size={3}>
              2. using a template/generator is better... but
            </Heading>
          </Slide>

          <Slide>
            <Heading size={3}>
              3. build tools as a package… better!
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1}>
              Tradie!
            </Heading>
            <List>
              <ListItem>Abstract the tasks (as much as possible) - saves you from having to research what tasks need to be performed to build an app, and one that is performant</ListItem>
              <ListItem>Abstract the tools (as much as possible) - saves you from having to research, experiment, configure and maintain tooling for each task - limits how much of your project needs to update when the underlying tooling changes - simple `npm update` to recieve bugfixes and minor additions (rather than tedious manual merge process with generators)</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1}>
              Start using it
            </Heading>
          </Slide>

          <Slide notes="We need your help.">
            <Heading size={3}>
              Get behind it! - its still early days and has a few rough edges but the more we use it the more it will improve
            </Heading>
            <Appear>
              <List>
                <ListItem>Use it</ListItem>
                <ListItem>Raise bugs</ListItem>
                <ListItem>Improve the documentation</ListItem>
                <ListItem>Increase the test coverage</ListItem>
                <ListItem>Add desired features e.g. HMR</ListItem>
              </List>
            </Appear>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
