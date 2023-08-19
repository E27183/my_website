import React from 'react';
import './App.css';
import { EuiAccordion, EuiFlexGroup, EuiFlexItem, EuiImage, EuiLink, EuiSpacer, EuiText } from '@elastic/eui';
const image = require("./media/me.png");

function App() {
  return (
    <div>
      <EuiFlexGroup>
        <EuiFlexItem className='right_align'>
          <h1>Edan Landow</h1>
          <h4>Software Engineer</h4>
        </EuiFlexItem>
        <EuiFlexItem>
        <EuiImage
          size="m"
          alt="Personal Photo"
          src={image}
        />
        </EuiFlexItem>
      </EuiFlexGroup>
        <p>Hi, I'm Edan. I'm a Software Engineer based in Canberra, Australia.</p>
        <p>I'm experienced at learning new languages and technologies on the fly and am always ready to learn more to ensure I can use the best tool for the job.</p>
        <p>I'm ambitious and love to be challenged.</p> 
        <p>I work well in a team and am happy to co-ordinate with others to find and work on problems in the best way for every participant, and am always keen to both teach and learn from others.</p>
        <p>I'm open to all kinds of work, however as someone interested in science and problems that require algorithms to solve, I'd be exceptionally excited for work in scientific industries.</p>
        <p>If I seem like someone you'd be keen to have working for you, feel free to reach out using the details under "Contact Me".</p>
      <EuiAccordion id={"0"} buttonContent={"Study"} paddingSize="m">
        <EuiText>
          <p>2021: Graduated the Australian National University with a bachelor of Information Technology majoring in Advanced Intelligent Systems</p>
          <p>2023: Completed online courses on Concurrent Programming in C++</p>
        </EuiText>
      </EuiAccordion>
      <EuiSpacer />
      <EuiAccordion id={"1"} buttonContent={"Experience"} paddingSize="m">
        <EuiText>
          <p>2022-2023: Worked as a software developer at Countersight using a variety of tools and languages</p>
          <p>Personal Projects: In my free time I often work on small, personal projects to gain experience with new languages</p>
        </EuiText>
      </EuiAccordion>
      <EuiSpacer />
      <EuiAccordion id={"2"} buttonContent={"Contact me"} paddingSize="m">
        <EuiText>
          <p>Email: edan.landow@gmail.com</p>
          <p>Mobile: +61418643577</p>
        </EuiText>
      </EuiAccordion >
      <EuiSpacer />
      <EuiAccordion id={"3"} buttonContent={"Github/Linkedin"} paddingSize="m">
        <EuiLink href="https://github.com/E27183">https://github.com/E27183</EuiLink>
        <EuiSpacer />
        <EuiLink href="https://www.linkedin.com/in/edan-landow/">https://www.linkedin.com/in/edan-landow/</EuiLink>
      </EuiAccordion>
    </div>
  ); 
}

export default App;

/*

Success! Created my-app at /home/edan/Desktop/my_website/my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start

  */
