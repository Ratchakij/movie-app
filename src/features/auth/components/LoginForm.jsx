// import LoginInput from "./LoginInput";
// import validateLogin from "../validators/validate-login";
// import InputErrorMessage from "./InputErrorMessage";
// import useForm from "../../../hooks/useForm";
// import { useDispatch } from "react-redux";
// import { login } from "../slice/auth-slice";

// export default function LoginForm() {
//   const { input, handleChangeInput, error, handleSubmitForm } = useForm(
//     {
//       username: "",
//       password: "",
//     },
//     validateLogin
//   );

//   const dispatch = useDispatch();

//   const onSubmit = async (data) => {
//     try {
//       await dispatch(login(data)).unwrap();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmitForm(onSubmit)}>
//       <div className="grid gap-4">
//         <div>
//           <LoginInput
//             placeholder="Email address or phone number"
//             name="username"
//             value={input.username}
//             onChange={handleChangeInput}
//             isInvalid={error.username}
//           />
//           <InputErrorMessage message={error.username} />
//         </div>
//         <div>
//           <LoginInput
//             placeholder="Password"
//             name="password"
//             value={input.password}
//             onChange={handleChangeInput}
//             isInvalid={error.password}
//           />
//           <InputErrorMessage message={error.password} />
//         </div>
//         <div>
//           <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold">
//             Log in
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }
