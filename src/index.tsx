import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AboutMe, Contact, Footer, Header, NavigationBar, Portfolio, WorkExperience } from './components'

// Import the contents of the css files.
import 'semantic-ui-css/semantic.min.css'
import './css';


// The data that the Index class manages.
interface IndexProps {}
interface IndexState {
  siteRawData: string;
  siteData: ISiteData;
}

// Dummy data in case loading fails.
var siteData: string = `
{
  "siteInformation":
  {
    "headerName": "PAOLO SIAT",
    "headerBackground": "villain.png",
    "headerBackgroundHovered": "villainx.png",
    "headerJobTitle": "Graphic Designer",
    "copyrightMessage": "© 2020 Paolo Siat. All rights reserved",
    "contactJobTitle": "Graphic Designer",
    "contactFullName": "John Paolo Siat",
    "contactPhone": "(+64)29 126 9475",
    "contactEmail": "paolosiat@gmail.com",
    "socialInstagramLink": "https://www.instagram.com/billygreatestwarriorever/",
    "socialYoutubeLink": "https://www.youtube.com/channel/UCWuBcvSc01LjIofiTb97I2g",
    "aboutMeTextFile": "aboutMe.txt",
    "workExperienceFile": "work-experience.md"
  },
  "siteStructure":
  {
    "aboutMeTitle": "ABOUT ME",
    "portfolioTitle": "PORTFOLIO",
    "workExperienceTitle": "WORK EXPERIENCE",
    "contactInformationTitle": "CONTACT INFORMATION",
    "contactFormTitle": "SEND ME A MESSAGE!",
    "navigationAboutMeTitle": "ABOUT ME",
    "navigationPortfolioTitle": "PORTFOLIO",
    "navigationWorkExperienceTitle": "WORK EXPERIENCE",
    "navigationContactTitle": "CONTACT",
    "backToTopText": "Back to Top",
    "contactFormSubmitText": "Send"
  },
  "portfolioCategories": [
    {
      "name": "graphic-design",
      "title": "GRAPHIC DESIGN",
      "visible": false,
      "images": [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.png",
        "18.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg",
        "29.jpg",
        "30.jpg",
        "31.jpg",
        "32.jpg",
        "33.jpg",
        "34.jpg",
        "35.jpg",
        "36.jpg",
        "37.jpg",
        "38.jpg",
        "39.jpg",
        "40.jpg",
        "41.jpg",
        "42.jpg",
        "43.jpg",
        "44.JPG",
        "45.jpg",
        "46.jpg",
        "47.jpg",
        "48.jpg",
        "49.jpg",
        "50.jpg",
        "51.jpg",
        "52.jpg",
        "53.jpg"
      ]
    },
    {
      "name": "illustrations",
      "title": "ILLUSTRATIONS",
      "visible": false,
      "images": [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "20.jpg",
        "21.jpg"
      ]
    },
    {
      "name": "traditional",
      "title": "TRADITIONAL",
      "visible": false,
      "images": [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg"
      ]
    },
    {
      "name": "others",
      "title": "OTHERS",
      "visible": false,
      "images": [
        "1.jpg",
        "2.jpg",
        "3.jpg"
      ]
    }
  ]
}`;

fetch('site-data.json')
.then(data => data.text())
.then(text => {
  siteData = text;

  // Whatever gets added here gets rendered on the screen.
  ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
      <NavigationBar siteData={JSON.parse(siteData)} />
      <div id='content'>
        <Header siteData={JSON.parse(siteData)} />
        <AboutMe siteData={JSON.parse(siteData)} />
        <Portfolio siteData={JSON.parse(siteData)} />
        <WorkExperience siteData={JSON.parse(siteData)} />
        <Contact siteData={JSON.parse(siteData)} />
        <Footer siteData={JSON.parse(siteData)} />
      </div>
    </Router>,
    document.getElementById('root')
  );
});

// Rendering is done in HTML and returns what this class what actually look like on the screen.
// export default class Index extends Component<IndexProps, IndexState> {
//   constructor (props: IndexProps) {
//     super(props);

//     this.state = {
//       siteRawData: '',
//       siteData: JSON.parse(siteData)
//     }

//     // Grab the text content of the file and parse it in to a class variable.
//     fetch('site-data.json')
//     .then(data => data.text())
//     .then(text => {
//       this.setState({ siteRawData: text, siteData: JSON.parse(text) });
//     });
//   }

//   componentDidMount(): void {this.forceUpdate()}

//   render(): JSX.Element {
//     return (
//       <div>
//         <NavigationBar siteData={this.state.siteData} />
//         <div id='content'>
//           <Header siteData={this.state.siteData} />
//           <AboutMe siteData={this.state.siteData} />
//           <Portfolio siteData={this.state.siteData} />
//           <WorkExperience siteData={this.state.siteData} />
//           <Contact siteData={this.state.siteData} />
//           <Footer siteData={this.state.siteData} />
//         </div>
//       </div>
//     );
//   }
// }
