import { getSession, signIn } from "next-auth/react";
import Image from "next/image";

const Login = ({ providers }) => {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        width={400}
        height={400}
        objectFit="contain"
      />
      <>
        {providers &&
          Object.values(providers).map((provider) => (
            <button
              type="button"
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className="black_btn"
            >
              <h1
                onClick={() => signIn()}
                className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
              >
                Login with Facebook
              </h1>
            </button>
          ))}
      </>
    </div>
  );
};

export default Login;
