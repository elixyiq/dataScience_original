/*
* 首页信息
*/
import React from 'react';
import bgImage from '../../asserts/bg_mix_ericsson.jpg';
import authorImage from '../../asserts/author.jpg';
const Home = () => {

  const divStyle = {
    color: 'black',
    // backgroundImage: 'url(' + imgUrl + ')',
    // backgroundColor:'White'
    backgroundImage:'url(' + bgImage + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition:'center',

  };
  const h1st = {
    textAlign:'right',
  };
  const content= {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
  };
  return (
    // style={"background-color:rgb(0,0,0)"}
      <body style={divStyle}>
        <div style={content}>
      <div style={{display: 'flex',justifyContent:'left', alignItems:'center', }}>
        <h1>Ericsson Faulty Hardware Detector</h1>
      
      </div>

      <div style={{display: 'flex',  alignItems:'center',left:'500px',whiteSpace:'pre-wrap' }} >
       <h3 >-----Applied Data Science Camp </h3></div>
       <br></br>
       <br></br>
       <p>
        This is a project for MIX-ERICSSON Applied Data Science Camp.
       </p>
       <p>
        The tool developed based on Data Mining and Machine learing related models. With this gear, following merits shall be brought:
       </p>
       <p>
       - Improve customer satisfaction as less hardware are returned to Ericsson office, people can focus on the software problem. It may give customer feeling of better hardware quality. 
       </p>
       <p>
         - Improve current process as on-site screening is missing in current process and manual screening on site is costly, un-efficient and costly.
       </p>
       <p>
         - Ericsson revenue is increased as hardware maintenance cost is reduced and manual screen work in Ericsson back office is reduced. 
      </p>
      <p>
      - Cost is decreased as number of returned hardware is reduced and manual screening work in Ericsson back office is reduced. 

       </p>
       <br></br>
       <h3>
        Author: 
       </h3>
  
       <pre>Shigemitsu Sasaki        Wayne Gou          Yiqun Li</pre>
       <img src={authorImage} alt="logo" width={'30%'}/>
       </div>
       </body>
  )
};

export default Home;
