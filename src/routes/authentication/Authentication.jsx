import SignInForm from "../../components/signin/Sign-in";
import SignUpForm from "../../components/signup/Sign-up";
import "./authentication.scss"

const Authentication = () => {
 

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
