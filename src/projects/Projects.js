import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import { Helmet } from 'react-helmet'
import PublicProfiles from './PublicProfiles'
import Publications from './Publications'
import SideProjects from './SideProjects'

export default function Projects() {

    return (
        <div className="Projects">
            <Helmet>
                <title>Projects | Steven Boutcher</title>
            </Helmet>
            <Navbar currentPage="Projects" />
            <Header title="PROJECTS" />
            <PublicProfiles />
            <Publications />
            <SideProjects />
        </div>
    );
}