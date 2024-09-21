function skillsMember() {
  const member = {
    name: 'John Doe',
    age: 30,
    skills: ['JavaScript', 'React', 'Node']
  };
  member.skills = member.skills.map((skill) => skill.toUpperCase());
  return member.skills;
}