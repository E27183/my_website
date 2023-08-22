import React from 'react';
import './App.css';
import { EuiAccordion, EuiBasicTable, EuiButton, EuiDataGrid, EuiFlexGroup, EuiFlexItem, EuiImage, EuiLink, EuiListGroup, EuiListGroupItem, EuiSpacer, EuiText} from '@elastic/eui';

const file_saver = require('file-saver');
const image = require("./media/me.jpg");

function App() {

  type table_entry = {
    id: string;
    language: string;
    technology: string;
  };

  const languages_technologies: table_entry[] = [{
      id: "0",
      language: "C++",
      technology: "Git"
    }, {
      id: "1",
      language: "C",
      technology: "Jira"
    }, {
      id: "2",
      language: "Go",
      technology: "React"
    }, {
      id: "3",
      language: "Java",
      technology: "Make"
    }, {
      id: "4",
      language: "Python",
      technology: ""
    }, {
      id: "5",
      language: "Bash / Batch",
      technology: ""
    }, {
      id: "6",
      language: "Javascript / Typescript",
      technology: ""
    }, {
      id: "7",
      language: "Docker",
      technology: ""
    }
  ];

  const columns = [{
      id: "language",
      field: "language",
      name: "Language"
    }, {
      id: "language",
      field: "technology",
      name: "Technology"
    }
  ];

  return (
    <div>
      <EuiFlexGroup>
        <EuiFlexItem className='right_align'>
          <EuiText css={{"fontSize": "48px", "fontFamily": "'Courier New', monospace", "color": "#059DC0"}}>Edan Landow</EuiText>
          <EuiText css={{"fontSize": "26px", "fontWeight": "bold", "fontFamily": "'Courier New', monospace", "color": "#6AF2F0"}}>Software Engineer</EuiText>
        </EuiFlexItem>
        <EuiFlexItem >
          <div>
            <EuiImage
              className='left_align'
              size="l"
              alt="Personal Photo"
              src={image}
            />
          </div>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer />
      <EuiSpacer />
        <EuiText color='#04D4F0' css={{"fontSize": "32px", "fontWeight": "lighter"}}>
          <p>Hi. I'm Edan, a Software Engineer based in Canberra, Australia.<br />
          I'm experienced at learning new languages and technologies on the fly and am always ready to learn more to ensure I can use the best tool for the job.<br />
          Technologies I've worked with include:<br /><br /></p>
          <EuiBasicTable
            css={{".euiTableRowCell__mobileHeader": {"display": "none"}}}
            items={languages_technologies}
            columns={columns}
          />
          <p><br />
          As an ambitous developer who loves to be challenged, I'm always keen to take on new problems outside my familiarity.<br /> <br />
          I work well in a team and am happy to co-ordinate with others to find and work on problems in the best way for every participant, and am always keen to both teach and learn from others.<br /> <br />
          I'm open to all kinds of work, however as someone interested in science and problems that require algorithms to solve I'd be exceptionally excited to work with scientific industries.<br /> <br />
          If I seem like someone you'd be keen to have working for you, feel free to reach out using the details under "Contact Me".</p>
        </EuiText>
      <EuiSpacer />
      <EuiSpacer />
      <EuiAccordion id={"0"} buttonContent={"Study"} paddingSize="m" css={{"color": "#04ECF0"}}>
        <EuiText css={{"color": "#04D4F0"}}>
          <p>2021: Graduated the Australian National University with a bachelor of Information Technology majoring in Advanced Intelligent Systems</p>
          <p>2023: Completed online courses on Concurrent Programming in C++</p>
        </EuiText>
      </EuiAccordion>
      <EuiSpacer />
      <EuiAccordion id={"1"} buttonContent={"Experience"} paddingSize="m" css={{"color": "#04ECF0"}}>
        <EuiText css={{"color": "#04D4F0"}}>
          <p>2022-2023: Worked as a software developer at Countersight using a variety of tools and languages</p>
          <p>Personal Projects: In my free time I often work on small, personal projects to gain experience with new languages</p>
        </EuiText>
      </EuiAccordion>
      <EuiSpacer />
      <EuiAccordion id={"2"} buttonContent={"Contact me"} paddingSize="m" css={{"color": "#04ECF0"}}>
        <EuiText css={{"color": "#04D4F0"}}>
          <p>Email: edan.landow@gmail.com</p>
          <p>Mobile: +61418643577</p>
        </EuiText>
      </EuiAccordion >
      <EuiSpacer />
      <EuiAccordion id={"3"} buttonContent={"Github/Linkedin"} paddingSize="m" css={{"color": "#04ECF0"}}>
        <EuiLink href="https://github.com/E27183">https://github.com/E27183</EuiLink>
        <EuiSpacer />
        <EuiLink href="https://www.linkedin.com/in/edan-landow/">https://www.linkedin.com/in/edan-landow/</EuiLink>
      </EuiAccordion>
      <EuiSpacer />
      <EuiAccordion id={"4"} buttonContent={"Download resume"} paddingSize="m" css={{"color": "#04ECF0"}}>
        <EuiButton onClick={() => {
          fetch('http://localhost:8080/resume_download').then((response) => {
            return response.blob();            
          }).then((blob) => {
            console.log(blob);
            file_saver.saveAs(blob, "Edan Landow.pdf");
          }).catch((err) => {console.log(err)});
          }}>Edan Landow.pdf (36.1KB)</EuiButton>
      </EuiAccordion>
    </div>
  ); 
}

export default App;
