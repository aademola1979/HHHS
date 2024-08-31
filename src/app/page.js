
import HomeWelcome from './components/partials/home-partials/homeWelcome';
import CallToAction from './components/partials/home-partials/CallToAction';
import Welcome from './components/partials/home-partials/Welcome';
import FAQs from './components/partials/home-partials/FQAs';
import LifeOnCampus from './components/partials/home-partials/LifeOnCampus';
import ComingEvents from './components/partials/home-partials/ComingEvents';
import RecentEvents from './components/partials/home-partials/RecentEvents';
import Facts from './components/partials/home-partials/Facts';
import SectionLinkList from './components/SectionLinkList';
import LearnersBlogs from './components/partials/home-partials/LearnersBlogs';

export default function Home() {
        const sectionLinkList = [
    
                {
                  link:'#welcome',
                  text:'Welcome'
                },
               

                {
                        link:'#lifeOnCampus',
                        text:'Life on Campus'
                      },
                      {
                        link:'#upComingEvents',
                        text:'Upcoming Events'
                      },

                      {
                        link:'#recentEvents',
                        text:'Recent Events'
                      },

                      {
                        link:'#facts',
                        text:'Facts About the School'
                      },

                      {
                        link:'#learnersBlogs',
                        text:'Learners\' Blog Articles'
                      },

                      {
                        link:'#faqs',
                        text:'Frequently Asked Questions'
                      },

                      {
                        link:'#callToAction',
                        text:'Contact Us'
                      },
        ]

        return (
                <>
                        
      

                </>
        )
}
