<script setup>
const skills = [
  "AWS", "Azure", "C", "C++", "CSS", "HTML", "Javascript", "NLP", "Pytorch", "Python", "React", "R", "Ruby", "SQL", "TCP/IP", "TensorFlow"
];
</script>

<template>
  <h1>-- Job Opportunities --</h1>
  <div class="jobs page">
    <div class="job-filters">
      <div class="job-skills flex">
        <template v-for="skill in skills">
          <button @click="selectSkill(skill)" 
            :class="{ 'selected': selected[skill] === true }" 
            class="skill-bubble">{{ skill }}</button>
        </template>
      </div>
    </div>
    <div class="job-list scroll">
      <div v-for="job in filteredJobs" :key="job.id" class="job-preview">
        <h2>{{ job.title }}</h2>
        <h3>{{ job.level }}</h3>
        <div class="job-details">{{ job.description }}</div>
        <div class="job-details">{{ job.responsibilities }}</div>
        <div class="job-skills">
          Skills:
          <span v-for="skill in job.skills" :key="skill" class="skill-tag">{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const skills = [
  "AWS", "Azure", "C", "C++", "CSS", "HTML", "Javascript", "NLP", "Pytorch", "Python", "React", "R", "Ruby", "SQL", "TCP/IP", "TensorFlow"
];
export default {
  data() {
    let sel = {};
    for (const skill of skills) {
      sel[skill] = false;
    }
    return {
      selected: sel,
      jobs: [
        { id: 1,
          title: 'Software Engineer',
          level: 'Intern',
          description: 'This position that involves designing, developing, testing, and maintaining high-quality code ' +
              'for software applications. Collaborate with cross-functional teams, including product managers, designers, ' +
              'and other developers. Participate in system design, problem-solving, code reviews, and testing. Work closely' +
              ' with team members to ensure seamless integration of software components. Contribute to documentation and ' +
              'continuously improve skills.',
          skills: ['Java', 'Python', 'C++'] },
        {
          id: 2,
          title: 'Web Developer',
          level: 'Entry',
          description: 'As an entry-level web developer, you will be responsible for designing, coding, and modifying ' +
              'websites. Collaborate with cross-functional teams to implement visual elements and user experiences. Ensure ' +
              'the technical feasibility of UI/UX designs and optimize applications for maximum speed and scalability.',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        },
        { id: 3,
          title: 'Data Engineer',
          level: 'Junior',
          description: 'As a Junior Data Engineer, you will be responsible for designing, developing, and maintaining ' +
              'scalable data pipelines. Collaborate with data scientists and analysts to understand data requirements ' +
              'and ensure data quality. Implement ETL processes, troubleshoot data issues, and contribute to the overall ' +
              'data architecture. Familiarity with database management systems and programming languages such as SQL is ' +
              'required.',
          skills: ['Python', 'SQL'] },
        { id: 4,
          title: 'ML Engineer',
          level: 'Senior',
          description: 'As a senior Machine Learning Engineer, you will lead the development and implementation of ' +
              'cutting-edge machine learning models. Collaborate with cross-functional teams to define project goals, ' +
              'identify data sources, and deploy scalable solutions. Mentor junior team members and stay current with the ' +
              'latest advancements in machine learning and artificial intelligence.',
          skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP'] },
        { id: 5,
          title: 'Systems Architect',
          level: 'Entry',
          description: 'As an entry-level Systems Architect, you will be responsible for designing and implementing ' +
              'information systems that support the enterprise infrastructure. You will work closely with other IT ' +
              'professionals to analyze business requirements and provide innovative solutions. This role involves ' +
              'designing system architecture, integrating new technologies, and ensuring the overall stability and ' +
              'performance of systems.',
          skills: ['C'] },
        { id: 6,
          title: 'Information Security Analyst',
          level: 'Intern',
          description: 'As an Information Security Analyst Intern, you will work closely with our security team to ' +
              'support various initiatives. Responsibilities include monitoring security alerts, conducting vulnerability ' +
              'assessments, and assisting in incident response. Gain hands-on experience in implementing and maintaining ' +
              'security measures across our systems.',
          skills: ['TCP/IP', 'Python'] },
      ],
    };
  },
  computed: {
    filteredJobs() {
      let filtered = [];
      let noMatch = false;
      for (const [sk, sel] of Object.entries(this.selected)) {
        if (sel) {
          for (const job of this.jobs) {
            if (job.skills.includes(sk)) {
              filtered.push(job);
              break;
            }
          }
          // no match.
          noMatch = true;
        }
      }
      if (!noMatch && filtered.length === 0) {
        return this.jobs;
      }
      return filtered;
    },
  },
  methods: {
    selectSkill(skill) {
      this.selected[skill] = !this.selected[skill];
    },
  },
};

</script>
<style>
.job-filters{
  font-size: 24px;
  color: var(--main-pink);
}

.job-list{
  max-height: 500px;
  overflow-y: auto;
}

.job-skills{
  justify-content: flex-start;
  margin: 1rem 0rem
}

.job-preview{
  border-top: 1px solid var(--light-pink);
  padding: 20px 0;
}

.skill-bubble {
  background-color: rgba(190, 0, 120, 0.81); /* Default color */
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 24px;
}


.job-details {
  font-size: 12px;
}


.selected {
  background-color: rgba(215, 167, 196, 0.81);
}

.skill-tag {
  background-color: #e0e0e0;
  color: #333;
  padding: 4px 8px;
  margin-right: 4px;
  border-radius: 8px;
  font-size: 12px;
}
</style>

      }
      // if nothing is filtered, everything is shown.
      if (!noMatch && filtered.length === 0) {
        return this.jobs;