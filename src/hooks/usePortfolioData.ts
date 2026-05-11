import { useTrack } from '../context/TrackContext';
import * as aiData from '../data/index';
import * as webData from '../data/web';

export const usePortfolioData = () => {
    const { track } = useTrack();

    if (track === 'web') {
        return {
            personalInfo: webData.webPersonalInfo,
            stats: webData.webStats,
            projects: webData.webProjects,
            skillCategories: webData.webSkillCategories,
            experiences: webData.webExperiences,
            publications: webData.webPublications,
        };
    }

    return {
        personalInfo: aiData.personalInfo,
        stats: aiData.stats,
        projects: aiData.projects,
        skillCategories: aiData.skillCategories,
        experiences: aiData.experiences,
        publications: aiData.publications,
    };
};
