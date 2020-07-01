import React from 'react';
import '../App.css';
import BootstrapCard from './BootstrapCard';


function Projects() {
    return(
        <div className="projects-text">
            <div className="projects-heading">
            <h1>Projects</h1>
            </div>
            <BootstrapCard title="CSVC Enhancing Education Data Challenge" sub="python (pandas, matplotlib, seaborn), excel" content="Analyzed testing data for students of DC Public Charter School system. I identified the areas needing improvement in the Mathematics and Reading portion based on test scores and projections." github="https://github.com/amodmathur/CSVC-Data-Challenge" preview="https://drive.google.com/file/d/1qh77GGxAAR_kWB4SrTZrN35CTw9Iy3zf/view?usp=sharing" />
            <BootstrapCard title="UMD Waste Collection Data Analysis" sub="python (pandas, matplotlib, numpy)" content="This data analysis project aims to enhance the efficiency of garbage truck routes around UMD's campus using real-time data from Compology's sensors. Metrics are captured to recommend efficient routes and analyze trends in waste collection, for the larger purpose of providing a greater means of sustainability at the University of Maryland." github="https://github.com/amodmathur/bmgt438a-project" preview="https://drive.google.com/file/d/1sM2870YastCyjhmOAEHipCRGzZqsNkc5/view?usp=sharing"/>
            <BootstrapCard title="Personal Website (you're here!)" sub="react.js, javascript, html/css, bootstrap" />
            <p> Projects in Development: Simple Weather Dashboard, Easy Recipe Database</p>
        </div>
    );
}

export default Projects;