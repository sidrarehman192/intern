import React, { Component } from 'react';
import { Grid, Cell ,List, ListItem, ListItemContent} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://i.pinimg.com/736x/68/29/b8/6829b881ae314429369d7743331d48ea.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

             <h2 style={{paddingTop: '2em'}}>Sidra Rehman</h2>
            <h4 style={{color: 'grey'}}>CISE</h4>
            <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
            <p>This is Sidra Rehman, currently studying computer system Engineering & working as a mersnstack internee..</p>
            <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-home" aria-hidden="true"/>
                    <p>latifabad.hyderabad</p>
                  </ListItemContent>
                </ListItem>
            
                <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
            <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (022)-123-456
                  </ListItemContent>
                </ListItem>
            <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
            <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-facebook" aria-hidden="true"/>
                    sidra.com
                  </ListItemContent>
                </ListItem>
            <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
            <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    sidra.rehman@portfolio.com
                  </ListItemContent>
                </ListItem>
            <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
            </List>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-institution" aria-hidden="true"/>
                  </ListItemContent>
                </ListItem>
            <h2>Education
            </h2>
            <Education
            
              startYear={2002}
              endYear={2014}
              schoolName="St.marry school"
              schoolDescription=""
               />
               <hr style={{borderTop: '3px solid #e22947'}}/>
               <Education
                 startYear={2014}
                 endYear={2016}
                 schoolName="Punjab group of colleges"
                 schoolDescription="pre-engineering"
                 
                />
                <hr style={{borderTop: '3px solid #e22947'}}/>
                 <Education
                 startYear={2016}
                 schoolName="Mehran University of Engineering & technology"
                 schoolDescription="computer system engineering"
               
                 />
                  <hr style={{borderTop: '3px solid #e22947'}}/>
              <h2>Experience</h2>
            <Experience
              startYear={2018}
              jobName="Internship"
              jobDescription=" web development"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
              
                skill="javascript"
                progress={80}
               
                />
                <Skills
                  skill="java"
                  progress={80}
                  />
                  <Skills
                    skill="c++"
                    progress={90}
                    />
                    <Skills
                      skill="Ms Office"
                      progress={100}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;