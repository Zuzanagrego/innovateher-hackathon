<template>
  <div>
    <h1>-- Search Technical Courses --</h1>

    <form action="/search" method="GET" class="search-form">
      <label for="searchInput"></label>
      <div class="search-input">
        <input type="text" id="searchInput" name="query" v-model="searchTerm" placeholder="Type your search term">
        <button type="submit">Search</button>
      </div>
    </form>

    <div class="course-list">
      <div v-for="course in filteredCourses" :key="course.id" class="course-preview">
        <h3>{{ course.name }}</h3>
        <div>Description: {{ course.description }}</div>
        <div>Difficulty: {{ course.difficulty }}</div>
        <div>Length: {{ course.length }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.search-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.search-input {
  display: flex;
  gap: 10px;
}

label {
  font-weight: bold;
  font-size: 18px;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 200px;
  border-radius: 8px;
}

button {
  padding: 10px 16px;
  font-size: 16px;
  background-color: rgba(190, 0, 120, 0.81);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}

.course-list {
  justify-content: flex-start;
  margin: 1rem 2rem;
  max-height: 560px;
  overflow-y: auto;
}

.course-preview {
  border-top: 1px solid var(--light-pink);
  padding: 20px 0;
}
</style>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      courses: [
        { id: 1, name: 'Web Development 101', difficulty: 'Beginner', length: '8 weeks', description: 'Introduction to web development' },
        { id: 2, name: 'Advanced JavaScript', difficulty: 'Intermediate', length: '6 weeks', description: 'In-depth study of JavaScript concepts' },
        { id: 3, name: 'Data Science Fundamentals', difficulty: 'Intermediate', length: '10 weeks', description: 'Explore the basics of data science' },
        { id: 4, name: 'React Development Masterclass', difficulty: 'Advanced', description: 'Become an expert in React development.', length: '10 weeks' },
        { id: 5, name: 'Python for Data Science', difficulty: 'Intermediate', description: 'Learn Python for data analysis and machine learning.', length: '8 weeks' },
        { id: 6, name: 'Full Stack Web Development', difficulty: 'Advanced', description: 'Master both front-end and back-end development.', length: '12 weeks' },
        { id: 7, name: 'Mobile App Development with Flutter', difficulty: 'Intermediate', description: 'Build cross-platform mobile apps using Flutter.', length: '10 weeks' },
        { id: 8, name: 'Ethical Hacking and Cybersecurity', difficulty: 'Advanced', description: 'Learn ethical hacking techniques and enhance cybersecurity skills.', length: '14 weeks' }
        // Add more courses as needed
      ],
    };
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(course => course.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    },
  },
};
</script>