import { users } from '../constants/people';
import ProfileCard from '../components/ProfileCard';

const About = () => {
  return (
    <div className="flex-grow flex sm:flex-row sm:justify-around flex-col items-start flex-wrap bg-primary w-full">
      <div className="absolute z-[0] w-[20%] h-[15%] right-10 bottom-10 pink__gradient" />
      <div className="absolute z-[1] w-[40%] h-[40%] right-10 bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] w-[30%] h-[30%] right-20 bottom-20 blue__gradient" />

      {users.map((user) => (
        <ProfileCard key={user.name} user={user} />
      ))}
    </div>
  )
}

export default About