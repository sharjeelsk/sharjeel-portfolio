import React from 'react';
import styles from './Skills.module.scss';
import HTML from '../../assets/skill-icons/html.svg'
import CSS from '../../assets/skill-icons/css.svg'
import JS from '../../assets/skill-icons/javascript.svg'
import REACT from '../../assets/skill-icons/react.svg'
import NODE from '../../assets/skill-icons/node.svg'
import EXPRESS from '../../assets/skill-icons/express.svg'
import MONGO from '../../assets/skill-icons/mongo.svg'
import POSTGRESQL from '../../assets/skill-icons/sql.svg'
import PYTHON from '../../assets/skill-icons/python.svg'
import GIT from '../../assets/skill-icons/git.svg'
import GITHUB from '../../assets/skill-icons/github.svg'
import AWS from '../../assets/skill-icons/aws.svg'
import GCP from '../../assets/skill-icons/gcp.svg'
import JIRA from '../../assets/skill-icons/jira.svg'
import ELETRON from '../../assets/skill-icons/electron.svg'
import ZUSTAND from '../../assets/skill-icons/zustand.svg'
import REDUX from '../../assets/skill-icons/redux.svg'
import RECOIL from '../../assets/skill-icons/recoil.svg'
import NEXT from '../../assets/skill-icons/next.svg'
import TYPESCRIPT from '../../assets/skill-icons/typescript.svg'




export default function Skills() {
  const techStack = [
    { id: 1, name: 'HTML', image: HTML },
    { id: 2, name: 'CSS', image: CSS },
    { id: 3, name: 'JavaScript', image: JS },
    { id: 4, name: 'React Js', image: REACT },
    { id: 5, name: 'Node Js', image: NODE },
    { id: 6, name: 'Express Js', image: EXPRESS },
    { id: 7, name: 'MongoDB', image: MONGO },
    { id: 8, name: 'PostgreSQL', image: POSTGRESQL },
    { id: 9, name: 'Python', image: PYTHON },
    { id: 10, name: 'Git', image: GIT },
    { id: 11, name: 'GitHub', image: GITHUB },
    { id: 12, name: 'AWS', image: AWS },
    { id: 13, name: 'GCP', image: GCP },
    { id: 14, name: 'Jira', image: JIRA },
    { id: 15, name: 'Electron JS', image: ELETRON },
    { id: 16, name: 'Zustand', image: ZUSTAND },
    { id: 17, name: 'Redux', image: REDUX },
    { id: 18, name: 'Recoil', image: RECOIL },
    { id: 19, name: 'NextJS', image: NEXT },
    { id: 20, name: 'TypeScript', image: TYPESCRIPT },
  ];
  


  return (
    <section className={styles.skillsParent}>
      <div  className={styles.skillsDescription} > 
        <h1 >Navigate through my techstack !</h1>
        <p>Follow the orbit of innovation</p>
      </div>

      <div className={styles.skills}>
        {techStack.map((skill) => (
          <div className={styles.skill} key={skill.id}>
            <img 
            className={['Express Js', 'GitHub', 'NextJS'].includes(skill.name) ? styles.invert : ''}
            src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}