import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      id: i,

      firstName: faker.person.firstName(),
      avatar: faker.image.avatar(),
      lastName: faker.person.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number,
      address: {
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
      },
    }));

    setData(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm  overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {data?.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
