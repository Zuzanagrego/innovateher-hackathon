<template>
  <div>
    <h1>-- Employee Profiles --</h1>
    <form action="/search" method="GET" class="search-form">
      <label for="searchInput"></label>
      <div class="search-input">
        <input type="text" id="searchInput" name="query" v-model="searchTerm" placeholder="Type your search term">
        <button type="submit">Search</button>
      </div>
    </form>

    <div class="profile-list">
      <div v-for="profile in filteredProfiles" :key="profile.id" class="profile-preview">
        <h2>{{ profile.name }}</h2>
        <h3>{{ profile.company }} @ {{ profile.location }}</h3>
        <div>"{{ profile.statement }}"</div>
        <div>Specialization: {{ profile.specialization }}</div>
        <div>Contact: {{ profile.contact }}</div>
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
  margin: 1rem 2rem;
  display: flex;
  gap: 10px;
  margin-left: 2rem;
}

label {
  font-weight: bold;
  font-size: 18px;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 200px;
  border-radius: 24px;
  padding: 2px 12px;
}

button {
  padding: 10px 16px;
  font-size: 16px;
  background-color: rgba(190, 0, 120, 0.81);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 24px;
}

.profile-list {
  justify-content: flex-start;
  margin: 1rem 2rem;
  max-height: 560px;
  overflow-y: auto;
  height: 60vh;
}

.profile-preview {
  border-top: 1px solid var(--light-pink);
  padding: 20px 0;
}
</style>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      profiles: [
        {
          id: 1,
          name: 'John Doe',
          location: 'New York City, NY',
          company: 'Tech Co',
          specialization: 'Web Development',
          contact: 'john.doe@example.com',
          statement: 'Passionate about creating innovative web solutions and improving user experiences.'
        },
        {
          id: 2,
          name: 'Jane Smith',
          location: 'San Francisco, CA',
          company: 'InnoTech',
          specialization: 'Data Science',
          contact: 'jane.smith@example.com',
          statement: 'Dedicated to unlocking insights from data and driving business decisions.'
        },
        {
          id: 3,
          name: 'Bob Johnson',
          location: 'Seattle, WA',
          company: 'SoftCorp',
          specialization: 'Cloud Computing',
          contact: 'bob.johnson@example.com',
          statement: 'Experienced in designing and implementing scalable cloud solutions.'
        },
        {
          id: 4,
          name: 'Alice Williams',
          location: 'Los Angeles, CA',
          company: 'Digital Innovators',
          specialization: 'Mobile App Development',
          contact: 'alice.williams@example.com',
          statement: 'Passionate about creating seamless and user-friendly mobile applications.'
        },
        {
          id: 5,
          name: 'Charlie Brown',
          location: 'Chicago, IL',
          company: 'Code Masters',
          specialization: 'Software Engineering',
          contact: 'charlie.brown@example.com',
          statement: 'Committed to writing clean and efficient code for complex software applications.'
        },
      ],
    };
  },
  computed: {
    filteredProfiles() {
      return this.profiles.filter(profile => profile.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    },
  },
};
</script>