function SkillTag(props) {
  const str = props.skill;
  const skills = str?.split(",");

  return skills?.map((skill) => {
    return skill;
  });
}

export default SkillTag;
